// profile.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../output.css';

const Profile = ({ userId }) => {
  // console.log(userId);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Fetch and set user's favorites
    fetchFavorites();
  }, [userId]); // re-fetch when the userId changes

  const fetchFavorites = async () => {
    try {
      // ensure userid is a number
      const numericUserId = parseInt(userId);

      if (isNaN(numericUserId)) {
        console.error("Invalid userId:", userId);
        return;
      }

      const response = await fetch(`http://localhost:3000/favorites/${numericUserId}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching favorites. Status: ${response.status}`);
      }
      
      const userFavorites = await response.json();
      
      setFavorites(userFavorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-whitecream">
      <h1>Hello, User!</h1>
      <Link to="/garmentUpload">Upload Garments for Your Wardrobe Here!</Link>
      <div>
        <h2>Your Favorite Clothing Items</h2>
        {favorites.length > 0 ? (
          <section className='garment-grid'>
            {favorites.map((favorite) => (
              <div key={favorite.id} className='split-container'>
                <img 
                  src={favorite.clothingItem.img_url}
                  alt={favorite.clothingItem.description}
                  className="garment-img"
                  />
                <div
                className='garment-specification'
                >
                  <p>{favorite.clothingItem.description}</p>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <p>No favorite clothing items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
