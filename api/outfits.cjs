const express = require('express');
const router = express.Router();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Get all outfits from this user.
router.get(`/:userId`, async(req, res) => {
  const userId = req.params.userId;
  
  try {
    const outfits = await prisma.outfit.findMany({
      where: {
        user_id: parseInt(userId),
      },
    });

    if (outfits.length > 0) {
      res.send(outfits);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;