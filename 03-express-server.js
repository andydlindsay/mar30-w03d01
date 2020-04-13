const express = require('express');
const server = express();
const port = 54321;

server.get('/users', (req, res) => {
  res.send('here is all the users');
});

server.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
