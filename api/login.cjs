const express = require("express");
const router = express.Router();

// C: can we create a file for the prisma client and export it and import where needed

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("./bcrypt.cjs");

router.post("/", async (req, res) => {
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
        // C: i agree. we should tokenize the user id and username and if they are an admin (not in the schema yet)

        res.json({ success: true, message: "Login successful!" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Invalid credentials" });
      }
    } else {
      res
        .status(401)
        .json({ success: false, message: "No user of that username exists." });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
