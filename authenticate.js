const crypto = require('crypto')

const tokens = new Map()

function generateToken() {
    return crypto.randomBytes(32).toString('hex');
}

function setToken(token, user) {
    tokens.set(token, user);
}

function authenticateToken(req,res,next)
{
    const token = req.cookies.authToken;
    if(!token) return res.redirect('/login');

    const username = tokens.get(token);
    if(!username) return res.redirect('/login');

    req.user = user
    next();
}



module.exports = {
    generateToken,
    setToken,
    authenticateToken
}