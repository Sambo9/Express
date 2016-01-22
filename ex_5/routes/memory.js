var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render('memory', {name: req.cookies.name, number: req.cookies.number} );
});

module.exports = router;
