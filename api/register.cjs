// ./api/register.js
const express = require("express");
const router = express.Router();

// C: can we create a file for the prisma client and export it and import where needed

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("./bcrypt.cjs");

const MIN_CHARACTER_COUNT = 3;

router.post("/", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Can't register a username that already exists.
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    if (userAlreadyExists) {
      // C: may not need to throw an error. we could send back an error message saything the username is already taken
      throw new Error("Username already exists. It needs to be unique!");
    }

    // C: for all of your character checks below there is an awesome package that is called express-validator which does this nicely in the form of a middleware if anyone is looking for a new challenge and has the motivation

    // Username, email, and password have minimum length requirement.
    if (username.length < MIN_CHARACTER_COUNT) {
      // C: may not need to throw an error. we could send back an error message saything the username must be at least 3 characters in length
      throw new Error(
        `Username needs to be at least ${MIN_CHARACTER_COUNT} characters long.`
      );
    }
    if (password.length < MIN_CHARACTER_COUNT) {
      // C: may not need to throw an error. we could send back an error message saything the password must be at least 3 characters in length
      throw new Error(
        `Password needs to be at least ${MIN_CHARACTER_COUNT} characters long.`
      );
    }
    if (email.length < MIN_CHARACTER_COUNT) {
      // C: may not need to throw an error. we could send back an error message saything the email must be at least 3 characters in length
      throw new Error(
        `Email needs to be at least ${MIN_CHARACTER_COUNT} characters long.`
      );
    }

    // Password is hashed with bcrypt.
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    res.json({ newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
