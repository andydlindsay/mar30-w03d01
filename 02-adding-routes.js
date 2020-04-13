const http = require('http');
const port = 1337;

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;
  const reqUrl = `${method} ${url}`;
  // GET /users
  // POST /todos

  switch(reqUrl) {
    case 'GET /users':
      response.end('all of the users');
      break;
    case 'GET /':
      response.end('this is a request to "/"');
      break;
    default:
      response.end('endpoint not found');
  }
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
