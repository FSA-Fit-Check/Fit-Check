import {React, useState, useEffect} from 'react';
import '../output.css'

const GarmentGallery = () => {
  
  const [garments, setGarments] = useState([]);

  useEffect(() => {
    const getGarments = async() => {
      try {
        const response = await fetch('http://localhost:3000/garments');
        const result = await response.json();
  
        if (response.ok) {
          setGarments(result);
        }
      } catch (error) {
        throw error;
      }
    };

    getGarments();
  }, [])

  return <>
    {garments.length > 0 ? (
      <section
      className='
      bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream
      '
      >
        <div className='flex flex-row
        justify-center items-center gap-2
        '>
          <img src="/clothing_icon.svg"
          className='icon'></img>
          <h1 className='text-xl text-whitecream font-serif italic'>Pick your fit!</h1>
        </div>
        
        <div className='img-gallery'>
          {garments.map((garment) => {
            return <img src={garment.img_url}
            alt={garment.description}
            key={`Garment ${garment.id}`}
            className='garment-img max-w-xs'
            ></img>
          })}
        </div>
      </section>
    ) : (
      <p>...</p>
    )}
  </>
}

export default GarmentGallery;