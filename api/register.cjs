// ./api/register.js
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const bcrypt = require('./bcrypt.cjs');

const MIN_CHARACTER_COUNT = 3;

router.post('/', async(req, res) => {
  try {
    const { email, username, password } = req.body;
    
    // Can't register a username that already exists.
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        username
      }
    })
    if (userAlreadyExists) {
      res.send("Username already exists. It needs to be unique!");
      return;
    }

    // Username and password have minimum length requirement.
    if (username.length < MIN_CHARACTER_COUNT) {
      throw new Error(`Username needs to be at least ${MIN_CHARACTER_COUNT} characters long.`);
    }
    if (password.length < MIN_CHARACTER_COUNT) {
      throw new Error(`Password needs to be at least ${MIN_CHARACTER_COUNT} characters long.`);
    }

    // Password is hashed with bcrypt.
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      }
    });

    res.json({newUser});
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;