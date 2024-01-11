import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seedDb = async () => {
  // Seed User Preferences
  const userPreferences1 = await prisma.User_Preferences.create({
    data: {
      username: 'mo_mo',
      password: 'pword1',
      email: 'momo3@gmail.com',
    },
  });

  const userPreferences2 = await prisma.User_Preferences.create({
    data: {
      username: 'tony8',
      password: 'pword2',
      email: 'tonytoni@gmail.com',
    },
  });

  const userPreferences3 = await prisma.User_Preferences.create({
    data: {
      username: 'ali_2003',
      password: 'alice62',
      email: 'alicejones@gmail.com',
    },
  });

  // Seed Outfits
  const outfit1 = await prisma.Outfit.create({
    data: {
      user_id: userPreferences1.id,
      name: 'goth fit',
      occasion: 'casual',
      style_type: 'gothic',
      forMen: false,
      color: 'black',
      weather_compatability: 'winter',
    },
  });

  // Add more outfits as needed

  // Seed Clothing Items
  const clothingItem1 = await prisma.Clothing_Item.create({
    data: {
      user_id: userPreferences1.id,
      occasion: 'casual',
      style_type: 'sporty',
      forMen: true,
      garment_type: 'shorts',
      color: 'tan',
      weather_compatability: 'summer',
      img_url: 'https://imgur.com/uNB6Yu5.png',
      description: 'Tan cargo shorts.',
    },
  });

  const clothingItem2 = await prisma.Clothing_Item.create({
    data: {
      user_id: userPreferences2.id,
      occasion: 'casual',
      style_type: 'athleisure',
      forMen: true,
      garment_type: 'pants',
      color: 'gray',
      weather_compatability: 'winter',
      img_url: 'https://imgur.com/kthDcLz.png',
      description: 'Gray Nike track pants.',
    },
  });

  // Add more clothing items as needed

  // Seed Outfit_Clothing_Items
  const outfitClothingItem1 = await prisma.Outfit_Clothing_item.create({
    data: {
      outfit_id: outfit1.id,
      clothing_id: clothingItem1.id,
    },
  });

  // Add more outfit_clothing_items as needed

  console.log('Database seeded successfully.');
};

// Call the seeding function
seedDb()
  .catch((error) => console.error(error))
  .finally(async () => {
    // Disconnect the Prisma client after seeding
    await prisma.$disconnect();
  });
