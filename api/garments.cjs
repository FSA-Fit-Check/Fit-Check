const express = require("express");
const router = express.Router();

// C: can we create a file for the prisma client and export it and import where needed

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const garments = await prisma.clothing_Item.findMany();
  res.send(garments);
});

module.exports = router;
