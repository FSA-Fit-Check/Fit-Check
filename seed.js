import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from './api/bcrypt.cjs';

const seedDb = async () => {
  try {
  
  const hashedPasswordOne = await bcrypt.hash('pword1', 10);
  const user1 = await prisma.user.create({
    data: {
      username:     'mo_mo',
      password:     hashedPasswordOne,
      email:        'momo3@gmail.com'
    },
  });

  const hashedPasswordTwo = await bcrypt.hash('pword2', 10);
  const user2 = await prisma.user.create({
    data: {
      username:     'tony8',
      password:     hashedPasswordTwo,
      email:        'tonytoni@gmail.com'
    },
  });

  const hashedPasswordThree = await bcrypt.hash('alice62', 10);
  const user3 = await prisma.user.create({
    data: {
      username:     'ali_2003',
      password:     hashedPasswordThree,
      email:        'alicejones@gmail.com'
    },
  });

  const Outfit = await prisma.outfit.create({
    data: {
      user_id: user2.id,
      name:                     'goth fit',
      occasion:                 'casual',
      style_type:               'gothic',
      forMen:                    false,
      color:                    'black',
      weather_compatability:    'winter'     
    },
  });

  const Clothing_Item1 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'sporty',
      forMen:                    true,
      garment_type:             'shorts',
      color:                    'tan',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/uNB6Yu5.png',
      description:              'Tan cargo shorts.'
    },
  });

  const Clothing_Item2 = await prisma.clothing_Item.create({
    data: {
    user_id: user1.id,
      occasion:                 'casual',
      style_type:               'athleisure',
      forMen:                    true,
      garment_type:             'pants',
      color:                    'gray',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/kthDcLz.png',
      description:              'Gray nike trackpants.'
    },
  });

  const Clothing_Item3 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    true,
      garment_type:             'trousers',
      color:                    'tan',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/CigfvuO.png',
      description:              'tan chino-trouser pants.'
    },
  });

  
  const Clothing_Item5 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    true,
      garment_type:             'pants',
      color:                    'blue',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/Sc7lx48.png',
      description:              'multipocket cargo blue-jeans.'
    },
  });

  const Clothing_Item6 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    false,
      garment_type:             'trousers',
      color:                    'charcoal',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/q7jSZCC',
      description:              'charcoal gray workforce trousers'
    },
  });

//                     // women's bottoms

  const Clothing_Item7 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'athleisure',
      forMen:                    false,
      garment_type:             'leggings',
      color:                    'muave',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/scurolo.png',
      description:              'muave leggings.'
    },
  });

  const Clothing_Item8 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'athleisure',
      forMen:                    false,
      garment_type:             'sweatpants',
      color:                    'light-gray',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/R1Tdhk5.png',
      description:              'light-gray tapered sweatpants.'
    },
  });

  const Clothing_Item9= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'grunge',
      forMen:                    false,
      garment_type:             'pants',
      color:                    'light-gray',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/766ozjW.png',
      description:              'Ripped blue jeans.'
    },
  });
//                 // women's blouses

  const Clothing_Item10= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'light-gray',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/wUxT9Qu.png',
      description:              'tie-waste, rouched sleeve blouse.'
    },
  });

  const Clothing_Item11= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'off-white',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/wUxT9Qu.png',
      description:              '3/4 sleeve, tie-neck blouse.'
    },
  });


  const Clothing_Item12= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/qnSsVNZ.png',
      description:              'tiered, long-sleeve blouse.'
    },
  });

  const Clothing_Item13= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'white',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/aSIepwn.png',
      description:              'white and black cropped polka dot blouse.'
    },
  });

//                 // men's shirts

  const Clothing_Item14= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'casual',
      forMen:                    true,
      garment_type:             'shirt',
      color:                    'red',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/YOWksxX.png',
      description:              'red polo shirt.'
    },
  });

  const Clothing_Item15= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'casual',
      forMen:                    true,
      garment_type:             'shirt',
      color:                    'green',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/YOWksxX.png',
      description:              'green crewneck t-shirt.'
    },
  });

  const Clothing_Item16= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'casual',
      forMen:                    true,
      garment_type:             'shirt',
      color:                    'blue',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/Cv4qT8B.png',
      description:              'blue plaid flannel shirt.'
    },
  });

  const Clothing_Item17= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'casual',
      forMen:                    true,
      garment_type:             'shirt',
      color:                    'red',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/Cv4qT8B.png',
      description:              'red plaid flannel shirt.'
    },
  });
//                     // men's outterwear

  const Clothing_Item4 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    true,
      garment_type:             'jacket',
      color:                    'blue',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/zGZwsdb.png',
      description:              'Blue puffer jacket.'
    },
  });

  const Clothing_Item18= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'athliesure',
      forMen:                    true,
      garment_type:             'jacket',
      color:                    'red',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/nCBMm36.png',
      description:              'red mid-weight windbreaker with black fleece lining.'
    },
  });

  const Clothing_Item19= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'athliesure',
      forMen:                    true,
      garment_type:             'jacket',
      color:                    'black',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/vpcJkXq.png',
      description:              'black NorthFace puffer jacket.'
    },
  });

//                 // women's outterwear

  const Clothing_Item20= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'athliesure',
      forMen:                    false,
      garment_type:             'jacket',
      color:                    'pink',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/miJ2oz4.png',
      description:              'light pink jacket with faux-fur hood.'
    },
  });

  console.log('Database seeded successfully', user1);
} catch (error) {
    console.error('error creating user', error)
}  finally {
    await prisma.$disconnect();
}
  };
 

seedDb();