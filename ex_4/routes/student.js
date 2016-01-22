var express = require('express');
var router = express.Router();
var fs = require('fs');



router.get("/student/:id/:name", function(req, res, next) {
    fs.readFile('public/student.html', function (err, data) {
    if (err) throw err;
    console.log(typeof(req.params.id));
    if(/^[0-9]*$/.test(req.params.id))
    {
        // var str = data.toString();
        // str = str.replace('STUDENTID', req.params.id);
        // res.send(str);
        res.render('student', {id: req.params.id, name: req.params.name});
    }
    else {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    }

  });
});

module.exports = router;
