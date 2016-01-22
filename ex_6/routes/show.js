var express = require('express');
var router = express.Router();


router.post('/shows', function(req, res, next) {
    console.log(req.body.name);
    console.log(req.body.gender);
    res.render('show', {name: req.body.name, gender: req.body.gender});
});

router.get('/shows', function(req, res, next) {
    res.status = 302;
    res.redirect('/');
});

module.exports = router;
