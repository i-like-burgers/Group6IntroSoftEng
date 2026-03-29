const express = require('express');
const bcrypt = require('bcrypt');

const prisma = require('../../lib/prisma');
const auth = require('../../authenticate');

const router = express.Router();

function getLoginFailure(user, passwordMatches) {
    if (!user || !passwordMatches) {
        return 'Username or password incorrect';
    }

    if (user.banned) {
        return 'Account access has been banned';
    }

    if (user.blocked) {
        return 'Account access has been blocked';
    }

    if (!user.approved) {
        return 'Account is awaiting approval';
    }

    return null;
}

function getRedirectForRole(role) {
    if (role === 'buyer') {
        return '/buyer/home';
    }

    if (role === 'seller') {
        return '/seller/home';
    }

    if (role === 'admin') {
        return '/admin';
    }

    return null;
}

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });

        const passwordMatches = user
            ? await bcrypt.compare(password, user.password)
            : false;

        const failureMessage = getLoginFailure(user, passwordMatches);
        if (failureMessage) {
            return res.send(failureMessage);
        }

        const token = auth.generateToken();
        auth.setToken(token, {
            id: user.id,
            username: user.username,
            role: user.role
        });

        res.cookie('authToken', token, {
            httpOnly: true,
            sameSite: 'Strict'
        });

        const redirectPath = getRedirectForRole(user.role);
        if (!redirectPath) {
            return res.send('Internal server error');
        }

        res.redirect(redirectPath);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

router.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });

        if (!user) {
            return res.status(401).json({ error: 'Username or password incorrect!' });
        }

        const passwordMatches = await bcrypt.compare(password, user.password);
        if (!passwordMatches) {
            return res.status(401).json({ error: 'Username or password incorrect' });
        }

        if (user.blocked) {
            return res.status(403).json({ error: 'Account access has been blocked' });
        }

        if (user.banned) {
            return res.status(403).json({ error: 'Account access has been banned' });
        }

        if (!user.approved) {
            return res.status(403).json({ error: 'Account is awaiting approval :)' });
        }

        const token = auth.generateToken();
        auth.setToken(token, {
            id: user.id,
            username: user.username,
            role: user.role
        });

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

router.post('/api/register', async (req, res) => {
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

        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Username or email already exists' });
        }

        res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router;
