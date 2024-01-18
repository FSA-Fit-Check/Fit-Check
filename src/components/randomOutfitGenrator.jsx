import React, { useState, useEffect } from 'react';
import generateRandomOutfit from '../utils/generateRandomOutfit';

const RandomOutfitsGenerator = ({ prisma }) => {
  const [userPreferences, setUserPreferences] = useState(null);

  useEffect(() => {
    // Fetch user preferences from the database based on user ID or other criteria
    const fetchUserPreferences = async () => {
      try {
        const user = await prisma.user.findUnique({
          where: {
            id: 1, // ex. the user has an ID of 1
          },
        });

        setUserPreferences(user);
      } catch (error) {
        console.error('Error fetching user preferences:', error);
      }
    };

    fetchUserPreferences();
  }, [prisma]);

  const generateOutfits = () => {
    if (!userPreferences) return [];

    // Fetch relevant garment data from the database based on user preferences
    const fetchGarments = async (category) => {
      try {
        const garments = await prisma.garment.findMany({
          where: {
            // Add relevant conditions based on user preferences, gender, season, and placeForVisit
            gender: userPreferences.gender,
            season: userPreferences.seasonPreference,
            placeForVisit: userPreferences.placeForVisit,
            category,
          },
        });

        return garments;
      } catch (error) {
        console.error(`Error fetching ${category} garments:`, error);
        return [];
      }
    };

    // Fetch garments for each category
    const accessoriesList = fetchGarments('accessories');
    const shoesList = fetchGarments('shoes');
    const bottomsList = fetchGarments('bottoms');
    const topsList = fetchGarments('tops');
    const headwearList = fetchGarments('headwear');

    // Generate 3 random outfits
    const outfits = Array.from({ length: 3 }, () =>
      generateRandomOutfit(accessoriesList, shoesList, bottomsList, topsList, headwearList)
    );

    return outfits;
  };

  const outfits = generateOutfits();

  return (
    <div>
      <h1>Random Outfits Generator</h1>
      {outfits.map((outfit, index) => (
        <div key={index}>
          <h2>Outfit {index + 1}</h2>
          {/* Render outfit details as needed */}
          <pre>{JSON.stringify(outfit, null, 2)}</pre>
        </div>
      ))}
    </div>
  );
};

export default RandomOutfitsGenerator;









// // src/components/OutfitGenerator.jsx
// import React, { useState } from 'react';
// import generateRandomOutfit from '../utils/generateRandomOutfit';

// const OutfitGenerator = ({ prisma }) => {
//   const [outfits, setOutfits] = useState([]);

//   const createRandomOutfit = async (userPreferences) => {
//     try {
//       // Query the database based on user preferences
//       const garments = await prisma.garment.findMany({
//         where: {
//           gender: userPreferences.gender,
//           season: userPreferences.seasonPreference,
//           placeForVisit: userPreferences.placeForVisit,
//         },
//       });

//       // Fetch relevant garment data from the database based on user preferences
//       const fetchGarments = (category) => garments.filter((garment) => garment.category === category);

//       // Fetch garments for each category
//       const accessoriesList = fetchGarments('accessories');
//       const shoesList = fetchGarments('shoes');
//       const bottomsList = fetchGarments('bottoms');
//       const topsList = fetchGarments('tops');
//       const headwearList = fetchGarments('headwear');

//       // Generate a random outfit
//       const randomOutfit = generateRandomOutfit(accessoriesList, shoesList, bottomsList, topsList, headwearList);

//       setOutfits((prevOutfits) => [...prevOutfits, randomOutfit]);
//     } catch (error) {
//       console.error('Error creating random outfit:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Outfit Generator</h1>
//       <UserPreferencesForm onGenerateOutfit={createRandomOutfit} />

//       {outfits.map((outfit, index) => (
//         <div key={index}>
//           <h2>Random Outfit {index + 1}</h2>
//           {/* Render outfit details as needed */}
//           <pre>{JSON.stringify(outfit, null, 2)}</pre>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OutfitGenerator;
