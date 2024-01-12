// ./api/register.js
const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async(req, res) => {
  const { email, username, password } = req.body;

  /* TODO: 
  - username cannot already exist
  - password needs to be hashed
  - username and password need to be at least _ characters long
  */
  const newUser = await prisma.user.create({
    data: {
      email,
      username,
      password
    }
  });

  res.json({newUser});
});

module.exports = router;