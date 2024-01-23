const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    const {
      garment_type,
      weather_compatability,
      occasion,
      forMen,
      style_type,
      color,
      img_url,
      description,
    } = req.body;

    const newGarment = await prisma.clothing_Item.create({
      data: {
        garment_type,
        weather_compatability,
        occasion,
        style_type,
        color,
        img_url,
        description,
        forMen,
      },
    });

    res.json({ ok: true, garment: newGarment });
  } catch (error) {
    console.error('Error during garment upload:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

module.exports = router;
