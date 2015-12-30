var request = require('request');

function urlExists(url, cb) {
  request.head(url, function(err, res) {
    if (err) return cb(null, false);

    var found = /4\d\d/.test(res.statusCode) === false;
    cb(null, found);
  });
}

module.exports = urlExists;
