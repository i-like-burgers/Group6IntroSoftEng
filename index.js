const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const path = require('path');
//const tokens = new Map();
const cookieParser = require('cookie-parser')

const auth = require('./authenticate') // Authentication module imported
const { requireRole } = require('./authorize');
const products = require('./buyer/product_handling')

const app = express();
const prisma = new PrismaClient();

async function logAuditAction({ actorId, username, actionType, details }) {
    try {
        await prisma.auditLog.create({
            data: {
                actorId: actorId ?? null,
                username,
                actionType,
                details
            }
        });
    } catch (error) {
        console.error('Failed to write audit log:', error);
    }
}

app.use(express.json());

const adminRouter = require("./routes/admin");
const buyerRouter = require("./routes/buyer");
const sellerRouter = require("./routes/seller");

const PORT = 3000;

//app.use(express.static(__dirname)) //Allows express to use CSS files

// We don't want to have the entire project directory exposed. Just exposing the public directory
// and having the css files in there is probably better practice.
// Wrote a line to accomplish this closer to the end of this file.

app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


// Fake database
/*
const users = [
    {
        username: 'buyer',
        password: '$2b$10$Wlenj1abvbnw4m/U.cls/.SAKVuPoqePkkpKMpRbzMm9/VtGpMG/y',
        role: 'B'
    },
    {
        username: 'seller',
        password: '$2b$10$fb2usX4QQIEPtqC9JoGs/ukg7xpQanx.OXvZA1fpSrFr8vXFbNzsu',
        role: 'S'
    },
    {
        username: 'admin',
        password: '$2b$10$JnN/WI9tSnuH/Bf0G1wNz..Co3VT92hb09d87caVxiQmwisNsHo9C',
        role: 'A'
    }
]
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/landingPage.html');
});

/*
app.get('/buyerHome', (req, res) => {
    res.sendFile(__dirname + '/buyerHome.html');
});
*/

app.get('/test', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.get('/denied', (req, res) => {
    res.status(403).send('Access denied');
});

// some admin functionality stuff

app.get('/api/admin/pending-users', auth.authenticateToken, requireRole('admin'), async (req, res) => {
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

app.post('/api/admin/approve-user/:id', auth.authenticateToken, requireRole('admin'), async (req, res) => {
    try {
        const id = parseInt(req.params.id);

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
        res.status(500).json({ error: 'Failed to approve user'});
    }
});

app.post('/api/admin/block-user/:id', auth.authenticateToken, requireRole('admin'), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

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
        res.status(500).json({ error: 'Failed to block user'});
    }
});

app.post('/api/admin/ban-user/:id', auth.authenticateToken, requireRole('admin'), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

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
        res.status(500).json({ error: 'Failed to ban user'});
    }
});

app.get('/api/admin/users', auth.authenticateToken, requireRole('admin'), async (req, res) => {
    try {
        const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
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

app.get('/api/admin/audit-logs', auth.authenticateToken, requireRole('admin'), async (req, res) => {
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

app.get('/api/admin/products', auth.authenticateToken, requireRole('admin'), async (req, res) => {
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

app.post('/api/admin/products/:id/delist', auth.authenticateToken, requireRole('admin'), async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);

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

// yep

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/LogIn_page.html');
});

app.post('/login',async(req,res) => {
    const {username,password} = req.body;

try {
    const user = await prisma.user.findUnique({
        where: { username }
    });

    if(!user) return res.send("Username or password incorrect");

    const match = await(bcrypt.compare(password,user.password));
    if(!match) return res.send("Username or password incorrect");
    if (user.banned) return res.send("Account access has been banned");
    if (user.blocked) return res.send("Account access has been blocked");
    if (!user.approved) return res.send("Account is awaiting approval");
    // if (user.approved) return res.send("Account approved!");

    const token = auth.generateToken();
    auth.setToken(token, { id: user.id, username: user.username, role: user.role });
    res.cookie('authToken', token, {httpOnly: true, sameSite: 'Strict'});
    // might eventually add a flag that reads something like {httpOnly: true, sameSite: 'Strict', secure: true}
    // so that cookies can only be sent over HTTPS when we get to that point

    if(user.role === 'buyer') res.redirect('/buyer/home');

    else if(user.role === 'seller') res.redirect('/seller/home');

    else if(user.role === 'admin') res.redirect('/admin');

    else res.send("Internal server error");

} catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
}
});


app.post('/api/login',async(req,res) => {
    const {username,password} = req.body;

try {
    const user = await prisma.user.findUnique({
        where: { username }
    });

    if (!user) {
        return res.status(401).json({error: 'Username or password incorrect!'});
    }

    const match = await(bcrypt.compare(password,user.password));
    if (!match) {
        return res.status(401).json({ error: 'Username or password incorrect'});
    }

    if (user.blocked) {
        return res.status(403).json({ error: 'Account access has been blocked'});
    }

    if (user.banned) {
        return res.status(403).json({ error: 'Account access has been banned'});
    }

    if (!user.approved) {
        return res.status(403).json({ error: 'Account is awaiting approval :)'});
    }

    const token = auth.generateToken();
    auth.setToken(token, { id: user.id, username: user.username, role: user.role });

    res.json({
        token,
        user: {
            id: user.id,
            username: user.username,
            role: user.role
        }
    });


} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
}
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/register.html');
});

app.post('/api/register', async (req, res) =>{
    try {
        const { username, email, password, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role,
                approved: false,
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
            createdAt: user.createdAt
        });
    } catch (error) {
        console.error(error);

        // the P2002 code is what spits out when a duplicate credential
        // is attempted to be entered.
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Username or email already exists'});
        }

        res.status(500).json({error: "Registration failed"});
    }
});

app.get('/api/seller/products', auth.authenticateToken, requireRole('seller'), async (req, res) => {
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

app.get('/api/buyer/products', auth.authenticateToken, requireRole('buyer'), async (req, res) => {
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

app.get('/api/buyer/products/:id', auth.authenticateToken, requireRole('buyer'), async (req, res) => {
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

app.get('/api/buyer/cart', auth.authenticateToken, requireRole('buyer'), async (req, res) => {
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

app.post('/api/buyer/cart', auth.authenticateToken, requireRole('buyer'), async (req, res) => {
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

app.post('/api/buyer/cart/:id/remove', auth.authenticateToken, requireRole('buyer'), async (req, res) => {
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

app.post('/api/seller/products', auth.authenticateToken, requireRole('seller'), async (req, res) => {
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
                isListed: true
            }
        });

        await logAuditAction({
            actorId: req.user.id,
            username: req.user.username,
            actionType: 'listing_creation',
            details: `Created listing "${product.name}"`
        });

        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create product' });
    }
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/seller", sellerRouter);
app.use("/buyer", buyerRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = {
    prisma
}