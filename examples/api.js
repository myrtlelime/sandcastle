var fs = require('fs');

exports.api = {
  getFact: function(callback) {
    fs.readFile('./examples/example.txt', function (err, data) {
      if (err) throw err;
      callback(data.toString());
    });
  }
}