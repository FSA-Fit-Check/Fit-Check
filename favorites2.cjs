// favorites.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get favorites for user
const getFaves = async (userId) => {
  try {
    const favorites = await prisma.favorites.findMany({
      where: {
        userId: parseInt(userId), 
      },
      include: {
        clothingItem: true,
      },
    });
    return favorites;
  } catch (error) {
    console.error('Error getting favorites:', error);
    throw error;
  }
};

// add to favorites
const addToFaves = async (userId, clothingItemId) => {
  try {
    await prisma.favorites.create({
      data: {
        userId: parseInt(userId), 
        clothingItemId: parseInt(clothingItemId),
      },
    });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

// Remove from favorites
const removeFromFaves = async (userId, clothingItemId) => {
  try {
    await prisma.favorites.deleteMany({
      where: {
        userId: parseInt(userId), 
        clothingItemId: parseInt(clothingItemId),
      },
    });
  } catch (error) {
    console.error('Error adding to favorites:', error);
    throw error;
  }
};

module.exports = { getFaves, addToFaves, removeFromFaves };
