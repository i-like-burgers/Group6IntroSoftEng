const express = require('express');
const path = require('path');

const app = express();
const adminRouter = require("./routes/admin");

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/landingPage.html');
});

app.get('/buyerHome', (req, res) => {
    res.sendFile(__dirname + '/buyerHome.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/LogIn_page.html');
});

app.get('/sellerHome', (req, res) => {
    res.sendFile(__dirname + '/sellerHome.html');
});

app.get('/adminHome', (req, res) => {
    res.sendFile(__dirname + '/administration/adminmain.html');
});

app.get('/adminSub', (req, res) => {
    res.sendFile(__dirname + '/administration/adminsub.html');
});

app.get('/buyerCart', (req, res) => {
    res.sendFile(__dirname + '/buyerCart.html');
});

app.get('/sellerInventory', (req, res) => {
    res.sendFile(__dirname + '/sellerInventory.html');
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

