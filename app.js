const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end(); // return a response and quit the function execution
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    // res.writeHead(302); // allows us to write some meta information (302 - Found Status)
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
