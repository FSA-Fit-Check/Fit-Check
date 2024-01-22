const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
  try {
    // Assuming the request body contains garment data
    const { garmentType, weatherCompatibility, styleType, color, occasion, gender } = req.body;

    // Perform any additional validation or processing as needed

    // Save the garment data to the database
    const newGarment = await prisma.clothing_Item.create({
      data: {
        garmentType,
        weatherCompatibility,
        styleType,
        color,
        occasion,
        gender,
      },
    });

    res.json({ ok: true, garment: newGarment });
  } catch (error) {
    console.error('Error during garment upload:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

module.exports = router;

