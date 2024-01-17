const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const garments = await prisma.clothing_Item.findMany();
  res.send(garments);
});

module.exports = router;