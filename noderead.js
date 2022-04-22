var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("demo1.html", function (err, data) {
      if (err) {
        return console.log.error(err);
      }
      console.log("The Asynchronous Data:" + data.toString());
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
