var express = require('express');
var app = express();

exports.start = function(port)
{
    app.get('/', function (req, res) {
        res.send('Greetings Traveler !');
    });

    app.listen(port, function () {
        console.log('Server listening on port ' + port + '!');
    });
}
