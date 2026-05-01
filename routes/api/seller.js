const express = require('express');
const crypto = require('crypto');
const fs = require('fs/promises');
const path = require('path');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');
const { requireRole } = require('../../authorize');
const { logAuditAction } = require('../../services/audit');
const {
    getSellerWebhookConfig,
    upsertSellerWebhookConfig
} = require('../../services/seller-webhooks');

const router = express.Router();
const DEFAULT_PRODUCT_IMAGE_URL = '/images/product-placeholder.png';
const MAX_PRODUCT_IMAGE_BYTES = 2 * 1024 * 1024;
const PRODUCT_IMAGE_UPLOAD_DIR = path.join(__dirname, '../../public/uploads/products');
const PRODUCT_IMAGE_MIME_EXTENSIONS = {
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

async function saveProductImage({ imageDataUrl, sellerId }) {
    if (!imageDataUrl) {
        return DEFAULT_PRODUCT_IMAGE_URL;
    }

    const match = String(imageDataUrl).match(/^data:(image\/(?:jpeg|png));base64,([A-Za-z0-9+/=]+)$/);
    if (!match) {
        const error = new Error('Product image must be a JPEG or PNG file');
        error.statusCode = 400;
        throw error;
    }

    const [, mimeType, base64Data] = match;
    const imageBuffer = Buffer.from(base64Data, 'base64');

    if (imageBuffer.length === 0 || imageBuffer.length > MAX_PRODUCT_IMAGE_BYTES) {
        const error = new Error('Product image must be 2 MB or smaller');
        error.statusCode = 400;
        throw error;
    }

    await fs.mkdir(PRODUCT_IMAGE_UPLOAD_DIR, { recursive: true });

    const extension = PRODUCT_IMAGE_MIME_EXTENSIONS[mimeType];
    const fileName = `product-${sellerId}-${Date.now()}-${crypto.randomBytes(8).toString('hex')}.${extension}`;
    const filePath = path.join(PRODUCT_IMAGE_UPLOAD_DIR, fileName);

    await fs.writeFile(filePath, imageBuffer);

    return `/uploads/products/${fileName}`;
}

async function removeUploadedProductImage(imageUrl) {
    if (!imageUrl || imageUrl === DEFAULT_PRODUCT_IMAGE_URL || !imageUrl.startsWith('/uploads/products/')) {
        return;
    }

    const fileName = path.basename(imageUrl);
    const filePath = path.join(PRODUCT_IMAGE_UPLOAD_DIR, fileName);

    try {
        await fs.unlink(filePath);
    } catch (error) {
        if (error.code !== 'ENOENT') {
            console.error(error);
        }
    }
}

router.use(auth.authenticateToken, requireRole('seller'));

router.get('/webhook', async (req, res) => {
    try {
        const config = await getSellerWebhookConfig(req.user.id);
        res.json(config);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load seller webhook configuration' });
    }
});

router.put('/webhook', async (req, res) => {
    try {
        const endpointUrl = req.body.endpointUrl == null
            ? null
            : String(req.body.endpointUrl).trim();
        const isActive = Boolean(req.body.isActive);
        const regenerateSecret = Boolean(req.body.regenerateSecret);

        if (endpointUrl) {
            let parsedUrl;

            try {
                parsedUrl = new URL(endpointUrl);
            } catch (error) {
                return res.status(400).json({ error: 'A valid webhook URL is required' });
            }

            if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
                return res.status(400).json({ error: 'A valid webhook URL is required' });
            }
        }

        if (isActive && !endpointUrl) {
            return res.status(400).json({ error: 'An active webhook must include an endpoint URL' });
        }

        const config = await upsertSellerWebhookConfig({
            sellerId: req.user.id,
            endpointUrl,
            isActive,
            regenerateSecret
        });

        res.json(config);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save seller webhook configuration' });
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: { sellerId: req.user.id },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load seller products' });
    }
});

router.get('/sales', async (req, res) => {
    try {
        const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
        const pageSize = 10;
        const where = {
            sellerId: req.user.id
        };

        const [sales, totalCount, totals, uniqueOrders] = await Promise.all([
            prisma.orderItem.findMany({
                where,
                include: {
                    order: {
                        select: {
                            id: true,
                            status: true,
                            paymentMethod: true,
                            createdAt: true
                        }
                    }
                },
                orderBy: {
                    order: {
                        createdAt: 'desc'
                    }
                },
                skip: (page - 1) * pageSize,
                take: pageSize
            }),
            prisma.orderItem.count({ where }),
            prisma.orderItem.aggregate({
                where,
                _sum: {
                    lineTotal: true,
                    quantity: true
                },
                _count: {
                    _all: true
                }
            }),
            prisma.orderItem.findMany({
                where,
                distinct: ['orderId'],
                select: {
                    orderId: true
                }
            })
        ]);

        res.json({
            sales,
            summary: {
                grossSales: Number((totals._sum.lineTotal || 0).toFixed(2)),
                unitsSold: totals._sum.quantity || 0,
                orderItemCount: totals._count._all || 0,
                orderCount: uniqueOrders.length
            },
            page,
            pageSize,
            totalCount,
            totalPages: Math.max(Math.ceil(totalCount / pageSize), 1),
            hasPreviousPage: page > 1,
            hasNextPage: page * pageSize < totalCount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load seller sales' });
    }
});

router.post('/products', async (req, res) => {
    let imageUrl = DEFAULT_PRODUCT_IMAGE_URL;

    try {
        const { name, description, price, stock, imageDataUrl } = req.body;
        const parsedPrice = Number(price);
        const parsedStock = Number(stock);

        if (!name || Number.isNaN(parsedPrice) || Number.isNaN(parsedStock)) {
            return res.status(400).json({ error: 'Name, price, and stock are required' });
        }

        if (parsedPrice < 0 || parsedStock < 0) {
            return res.status(400).json({ error: 'Price and stock must be non-negative' });
        }

        imageUrl = await saveProductImage({
            imageDataUrl,
            sellerId: req.user.id
        });

        const product = await prisma.product.create({
            data: {
                name: String(name).trim(),
                description: description ? String(description).trim() : null,
                imageUrl,
                price: parsedPrice,
                stock: Math.floor(parsedStock),
                sellerId: req.user.id,
                isListed: false,
                listingStatus: 'pending'
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'listing_creation',
            details: `Created listing "${product.name}" pending admin approval`
        });

        res.status(201).json(product);
    } catch (error) {
        await removeUploadedProductImage(imageUrl);

        if (error.statusCode) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.error(error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

module.exports = router;
