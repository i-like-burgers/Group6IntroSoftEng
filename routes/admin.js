const express = require("express");
const router = express.Router();
const path = require("path");
const auth = require('../authenticate');
const { requireRole } = require('../authorize');

router.get("/css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/css/admin.css"));
});

router.get('/',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminApp.html'));
    }
);

router.get('/sub',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminApp.html'));
    }
);

router.get('/audit',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminApp.html'));
    }
);

router.get('/classic',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminmain.html'));
    }
);

router.get('/classic/sub',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminsub.html'));
    }
);

router.get('/classic/audit',
    auth.authenticateToken,
    requireRole('admin', 'super-admin'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminaudit.html'));
    }
);

module.exports = router;
