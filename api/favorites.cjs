// favorites.cjs

const express = require("express");
const { getFaves, addToFaves } = require("../favorites2.cjs");
const router = express.Router();

// GET favorites for user

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const favorites = await getFaves(userId);
    res.json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// endpoint to add to favorites

router.post("/:userId/add", async (req, res) => {
  const userId = req.params.userId;
  const { clothingItemId } = req.body;
  try {
    await addToFaves(userId, clothingItemId);
    res.json({ message: "Added to favorites successfully" });
  } catch (error) {
    console.error("Error adding to favorites:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
