// profile.jsx

import React, { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import '../output.css';
const baseURL = process.env.NODE_ENV === `production` ? `https://fit-check.onrender.com` : `http://localhost:3000`;


const Profile = ({ userId, username, logOut }) => {
  const [favorites, setFavorites] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const [outfitsWithItems, setOutfitsWithItems] = useState({});
  const [user, setUser] = useState({})
  const [refreshCount, setRefreshCount] = useState(0);

  // forceUpdate can be called to make the component re-render.
  const [_, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    // Fetch and set user's favorites
    fetchFavorites();
    // Fetch and set user's outfits
    fetchOutfits();
  }, [userId, refreshCount]); // re-fetch when the userId changes, or when refreshCount is altered

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

  const fetchOutfits = async () => {
    try {
      const response = await fetch(`${baseURL}/outfits/${userId}`);
      const result = await response.json();
      setOutfits(result);

      const outfitsWithItems = {};
      result.map(async(outfit) => {
        const items = await fetchItemsFromOutfit(outfit.name)
        outfitsWithItems[outfit.name] = items;
      })

      setOutfitsWithItems(outfitsWithItems);
    } catch (error) {
      console.error('Error fetching outfits:', error);
    }
  }

  const fetchItemsFromOutfit = async (outfitName) => {
    try {
      const response = await fetch(`${baseURL}/outfits/${userId}/${outfitName}`);
      const result = await response.json();

      return result;
    } catch (error) {
      console.error('Error fetching outfits:', error);
    }
  }

  const addGarmentToOutfit = async (garment, outfitName) => {
    try {
      const response = await fetch(
        `${baseURL}/outfits/${user.userId}/${outfitName}`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clothingItemID: garment.clothingItemId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      
      setRefreshCount(refreshCount + 1);
    } catch (error) {
      console.error('Error adding garment to outfit:', error);
    }
  }

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
        setRefreshCount(refreshCount + 1);
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

      <section className="panel">
        <h2>Your Outfits</h2>

        {
          outfits.length > 0 ? (
            <button
            onClick={() => forceUpdate()}>
              Show items
            </button>
          ) : (
            <p>No outfits yet.</p>
          )
        }

        <section>
        {outfits.map((outfit) => (
        <div key={`Outfit ${outfit.name}`}>
          <h2><strong>{outfit.name}</strong></h2>

          <section className="tiny-grid">
          {
            outfitsWithItems[outfit.name] !== undefined ? (
              outfitsWithItems[outfit.name].map((item) => (
                <img 
                key={`Item ${item.clothing_id}, ID ${item.id}`}
                className="tiny-garment-img"
                src={item.img_url}
                alt={item.description}
                />
              ))
            ) : (
            <p></p>
          )}
          </section>
        </div>
        ))}
        </section>

        <Link to="/outfitUpload">Create a new outfit here!</Link>
      </section>

      <div>
        <h2>Your Favorite Clothing Items</h2>
        {favorites.length > 0 ? (
          <section className='panel'>
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
                  <button
                  onClick={() => deleteFavoritedItem(favorite)}
                  >Remove from favorites</button>
                  
                  {
                    outfits.length > 0 ? (
                      <select
                        name="Outfit"
                        value={``}
                        onChange={(e) => {addGarmentToOutfit(favorite, e.target.value)}}>
                        <option value={``}>Add To Outfit</option>

                        {/* Adds an option tag for each outfit from the user. */}
                        {
                          outfits.map((outfit) => (
                            <option key={`Outfit ${outfit.name}`}>{outfit.name}</option>
                          ))
                        }
                      </select>
                    ) : (
                      <></>
                    )
                  }
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
