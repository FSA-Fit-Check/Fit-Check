const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for handling a POST request to /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Authentication logic here (check credentials against a database)
  //bCrypt Hashed password here


//   // For demonstration purposes, a simple check is performed here
//   if (username === 'username' && password === 'password') {
//     res.json({ success: true, message: 'Login successful' });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
