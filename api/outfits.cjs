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

// Get all of the clothing items in the outfit from this user.
router.get(`/:userId/:outfitName`, async(req, res) => {
  const userId = req.params.userId;
  const outfitName = req.params.outfitName;
  
  try {
    // findUnique was giving errors, that's why findMany was used.
    const outfitsArray = await prisma.outfit.findMany({
      where: {
        user_id: parseInt(userId),
        name: outfitName,
      }
    })
    if (outfitsArray.length === 0) {
      res.status(404).json({ 
        message: "Outfit of that name doesn't exist.", 
        error: error.message 
      })
    }

    // Get the ID of the outfit.
    const outfitID = parseInt(outfitsArray[0].id);

    const itemsInOutfit = await prisma.outfit_Clothing_item.findMany({
      where: {
        outfit_id: outfitID,
      }
    });

    res.send(itemsInOutfit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post a new Outfit_Clothing_item to an Outfit
router.post(`/:userId/:outfitName`, async(req, res) => {
  const userId = req.params.userId;
  const outfitName = req.params.outfitName;

  try {
    const { clothingItemID } = req.body;

    // findUnique was giving errors, that's why findMany was used.
    const outfitsArray = await prisma.outfit.findMany({
      where: {
        user_id: parseInt(userId),
        name: outfitName,
      }
    })
    if (outfitsArray.length === 0) {
      res.status(404).json({ 
        message: "Outfit of that name doesn't exist.", 
        error: error.message 
      })
    }

    // Get the ID of the outfit.
    const outfitID = parseInt(outfitsArray[0].id);

    const outfitClothingItem = await prisma.outfit_Clothing_item.create({
      data: {
        outfit_id: outfitID,
        clothing_id: parseInt(clothingItemID),
      },
    });

    res.send(outfitClothingItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;