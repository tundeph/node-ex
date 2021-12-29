//------------------
const http = require("http");
//const { type } = require("os");

const server = http.createServer((req, res) => {
  console.log(req.method);
  res.writeHead(200, { "content-type": "text/html" });
  res.write("Welcome to our home page");

  res.end("Hello");
});

server.listen(5004);
