const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new outfit for this user.
router.post('/:userID', async (req, res) => {
  try {
    const userID = req.params.userID;
    const outfitData = {
      name,
      weather_compatability,
      occasion,
      style_type,
      color,
    } = req.body;
    outfitData[`user_id`] = parseInt(userID);

    const newGarment = await prisma.outfit.create({
      data: outfitData,
    });

    res.json({ ok: true, outfit: newGarment });
  } catch (error) {
    console.error('Error during outfit upload:', error);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

module.exports = router;