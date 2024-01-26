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
    const alreadyExists = prisma.favorites.findUnique({
      where: {
        userId: parseInt(userId), 
        clothingItemId: parseInt(clothingItemId),
      }
    })
    if (alreadyExists) throw new Error("This user has already favorited this garment.");

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

module.exports = { getFaves, addToFaves };
