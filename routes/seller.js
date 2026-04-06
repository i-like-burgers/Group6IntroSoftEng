const express = require("express");
const router = express.Router();
const path = require("path");

const auth = require("../authenticate");
const { requireRole } = require("../authorize");

router.get("/home",
    auth.authenticateToken,
    requireRole("seller"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../seller/sellerApp.html"));
    }
);

router.get("/inventory",
    auth.authenticateToken,
    requireRole("seller"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../seller/sellerApp.html"));
    }
);

router.get("/classic/home",
    auth.authenticateToken,
    requireRole("seller"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../sellerHome.html"));
    }
);

router.get("/classic/inventory",
    auth.authenticateToken,
    requireRole("seller"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../sellerInventory.html"));
    }
);

module.exports = router;
