const express = require('express');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');
const { requireRole } = require('../../authorize');
const { logAuditAction } = require('../../services/audit');
const {
    addCompareItem,
    getCompareItems,
    randomAccess,
    removeCompareItem
} = require('../../buyer/product_handling');
const { deliverSellerOrderPlacedWebhooks } = require('../../services/seller-webhooks');

const router = express.Router();
const PAYMENT_METHODS = new Set([
    'demo_card',
    'demo_paypal',
    'cash_on_delivery'
]);

function normalizeShippingAddress(input) {
    const shippingAddress = input && typeof input === 'object' ? input : {};

    return {
        name: String(shippingAddress.name || '').trim(),
        line1: String(shippingAddress.line1 || '').trim(),
        line2: String(shippingAddress.line2 || '').trim(),
        city: String(shippingAddress.city || '').trim(),
        state: String(shippingAddress.state || '').trim(),
        postalCode: String(shippingAddress.postalCode || '').trim(),
        country: String(shippingAddress.country || '').trim()
    };
}

function isShippingAddressComplete(shippingAddress) {
    return shippingAddress.name
        && shippingAddress.line1
        && shippingAddress.city
        && shippingAddress.state
        && shippingAddress.postalCode
        && shippingAddress.country;
}

router.use(auth.authenticateToken, requireRole('buyer'));

router.get('/products', async (req, res) => {
    try {
        const search = typeof req.query.search === 'string' ? req.query.search.trim() : '';
        const where = {
            isListed: true,
            listingStatus: 'approved',
            seller: {
                banned: false
            }
        };

        if (search) {
            where.OR = [
                {
                    name: {
                        contains: search
                    }
                },
                {
                    description: {
                        contains: search
                    }
                }
            ];
        }

        const products = await prisma.product.findMany({
            where,
            include: {
                seller: {
                    select: {
                        username: true
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load products' });
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product id' });
        }

        const product = await prisma.product.findFirst({
            where: {
                id,
                isListed: true,
                listingStatus: 'approved',
                seller: {
                    banned: false
                }
            },
            include: {
                seller: {
                    select: {
                        username: true
                    }
                }
            }
        });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load product' });
    }
});

router.get('/cart', async (req, res) => {
    try {
        const cartItems = await prisma.cartItem.findMany({
            where: {
                buyerId: req.user.id
            },
            include: {
                product: {
                    include: {
                        seller: {
                            select: {
                                username: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        const subtotal = cartItems.reduce((sum, item) => {
            return sum + (item.product.price * item.quantity);
        }, 0);

        const taxRate = 0.07;
        const tax = Number((subtotal * taxRate).toFixed(2));
        const total = Number((subtotal + tax).toFixed(2));

        res.json({
            items: cartItems,
            subtotal: Number(subtotal.toFixed(2)),
            taxRate,
            tax,
            total
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load cart' });
    }
});

router.get('/compare', async (req, res) => {
    try {
        const items = await getCompareItems(req.user.id);

        res.json({ items });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load comparison list' });
    }
});

router.get('/orders/:id', async (req, res) => {
    try {
        const orderId = Number(req.params.id);

        if (Number.isNaN(orderId)) {
            return res.status(400).json({ error: 'Invalid order id' });
        }

        const order = await prisma.order.findFirst({
            where: {
                id: orderId,
                buyerId: req.user.id
            },
            include: {
                items: true
            }
        });

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load order' });
    }
});

router.get('/random_access', async (req, res) => {
    try {
        const product = await randomAccess();

        if (!product) {
            return res.status(404).json({ error: 'No products available' });
        }

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to load random product' });
    }
});

router.post('/cart', async (req, res) => {
    try {
        const productId = Number(req.body.productId);
        const requestedQuantity = Number(req.body.quantity ?? 1);
        const quantityToAdd = Number.isNaN(requestedQuantity) ? 1 : Math.floor(requestedQuantity);

        if (Number.isNaN(productId) || quantityToAdd < 1) {
            return res.status(400).json({ error: 'A valid product and quantity are required' });
        }

        const product = await prisma.product.findUnique({
            where: { id: productId }
        });

        if (!product || !product.isListed || product.listingStatus !== 'approved') {
            return res.status(404).json({ error: 'Product is not available' });
        }

        const existingItem = await prisma.cartItem.findUnique({
            where: {
                buyerId_productId: {
                    buyerId: req.user.id,
                    productId
                }
            }
        });

        const newQuantity = (existingItem?.quantity || 0) + quantityToAdd;
        if (newQuantity > product.stock) {
            return res.status(400).json({ error: 'Requested quantity exceeds stock' });
        }

        const cartItem = await prisma.cartItem.upsert({
            where: {
                buyerId_productId: {
                    buyerId: req.user.id,
                    productId
                }
            },
            update: {
                quantity: newQuantity
            },
            create: {
                buyerId: req.user.id,
                productId,
                quantity: quantityToAdd
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'cart_addition',
            details: `Added ${quantityToAdd} of "${product.name}" to cart`
        });

        res.status(201).json(cartItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
});

router.post('/compare', async (req, res) => {
    try {
        const productId = Number(req.body.productId);

        if (Number.isNaN(productId)) {
            return res.status(400).json({ error: 'A valid product is required' });
        }

        const product = await prisma.product.findFirst({
            where: {
                id: productId,
                isListed: true,
                seller: {
                    banned: false
                }
            }
        });

        if (!product) {
            return res.status(404).json({ error: 'Product is not available' });
        }

        const existingItem = await prisma.compare.findUnique({
            where: {
                buyerID_productID: {
                    buyerID: req.user.id,
                    productID: productId
                }
            }
        });

        const compareItem = await addCompareItem({
            buyerID: req.user.id,
            productID: productId
        });

        if (!existingItem) {
            await logAuditAction({
                actorId: req.user.id,
                username: req.user.username,
                actionType: 'comparison_addition',
                details: `Added "${product.name}" to comparison list`
            });

            return res.status(201).json(compareItem);
        }

        return res.status(200).json({
            message: 'Product already marked'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add item to list' });
    }
});

router.post('/cart/:id/remove', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid cart item id' });
        }

        const result = await prisma.cartItem.deleteMany({
            where: {
                id,
                buyerId: req.user.id
            }
        });

        if (result.count === 0) {
            return res.status(404).json({ error: 'Cart item not found' });
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
});

router.post('/checkout', async (req, res) => {
    try {
        const taxRate = 0.07;
        const paymentMethod = String(req.body.paymentMethod || '');
        const shippingAddress = normalizeShippingAddress(req.body.shippingAddress);

        if (!PAYMENT_METHODS.has(paymentMethod)) {
            return res.status(400).json({ error: 'A valid payment method is required' });
        }

        if (!isShippingAddressComplete(shippingAddress)) {
            return res.status(400).json({ error: 'A complete shipping address is required' });
        }

        const order = await prisma.$transaction(async (tx) => {
            const cartItems = await tx.cartItem.findMany({
                where: {
                    buyerId: req.user.id
                },
                include: {
                    product: {
                        include: {
                            seller: {
                                select: {
                                    id: true,
                                    username: true,
                                    banned: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            if (cartItems.length === 0) {
                throw new Error('Your cart is empty');
            }

            for (const item of cartItems) {
                if (
                    !item.product
                    || !item.product.isListed
                    || item.product.listingStatus !== 'approved'
                    || item.product.seller.banned
                ) {
                    throw new Error(`"${item.product?.name || 'An item'}" is no longer available`);
                }

                if (item.quantity > item.product.stock) {
                    throw new Error(`Insufficient stock for "${item.product.name}"`);
                }
            }

            const subtotal = Number(cartItems.reduce((sum, item) => {
                return sum + (item.product.price * item.quantity);
            }, 0).toFixed(2));
            const taxAmount = Number((subtotal * taxRate).toFixed(2));
            const total = Number((subtotal + taxAmount).toFixed(2));

            const order = await tx.order.create({
                data: {
                    buyerId: req.user.id,
                    paymentMethod,
                    shipToName: shippingAddress.name,
                    shipToLine1: shippingAddress.line1,
                    shipToLine2: shippingAddress.line2 || null,
                    shipToCity: shippingAddress.city,
                    shipToState: shippingAddress.state,
                    shipToPostalCode: shippingAddress.postalCode,
                    shipToCountry: shippingAddress.country,
                    subtotal,
                    taxRate,
                    taxAmount,
                    total,
                    items: {
                        create: cartItems.map((item) => ({
                            productId: item.product.id,
                            sellerId: item.product.sellerId,
                            productName: item.product.name,
                            unitPrice: item.product.price,
                            quantity: item.quantity,
                            lineTotal: Number((item.product.price * item.quantity).toFixed(2))
                        }))
                    }
                },
                include: {
                    items: true
                }
            });

            for (const item of cartItems) {
                const updatedProduct = await tx.product.updateMany({
                    where: {
                        id: item.productId,
                        stock: {
                            gte: item.quantity
                        }
                    },
                    data: {
                        stock: {
                            decrement: item.quantity
                        }
                    }
                });

                if (updatedProduct.count === 0) {
                    throw new Error(`Insufficient stock for "${item.product.name}"`);
                }

                await tx.product.updateMany({
                    where: {
                        id: item.productId,
                        stock: 0
                    },
                    data: {
                        isListed: false
                    }
                });
            }

            await tx.cartItem.deleteMany({
                where: {
                    buyerId: req.user.id
                }
            });

            await tx.auditLog.create({
                data: {
                    actorId: req.user.id,
                    username: req.user.username,
                    actionType: 'order_placed',
                    details: `Placed order #${order.id} for $${total.toFixed(2)} using ${paymentMethod}`
                }
            });

            return order;
        });

        await deliverSellerOrderPlacedWebhooks(order).catch((error) => {
            console.error(error);
        });

        res.status(201).json({
            order
        });
    } catch (error) {
        console.error(error);

        const statusCode = error.message === 'Your cart is empty'
            || error.message?.startsWith('Insufficient stock for')
            || error.message?.endsWith('is no longer available')
            ? 400
            : 500;

        res.status(statusCode).json({ error: error.message || 'Checkout failed' });
    }
});

router.post('/compare/:id/remove', async (req, res) => {
    try {
        const productId = Number(req.params.id);

        if (Number.isNaN(productId)) {
            return res.status(400).json({ error: 'Invalid product id' });
        }

        const result = await removeCompareItem({
            buyerID: req.user.id,
            productID: productId
        });

        if (result.count === 0) {
            return res.status(404).json({ error: 'Comparison item not found' });
        }

        res.json({ success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to remove item from list' });
    }
});

module.exports = router;
