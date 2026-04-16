const crypto = require('crypto')
const prisma = require('./lib/prisma');

function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

async function storeToken(token, userId, deleteAt = null) {
    return prisma.authToken.create({
        data: {
            token,
            userId,
            deleteAt
        }
    });
}

async function deleteToken(token) {
    if (!token) {
        return;
    }

    await prisma.authToken.deleteMany({
        where: { token }
    });
}

function getTokenFromRequest(req) {
    const cookieToken = req.cookies?.authToken;
    if(cookieToken) return cookieToken;

    const authHeader = req.headers.authorization;
    if (!authHeader) return null;

    const [scheme, token] = authHeader.split(' ');
    if (scheme !== 'Bearer' || !token) return null;

    return token;
}

function isApiRequest(req) {
    return req.path.startsWith('/api/') || req.originalUrl?.startsWith('/api/');
}

async function authenticateToken(req,res,next)
{
    const token = getTokenFromRequest(req);

    if (!token) {
        if (isApiRequest(req)) {
        return res.status(401).json({ error: 'Authentication is required' });
        }
        return res.redirect('/login');
    }

    try {
        const tokenRecord = await prisma.authToken.findUnique({
            where: { token },
            include: { user: true }
        });

        if (!tokenRecord) {
            if (isApiRequest(req)) {
                return res.status(401).json({ error: 'Invalid or expired token' });
            }
            return res.redirect('/login');
        }

        if (tokenRecord.deleteAt && tokenRecord.deleteAt <= new Date()) {
            await deleteToken(token);

            if (isApiRequest(req)) {
                return res.status(401).json({ error: 'Invalid or expired token' });
            }
            return res.redirect('/login');
        }

        const user = tokenRecord.user;
        if (!user || user.blocked || user.banned || !user.approved) {
            await deleteToken(token);

            if (isApiRequest(req)) {
                return res.status(401).json({ error: 'Invalid or expired token' });
            }
            return res.redirect('/login');
        }

        req.user = {
            id: user.id,
            username: user.username,
            role: user.role
        };
        req.token = token;
        next();
    } catch (error) {
        next(error);
    }
}



module.exports = {
    generateToken,
    storeToken,
    deleteToken,
    authenticateToken
}
