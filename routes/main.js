var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
    res.render("main/login");
});

router.get("/dashboard", function(req, res) {
    res.render("main/index");
});

router.get("/token", function(req, res) {
    res.render("main/token");
});

router.get("/follow-ups", function(req, res) {
    res.render("main/follow-ups");
});

router.get("/demo", function(req, res) {
    res.render("main/demo");
});

router.get("/task", function(req, res) {
    res.render("main/task");
});

router.get("/notification", function(req, res) {
    res.render("main/notification");
});
router.get("/interview", function(req, res) {
    res.render("main/interview");
});

module.exports = router;