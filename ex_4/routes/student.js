var express = require('express');
var router = express.Router();
var fs = require('fs');



router.get("/student/:id", function(req, res, next) {
    // console.log(req.query.name);
    if(/^[0-9]*$/.test(req.params.id))
    {
        res.render('student', {id: req.params.id, name: req.query.name});
    }
    else {
        var err = new Error('Page not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
