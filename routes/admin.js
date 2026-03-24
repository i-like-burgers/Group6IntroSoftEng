const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../administration/adminmain.html"));
});

router.get("/sub", (req, res) => {
    res.sendFile(path.join(__dirname, "../administration/adminsub.html"));
});

router.get("/css", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/css/admin.css"));
});

module.exports = router;