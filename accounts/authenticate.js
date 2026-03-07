const crypto = require('crypto')
const bcrypt = require('bcrypt')

const tokens = new Map()

// Fake database
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

function generateToken(username) {
    const token = crypto.randomBytes(32).toString('hex');
    tokens.set(token,username);
    return token;
}

async function credentials(username, password) {
    let match = false;

    user = users.find(u=> u.username === username)

    if(!user) return match;

    match = await(bcrypt.compare(password,user.password));

    return match;
}

function checkRole(token) {
    let name = '';

    if(tokens.has(token)) name = tokens.get(token);
    else return '_';

    const user = users.find(u=> u.username === name)

    return user.role;
}

function authenticateToken(req,res,next)
{
    const token = req.cookies.authToken;
    if(!token) return res.redirect('/login');

    const username = tokens.get(token);
    if(!username) return res.redirect('/login');

    req.user = {username};
    next();
}



module.exports = {
    generateToken,
    credentials,
    checkRole,
    authenticateToken
}