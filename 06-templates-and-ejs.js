const express = require('express');
const port = '23876';

const app = express();

// tell express to use ejs templating engine
app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  // res.send('here is all the users');
  const templateVars = {
    username: 'jsmith',
    firstName: 'Joanne'
  };
  res.render('user-template', templateVars);
});

app.get('/', (req, res) => {
  res.send('thanks for visiting "/"');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
