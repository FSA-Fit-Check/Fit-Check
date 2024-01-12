const express = require('express');
const bodyParser = require('body-parser');
const loginRoute = require('./api/login.cjs');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for handling a POST request to /api/login
app.post('/api/login', loginRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
