const express = require('express');
const path = require('path');
const tokens = new Map();
const cookieParser = require('cookie-parser')


const app = express();
const adminRouter = require("./routes/admin");
const auth = require("./accounts/authenticate")

const PORT = 3000;

app.use(express.static(__dirname)) //Allows use of CSS files
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));


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

    if(!auth.credentials(username,password)) return res.send("Username or password incorrect");

    const token = auth.generateToken(username);
    res.cookie('authToken',token);

    const R = auth.checkRole(token);

    if(R === 'B') res.redirect('/buyerHome');

    else if(R === 'S') res.redirect('/sellerHome');

    else if(R === 'A') res.redirect('/adminHome');

    else res.send("Internal server error");
})

app.get('/sellerHome', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/sellerHome.html');
});

app.get('/adminHome', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/administration/adminmain.html');
});

app.get('/adminSub', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/administration/adminsub.html');
});

app.get('/buyerCart', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/buyerCart.html');
});

app.get('/sellerInventory', auth.authenticateToken, (req, res) => {
    res.sendFile(__dirname + '/sellerInventory.html');
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

