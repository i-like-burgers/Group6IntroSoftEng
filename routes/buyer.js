const express = require("express");
const router = express.Router();
const path = require("path");

const auth = require("../authenticate");
const { requireRole } = require("../authorize");

router.get("/home",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
    }
);

router.get("/cart",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
    }
);

router.get("/checkout",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
    }
);

router.get("/orders/:id/confirmation",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
    }
);

router.get("/products/:id",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
    }
);

router.get("/compare", auth.authenticateToken, requireRole("buyer"), (req,res) => {
    res.sendFile(path.join(__dirname, "../buyer/buyerApp.html"));
});

router.get("/classic/home",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerHome.html"));
    }
);

router.get("/classic/cart",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerCart.html"));
    }
);

router.get("/classic/checkout",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/checkoutReview.html"));
    }
);

router.get("/classic/compare",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyercompare.html"));
    }
);

router.get("/classic/products/:id",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/buyerProduct.html"));
    }
);

router.get("/classic/orders/:id/confirmation",
    auth.authenticateToken,
    requireRole("buyer"),
    (req, res) => {
        res.sendFile(path.join(__dirname, "../buyer/orderConfirmation.html"));
    }
);

module.exports = router;
