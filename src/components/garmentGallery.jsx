import {React, useState, useEffect} from 'react';
import '../output.css'
const baseURL = process.env.NODE_ENV === `production` ? `https://fit-check.onrender.com` : `http://localhost:3000`;


const GarmentGallery = ({ userId }) => {
  const [garments, setGarments] = useState([]);
  const [randomSeed, setRandomSeed] = useState(null);

  const addToFavorites = async(garmentID) => {
    if (!garmentID || !userId) return;

    try {
      const response = await fetch(
        `${baseURL}/favorites/${userId}/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clothingItemId: garmentID,
          }),
        }
      );
      const result = await response.json();

      if (response.ok) {
        alert(`Garment #${garmentID} added to favorites`)
      }
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const getGarments = async() => {
      try {
        const response = await fetch(`${baseURL}/garments/random`);
        const result = await response.json();
  
        if (response.ok) {
          setGarments(result);
        }
      } catch (error) {
        throw error;
      }
    };

    getGarments();
  }, [randomSeed])

  return <>
    {garments.length > 0 ? (
      <section
      className='
      panel
      random-fit-section
      '
      >
        <div className='flex flex-row
        justify-center items-center gap-2
        '>
          <img src="/clothing_icon.svg"
          className='icon'></img>
          <h1 className='text-xl text-whitecream font-serif italic fullwidth'>Pick your fit!</h1>
        </div>

        <button 
        className="rounded-md bg-gray text-whitecream"
        onClick={() => {setRandomSeed(Math.random)}}
        >Randomize</button>
        
        {garments.map((garment) => {
          return <img src={garment.img_url}
          alt={garment.description}
          title={garment.description}
          key={`Garment ${garment.id}`}
          className='garment-img max-w-xs'
          onClick={() => {addToFavorites(garment.id)}}
          ></img>
        })}
      </section>
    ) : (
      <p>...</p>
    )}
  </>
}

export default GarmentGallery;