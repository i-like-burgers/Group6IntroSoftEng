const express = require("express");
const router = express.Router();
const path = require("path");

const auth = require("../authenticate");
const { requireRole } = require("../authorize");

router.get("/home",
    auth.authenticateToken,
    requireRole("B"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyerHome.html"));
    }
);

router.get("/cart",
    auth.authenticateToken,
    requireRole("B"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyerCart.html"));
    }
);

module.exports = router;