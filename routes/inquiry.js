var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("inquiry/inquiry");
});

router.get("/add-inquiry", function(req, res) {
    res.render("inquiry/add-inquiry");
});

module.exports = router;