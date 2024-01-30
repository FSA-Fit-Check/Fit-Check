// profile.jsx

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../output.css';
const baseURL = process.env.NODE_ENV === `production` ? `https://fit-check.onrender.com` : `http://localhost:3000`;


const Profile = ({ userId, username, logOut }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState({})
  const [deleteCount, setDeleteCount] = useState(0);

  useEffect(() => {
    // Fetch and set user's favorites
    fetchFavorites();
  }, [userId, deleteCount]); // re-fetch when the userId changes, or if you delete something

  useEffect(() => {
    fetchMe();
  }, []); 

  
  const fetchMe = async () => {
    try {
      const response = await fetch(`${baseURL}/me`, {
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

      const response = await fetch(`${baseURL}/favorites/${numericUserId}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching favorites. Status: ${response.status}`);
      }
      
      const userFavorites = await response.json();
      
      setFavorites(userFavorites);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const deleteFavoritedItem = async(garment) => {
    try {
      const response = await fetch(
        `${baseURL}/favorites/${userId}/delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clothingItemId: garment.clothingItemId,
          }),
        }
      );
      const result = await response.json();

      if (response.ok) {
        setDeleteCount(deleteCount - 1);
      }
    } catch (error) {
      console.error('Error deleting from favorites:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-whitecream">
      {user.username && <h1>Hello, {user.username}!</h1>}
      
      <button 
      onClick={() => {logOut();}}
      >Log out</button>

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
                  onClick={() => deleteFavoritedItem(favorite)}
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
