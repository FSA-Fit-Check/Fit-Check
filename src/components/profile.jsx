// profile.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState({})

  useEffect(() => {
    // Fetch and set user's favorites
    fetchFavorites();
  }, [userId]); // re-fetch when the userId changes

  useEffect(() => {
    fetchMe();
  }, []); 

  
  const fetchMe = async () => {
    try {
      const response = await fetch('http://localhost:3000/me', {
        method: 'GET',
        headers: {
          'Authorization': window.localStorage.getItem('TOKEN')
        }

      });
      const {user} = await response.json()
      setUser(user)
    } catch(error) {
          console.log(error);
    }
  }

  const fetchFavorites = async () => {
    try {
      // ensure userid is a number
      const numericUserId = parseInt(userId);

      if (isNaN(numericUserId)) {
        console.error("Invalid userId:", userId);
        return;
      }

      const response = await fetch(`http://localhost:3000/favorites/${numericUserId}`);
      console.log(response);
      
      if (!response.ok) {
        throw new Error(`Error fetching favorites. Status: ${response.status}`);
      }
      
      const userFavorites = await response.json();
      
      setFavorites(userFavorites);
      
      console.log(userFavorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-whitecream">
      {user.username && <h1>Hello, {user.username}!</h1>}
      
      <Link to="/garmentUpload">Upload Garments for Your Wardrobe Here!</Link>
      <div>
        <h2>Your Favorite Clothing Items</h2>
        {favorites.length > 0 ? (
          <div>
            {favorites.map((favorite) => (
              <div key={favorite.id}>
                <img src={favorite.clothingItem.img_url} alt={favorite.clothingItem.description} />
                <p>{favorite.clothingItem.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No favorite clothing items yet.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
