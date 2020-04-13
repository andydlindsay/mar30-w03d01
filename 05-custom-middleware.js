const express = require('express');
const port = '23876';

const app = express();

// middleware
app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`Andy's logger: method is ${method} and url is ${url}`);
  next();
});

app.get('/users', (req, res) => {
  res.send('here is all the users');
});

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
