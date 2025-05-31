const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });

    const url = req.url;

    if (url === "/about") {
      res.write("Welcome to about us page");
      res.end();
    } else if (url === "/contact") {
      res.write("welcome to the contact us page");
      res.end();
    } else {
      res.write("Hello, Mr Victor");
      res.end();
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000");
  });
