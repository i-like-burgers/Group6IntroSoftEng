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
    requireRole('A'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminmain.html'));
    }
);

router.get('/sub',
    auth.authenticateToken,
    requireRole('A'),
    (req, res) => {
        res.sendFile(path.join(__dirname, '../administration/adminsub.html'));
    }
);

module.exports = router;