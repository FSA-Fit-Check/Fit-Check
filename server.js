const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for handling a POST request to /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
