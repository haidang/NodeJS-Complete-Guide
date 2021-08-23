const routesHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Welcome</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to my Assiment 1</h1>');
    res.write(
      '<form action="/create-user" method="POST"><input type="text" name="txtName"><button type="submit">Create</button></form>'
    );
    res.write('</body>');
    res.write('</html>');

    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('</html></head><title>My List</title></head>');
    res.write('<body><ul><li>List 1</li><li>List 2</li></ul></body>');
    res.write('</html>');

    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]);
    });

    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.setHeader('Content-Type', 'text/html');
    res.write('</html></head><title>Create User</title></head>');
    res.write('<body><h2>Create user successfully!</h2></body>');
    res.write('</html>');

    return res.end();
  }
};

module.exports = routesHandler;
