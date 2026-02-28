const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const tokens = new Map();
const cookieParser = require('cookie-parser')

const auth = require('./authenticate') // Authentication module imported

const app = express();
const PORT = 3000;

app.use(express.static(__dirname)) //Allows express to use CSS files
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

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


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/landingPage.html');
});

app.get('/buyerHome', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/buyerHome.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/LogIn_page.html');
});

app.post('/login',async(req,res) => {
    const {username,password} = req.body;

    const user = users.find(u=> u.username === username);
    if(!user) return res.send("Username or password incorrect");

    const match = await(bcrypt.compare(password,user.password));
    if(!match) return res.send("Username or password incorrect");

    const token = auth.generateToken();
    tokens.set(token,user.username)
    res.cookie('authToken',token);

    if(user.role === 'B') res.redirect('/buyerHome');

    else if(user.role === 'S') res.redirect('/sellerHome');

    else if(user.role === 'A') res.redirect('/adminHome');

    else res.send("Internal server error");
})

app.get('/sellerHome', (req, res) => {
    res.sendFile(__dirname + '/sellerHome.html');
});

app.get('/adminHome', (req, res) => {
    res.sendFile(__dirname + '/adminmain.html');
});

app.get('/adminSub', (req, res) => {
    res.sendFile(__dirname + '/adminsub.html');
});

app.get('/buyerCart', (req, res) => {
    res.sendFile(__dirname + '/buyerCart.html');
});

app.get('/sellerInventory', (req, res) => {
    res.sendFile(__dirname + '/sellerInventory.html');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

