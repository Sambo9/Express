var express = require('express');
var router = express.Router();
var fs = require('fs');



router.get("/student/:id", function(req, res, next) {
    res.cookie('name', '0', {expire : new Date() + 9999});
    res.cookie('number', '0', {expire : new Date() + 9999});
    if (/^[0-9]*$/.test(req.params.id))
    {
        console.log("oioio = " + req.params);
        console.log("QUERY = " + req.query.name);
        if (req.query.name)
        {
            res.cookie('name', req.query.name, {expire : new Date() + 9999});
            res.cookie('number', req.params.id, {expire : new Date() + 9999});
            res.render('student', {id: req.params.id, name: req.query.name});
        }
        else
        { 
            res.cookie('number', req.params.id, {expire : new Date() + 9999});
            res.render('student', {id: req.params.id, name: '0'});
        }

    }
    else {
        var err = new Error('Page not Found');
        err.status = 404;
        next(err);
    }
});

module.exports = router;
