const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const path = require('path');
//const tokens = new Map();
const cookieParser = require('cookie-parser')

const auth = require('./authenticate') // Authentication module imported
const { requireRole } = require('./authorize');

const app = express();
const prisma = new PrismaClient();

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
            where: { approved: false },
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                approved: true,
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
            data: { approved: true }
        });

        res.json({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            approved: user.approved
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to approve user'});
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
                approved: false
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

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use("/seller", sellerRouter);
app.use("/buyer", buyerRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

