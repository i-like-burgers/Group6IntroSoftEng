const express = require("express");
const router = express.Router();
const path = require("path");

const auth = require("../authenticate");
const { requireRole } = require("../authorize");

router.get("/home",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerHome.html"));
    }
);

router.get("/cart",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerCart.html"));
    }
);

router.get("/products/:id",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerProduct.html"));
    }
);

router.get("/compare",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyercompare.html"));
    }
);

module.exports = router;
