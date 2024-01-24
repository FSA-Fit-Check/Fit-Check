import React, { useState, useEffect } from 'react';
import './outfit.css';

const Outfit = () => {
  const [garmentTypes, setGarmentTypes] = useState([]);
  const [selectedGarmentType, setSelectedGarmentType] = useState(null);
  const [outfitImages, setOutfitImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const mockOutfits = [
    {
      garmentType: "top",
      image: "../images/top1.jpg",
      weather: "42",
      color: "blue",
      gender: "male",
      occasion: "wedding",
    },
    {
      garmentType: "bottom",
      image: "../images/bottom1.jpg",
      weather: "30",
      color: "black",
      gender: "female",
      occasion: "casual",
    },
    {
      garmentType: "shoes",
      image: "../images/shoes1.jpg",
      weather: "25",
      color: "white",
      gender: "unisex",
      occasion: "formal",
    },
  ];

  const uniqueGarmentTypes = Array.from(new Set(mockOutfits.map(outfit => outfit.garmentType)));

  const extractOutfitImages = (garmentType) => {
    return mockOutfits
      .filter(outfit => !garmentType || outfit.garmentType === garmentType)
      .map((outfit, index) => ({ garmentType: outfit.garmentType, imgUrl: outfit.image, id: index + 1 }));
  };

  useEffect(() => {
    setGarmentTypes(uniqueGarmentTypes);
    setOutfitImages(extractOutfitImages());
    setLoading(false);
  }, []);

  useEffect(() => {
    const updatedOutfitImages = extractOutfitImages(selectedGarmentType);
    setOutfitImages(updatedOutfitImages);
  }, [selectedGarmentType]);

  const handleGarmentTypeClick = (event) => {
    const clickedGarmentType = event.currentTarget.textContent;
    setSelectedGarmentType((prevGarmentType) => (prevGarmentType === clickedGarmentType ? null : clickedGarmentType));
  };

  return (
    <div className="outfit-container">
      <div className="categories-container">
        <h2>Outfit Garment Types</h2>
        <ul className="categories-list">
          {loading ? (
            <p>Loading garment types...</p>
          ) : (
            garmentTypes.map((garmentType) => (
              <li
                key={garmentType}
                onClick={handleGarmentTypeClick}
                className={selectedGarmentType === garmentType ? 'selected-category' : ''}
              >
                {garmentType}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="images-container">
        <h2>{selectedGarmentType ? `${selectedGarmentType} Images` : 'All Images'}</h2>
        <div className="outfit-images">
          {loading ? (
            <p>Loading images...</p>
          ) : (
            outfitImages.map((image) => (
              <img key={image.id} src={image.imgUrl} alt={`Outfit ${image.id}`} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Outfit;