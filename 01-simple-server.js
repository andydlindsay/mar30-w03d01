const http = require('http');

const server = http.createServer((request, response) => {
  response.end('hello world');
});

server.listen(9876, () => {
  console.log('server is listening on port 9876');
});
