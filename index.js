var http = require('http');
var https = require('https');
var parse = require('url').parse;

function urlExists(url, cb) {
  var urlParts = parse(url);
  var request = (urlParts.protocol === 'https:' ? https : http).request;

  urlParts.method = 'HEAD';
  var req = request(urlParts, function (res) {
    var found = /4\d\d/.test(res.statusCode) === false;
    cb(null, found);
  });

  req.on('error', function(err) {
    cb(null, false);
  });

  req.end();
}

module.exports = urlExists;
