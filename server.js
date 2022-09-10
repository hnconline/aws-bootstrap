const { hostname } = require('os');
const http = require('http');
const message = 'Hitesh: Hello World\n'; 
const port = 8080; 
const server = http.createServer((req, res) => { 
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(message);
});
  server.listen(port, hostname, () => {
    console.log(`Hitesh: Server running at http://${hostname()}:${port}/`);
});
