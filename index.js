const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is Home Page</h1>");
    res.end();
  } else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is About Page</h1>");
    res.end();
  } else if (req.url == "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>This is Contact Page</h1>");
    res.end();
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "Hello World", () => {
      if (error) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write("<h1>File write not successfully</h1>");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>File write successfully</h1>");
        res.end();
      }
    });
  }
});
server.listen(5500, () => {
  console.log("server listening on port 5500");
});
