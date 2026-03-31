const express = require('express');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');
const { requireRole } = require('../../authorize');
const { logAuditAction } = require('../../services/audit');
const { addCompareItem, getCompareItems } = require('../../buyer/product_handling');

const router = express.Router();

router.use(auth.authenticateToken, requireRole('buyer'));

router.get('/products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            where: {
                isListed: true,
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

        if (!product || !product.isListed) {
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

module.exports = router;
