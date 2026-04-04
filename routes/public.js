const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../landingPage.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../LogIn_page.html'));
});

router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../register.html'));
});

router.get('/denied', (req, res) => {
    res.status(403).send('Access denied');
});

module.exports = router;
