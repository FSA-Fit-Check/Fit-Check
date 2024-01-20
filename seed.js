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

  // const Outfit = await prisma.outfit.create({
  //   data: {
  //     user_id: user2.id,
  //     name:                     'goth fit',
  //     occasion:                 'casual',
  //     style_type:               'gothic',
  //     forMen:                    false,
  //     color:                    'black',
  //     weather_compatability:    'winter'     
  //   },
  // });

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
   //                 // Men's Bottoms

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
      user_id: user3.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    false,
      garment_type:             'trousers',
      color:                    'charcoal',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/q7jSZCC.png',
      description:              'charcoal gray workforce trousers'
    },
  });

  //                // New mens bottoms [19Jan24]

  const Clothing_Item21 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    true,
      garment_type:             'pants',
      color:                    'blue',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/WhMA9zy.png',
      description:              'light-wash skinny jeans'
    },
  });


  const Clothing_Item22 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    true,
      garment_type:             'pants',
      color:                    'blue5',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/uLTEmT4.png',
      description:              'straight-leg jeans'
    },
  });

  const Clothing_Item23 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    true,
      garment_type:             'trousers',
      color:                    'blue',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/Jwsv45t.png',
      description:              'blue tapered-leg suit trousers'
    },
  });

  const Clothing_Item24 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    true,
      garment_type:             'trousers',
      color:                    'gray',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/ybLgn4v.png',
      description:              'gray tapered-leg suit trousers'
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

  //                new women's bottoms [19Jan24]

  const Clothing_Item25 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'athleisure',
      forMen:                    false,
      garment_type:             'leggings',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/uq35diI.png',
      description:              'black faux snakeskin leggings.'
    },
  });

  const Clothing_Item26 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'leggings',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/qemeoPH.png',
      description:              'black faux PU leather leggings.'
    },
  });

  const Clothing_Item27 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'pants',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/qemeoPH.png',
      description:              'black Versace faux PU leather pants.'
    },
  });

  const Clothing_Item28 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'business',
      forMen:                    false,
      garment_type:             'pants',
      color:                    'white',
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/OskBdSm.png',
      description:              'white tie-waist gaucho pants.'
    },
  });

  const Clothing_Item46 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'multicolor',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/7PG7ZrB.png',
      description:              'plaid skater skirt.'
    },
  });

  const Clothing_Item47 = await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'grunge',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'black',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/7ujRBGz.png',
      description:              'black high-low asymmetrical skirt.'
    },
  });

  const Clothing_Item48 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'athletic',
      style_type:               'sporty',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'white',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/RdYN0QA.png',
      description:              'white Nike tennis skirt.'
    },
  });

  const Clothing_Item49 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'grunge',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'black',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/RdYN0QA.png',
      description:              'black PU leather, studded-waist skirt.'
    },
  });

  const Clothing_Item50 = await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'blue',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/easL0tX.png',
      description:              'maxi jean skirt.'
    },
  });

  const Clothing_Item51 = await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'grunge',
      forMen:                    false,
      garment_type:             'skirt',
      color:                    'multicolor',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/pFoUVNw.png',
      description:              'plaid skater skirt.'
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
      img_url:                  'https://imgur.com/wneT3c3.png',
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

  //                 // new women's blouses [19Jan24]

  const Clothing_Item29= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'orange',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/NH8ryS1.png',
      description:              'long sleeve tie-waist blouse.'
    },
  });

  const Clothing_Item30= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'gothic',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/iczueat.png',
      description:              'gothic/ victorian-era sheer blouse.'
    },
  });

  const Clothing_Item31= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'blouse',
      color:                    'black',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/HGePzhk.png',
      description:              'off the shoulder cropped blouse.'
    },
  });

  const Clothing_Item32= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'sweater',            // add sweater option in garment dropdown menus for garment upload & user pref forms.
      color:                    'multicolor',         // add multicolor option in color dropdown menus for garment upload & user pref forms.
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/Mmdpzhh.png',
      description:              'cropped mock-turtleneck knit sweater.'
    },
  });

  const Clothing_Item33= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'sweater',           
      color:                    'beige',              // add beige option in color dropdown menus for garment upload & user pref forms.   
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/wjxMpai.png',
      description:              'knit mock-turtleneck sweater.'
    },
  });


  //                  womens dresses

  const Clothing_Item37= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'white',              
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/8pqgzCk.png',
      description:              'white skater dress.'
    },
  });

  const Clothing_Item38= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'formal',
      style_type:               'vintage',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'yellow',              
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/beOMeJq.png',
      description:              'vintage belted skater dress.'
    },
  });

  const Clothing_Item39= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'formal',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'blue',              
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/cGJwLV6.png',
      description:              'shimmery evening gown.'
    },
  });

  const Clothing_Item40= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'formal',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'pink',              
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/PTG3u1l.png',
      description:              'sweetheart neckline floral lace evening gown.'
    },
  });

  const Clothing_Item41= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'formal',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'gold',              
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/xU3QCeh.png',
      description:              'gold pleated evening gown.'
    },
  });

  const Clothing_Item42= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casaul',
      style_type:               'vintage',                         // add vintage style option to dropdown list on garment upload and user pref forms.
      forMen:                    false,
      garment_type:             'dress',
      color:                    'beige',              
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/bEJpXKs.png',
      description:              'vintage babydoll dress.'
    },
  });

  const Clothing_Item43= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'formal',
      style_type:               'gothic',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'black',              
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/xU3QCeh.png',
      description:              'black, corseted ballerina dress.'
    },
  });

  const Clothing_Item44= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'casual',
      style_type:               'streetwear',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'purple',                         // add purple to color option in dropdown list on garment upload and user pref forms.
      forMen:                    false,
      weather_compatability:    'spring',
      img_url:                  'https://imgur.com/rshnjy1.png',
      description:              'black, corseted ballerina dress.'
    },
  });

  const Clothing_Item45= await prisma.clothing_Item.create({
    data: {
      user_id: user2.id,
      occasion:                 'business',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'dress',
      color:                    'black',              
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/cXLM1N9.png',
      description:              'black, corseted ballerina dress.'
    },
  });
//                 // men's shirts

  const Clothing_Item14= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
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
      style_type:               'streetwear',
      forMen:                    true,
      garment_type:             'shirt',
      color:                    'green',
      weather_compatability:    'summer',
      img_url:                  'https://imgur.com/LcjjOCy.png',
      description:              'green crewneck t-shirt.'
    },
  });

  const Clothing_Item16= await prisma.clothing_Item.create({
    data: {
      user_id: user3.id,
      occasion:                 'casual',
      style_type:               'streetwear',
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
      img_url:                  'https://imgur.com/lwBCWjt.png',
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
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'jacket',
      color:                    'pink',
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/miJ2oz4.png',
      description:              'light pink jacket with faux-fur hood.'
    },
  });

  const Clothing_Item34= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'casual',
      style_type:               'chic',
      forMen:                    false,
      garment_type:             'jacket',
      color:                    'tan',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/cFwf1Hp.png',
      description:              'tan trench coat.'
    },
  });


  const Clothing_Item35= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'business',
      style_type:               'business',
      forMen:                    false,
      garment_type:             'jacket',
      color:                    'beige',
      weather_compatability:    'fall',
      img_url:                  'https://imgur.com/tndHkin.png',
      description:              'DKNY blazer.'
    },
  });

  const Clothing_Item36= await prisma.clothing_Item.create({
    data: {
      user_id: user1.id,
      occasion:                 'formal',
      style_type:               'elegance',
      forMen:                    false,
      garment_type:             'jacket',
      color:                    'yellow',               // add yellow option in color dropdown menus for garment upload & user pref forms. 
      weather_compatability:    'winter',
      img_url:                  'https://imgur.com/Qxas4Vy.png',
      description:              'submarine yellow faux-fur jacket.'
    },
  });

  console.log('Database seeded successfully!');
} catch (error) {
    console.error('error creating user', error)
}  finally {
    await prisma.$disconnect();
}
  };
 

seedDb();