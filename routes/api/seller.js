const express = require('express');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');
const { requireRole } = require('../../authorize');
const { logAuditAction } = require('../../services/audit');
const {
    getSellerWebhookConfig,
    upsertSellerWebhookConfig
} = require('../../services/seller-webhooks');

const router = express.Router();

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

router.post('/products', async (req, res) => {
    try {
        const { name, description, price, stock } = req.body;
        const parsedPrice = Number(price);
        const parsedStock = Number(stock);

        if (!name || Number.isNaN(parsedPrice) || Number.isNaN(parsedStock)) {
            return res.status(400).json({ error: 'Name, price, and stock are required' });
        }

        if (parsedPrice < 0 || parsedStock < 0) {
            return res.status(400).json({ error: 'Price and stock must be non-negative' });
        }

        const product = await prisma.product.create({
            data: {
                name: String(name).trim(),
                description: description ? String(description).trim() : null,
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
        console.error(error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

module.exports = router;
