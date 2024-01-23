// login.cjs
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('./bcrypt.cjs');
require('dotenv').config(); 

router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the same username.
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (user) {

      // Compare the entered password to the user's hashed password:
      const passwordsMatch = await bcrypt.compare(password, user.password);
      
      if (passwordsMatch) {
        // TODO: Will probably need to give the user their token here.
            const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, { expiresIn: '1h' });
            // console.log('Generated Token:', token); // Add this line for debugging
            res.json({ success: true, message: 'Login successful!', token, userId: user.id });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ success: false, message: 'No user of that username exists.' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

module.exports = router;
