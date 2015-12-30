var http = require('http');
var https = require('https');
var parse = require('url').parse;

function urlExists(url, cb) {
  var request = (parse(url).protocol === 'https:' ? https : http).request;
  var req = request(url, function (res) {
    var found = /4\d\d/.test(res.statusCode) === false;
    cb(null, found);
  });

  req.on('error', function(err) {
    cb(null, false);
  });

  req.end();
}

module.exports = urlExists;
