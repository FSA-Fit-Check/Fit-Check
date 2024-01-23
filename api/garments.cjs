const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const garments = await prisma.clothing_Item.findMany();
  res.send(garments);
});

router.get('/random', async (req, res) => {
  const tops = await prisma.clothing_Item.findMany({
    where: {
      OR: [
        {
          garment_type: 'shirt'
        },
        {
          garment_type: 'jacket'
        },
        {
          garment_type: 'sweater'
        },
        {
          garment_type: 'dress'
        },
        {
          garment_type: 'blouse'
        },
      ],
    },
  });
  const bottoms = await prisma.clothing_Item.findMany({
    where: {
      OR: [
        {
          garment_type: 'shorts'
        },
        {
          garment_type: 'pants'
        },
        {
          garment_type: 'trousers'
        },
        {
          garment_type: 'leggings'
        },
        {
          garment_type: 'sweatpants'
        },
        {
          garment_type: 'skirt'
        },
      ],
    },
  });

  const randTop = tops[Math.floor(Math.random() * tops.length)];
  const randBottom = bottoms[Math.floor(Math.random() * bottoms.length)];

  res.send([randTop, randBottom]);
});

module.exports = router;