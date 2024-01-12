const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./api/login.cjs');
const registerRoute = require('./api/register.cjs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/login', loginRoute)
app.use('/register', registerRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
