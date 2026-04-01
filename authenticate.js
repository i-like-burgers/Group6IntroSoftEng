const crypto = require('crypto')

const tokens = new Map()

function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

function setToken(token, user) {
    tokens.set(token, user);
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
    return req.path.startsWith('/api/')
}

function authenticateToken(req,res,next)
{
    const token = getTokenFromRequest(req);

    if (!token) {
        if (isApiRequest(req)) {
        return res.status(401).json({ error: 'Authentication is required' });
        }
        return res.redirect('/login');
    }


    const user = tokens.get(token);

    if (!user) {
        if (isApiRequest(req)) {
        return res.status(401).json({ error: 'Invalid or expired token' });
        }
        return res.redirect('/login');
    }

    req.user = user;
    req.token = token;
    next();
}



module.exports = {
    generateToken,
    setToken,
    authenticateToken
}