const express = require('express');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');
const { requireRole } = require('../../authorize');
const { logAuditAction } = require('../../services/audit');

const router = express.Router();

router.use(auth.authenticateToken, requireRole('admin'));

router.get('/pending-users', async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            where: {
                approved: false,
                blocked: false,
                banned: false
            },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                approved: true,
                blocked: true,
                banned: true,
                createdAt: true
            }
        });

        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch pending users' });
    }
});

router.post('/approve-user/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user id' });
        }

        const user = await prisma.user.update({
            where: { id },
            data: {
                approved: true,
                blocked: false,
                banned: false
            }
        });

        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            approved: user.approved,
            blocked: user.blocked,
            banned: user.banned
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to approve user' });
    }
});

router.post('/block-user/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user id' });
        }

        const user = await prisma.user.update({
            where: { id },
            data: {
                approved: false,
                blocked: true,
                banned: false
            }
        });

        res.json({
            id: user.id,
            username: user.username,
            blocked: user.blocked,
            banned: user.banned
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to block user' });
    }
});

router.post('/ban-user/:id', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid user id' });
        }

        const user = await prisma.user.update({
            where: { id },
            data: {
                approved: false,
                blocked: false,
                banned: true
            }
        });

        res.json({
            id: user.id,
            username: user.username,
            blocked: user.blocked,
            banned: user.banned
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to ban user' });
    }
});

router.get('/users', async (req, res) => {
    try {
        const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
        const pageSize = 10;
        const search = typeof req.query.search === 'string' ? req.query.search.trim() : '';

        const where = search
            ? {
                username: {
                    contains: search
                }
            }
            : {};

        const [users, totalCount] = await Promise.all([
            prisma.user.findMany({
                where,
                select: {
                    id: true,
                    username: true,
                    email: true,
                    role: true,
                    approved: true,
                    blocked: true,
                    banned: true,
                    createdAt: true
                },
                orderBy: {
                    createdAt: 'desc'
                },
                skip: (page - 1) * pageSize,
                take: pageSize
            }),
            prisma.user.count({ where })
        ]);

        res.json({
            users,
            page,
            pageSize,
            totalCount,
            totalPages: Math.max(Math.ceil(totalCount / pageSize), 1),
            hasPreviousPage: page > 1,
            hasNextPage: page * pageSize < totalCount,
            search
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

router.get('/audit-logs', async (req, res) => {
    try {
        const logs = await prisma.auditLog.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            take: 50
        });

        res.json(logs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch audit logs' });
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                seller: {
                    select: {
                        id: true,
                        username: true,
                        email: true
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
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

router.post('/products/:id/approve', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product id' });
        }

        const product = await prisma.product.update({
            where: { id },
            data: {
                listingStatus: 'approved',
                isListed: true
            },
            include: {
                seller: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'listing_approval',
            details: `Approved product "${product.name}" from seller ${product.seller.username}`
        });

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to approve product' });
    }
});

router.post('/products/:id/reject', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product id' });
        }

        const product = await prisma.product.update({
            where: { id },
            data: {
                listingStatus: 'rejected',
                isListed: false
            },
            include: {
                seller: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'listing_rejection',
            details: `Rejected product "${product.name}" from seller ${product.seller.username}`
        });

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to reject product' });
    }
});

router.post('/products/:id/delist', async (req, res) => {
    try {
        const id = Number.parseInt(req.params.id, 10);

        if (Number.isNaN(id)) {
            return res.status(400).json({ error: 'Invalid product id' });
        }

        const product = await prisma.product.update({
            where: { id },
            data: { isListed: false },
            include: {
                seller: {
                    select: {
                        id: true,
                        username: true
                    }
                }
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'product_delisting',
            details: `Delisted product "${product.name}" from seller ${product.seller.username}`
        });

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delist product' });
    }
});

module.exports = router;
