var express = require('express');
var router = express.Router();
var fs = require('fs');
var path    = require("path");


router.get("/student/:id", function(req, res, next) {
    fs.readFile('public/student.html', function (err, data) {
    if (err) throw err;
    
    if(/^[0-9]*$/.test(req.params.id))
    {
        var str = data.toString();

        str = str.replace('STUDENTID', req.params.id);
        // res.set('Content-Type', 'text/html');
        res.send(str);
    }
    else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }
  });
});

module.exports = router;
