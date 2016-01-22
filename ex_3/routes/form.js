var express = require('express');
var router = express.Router();
var fs = require('fs');
var path    = require("path");


router.get('/form', function(req, res, next) {
    fs.readFile('public/form.html', function (err, data) {
    if (err) throw err;
    res.set('Content-Type', 'text/html');
    res.send(data);
  });
});

module.exports = router;
