const express = require('express');


const app = express();
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

