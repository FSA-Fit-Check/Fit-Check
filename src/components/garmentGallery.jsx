import {React, useState, useEffect} from 'react';
import '../output.css'

const GarmentGallery = () => {
  
  const [garments, setGarments] = useState([]);
  const [randomSeed, setRandomSeed] = useState(null);

  useEffect(() => {
    const getGarments = async() => {
      try {
        const response = await fetch('http://localhost:3000/garments/random');
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
          ></img>
        })}
      </section>
    ) : (
      <p>...</p>
    )}
  </>
}

export default GarmentGallery;