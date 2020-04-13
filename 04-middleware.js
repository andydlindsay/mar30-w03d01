const express = require('express');
const morgan = require('morgan');
const port = '23876';

const app = express();
app.use(morgan('dev'));

app.get('/users', (req, res) => {
  res.send('here is all the users');
});

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
