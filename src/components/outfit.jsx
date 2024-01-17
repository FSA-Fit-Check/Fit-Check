import React, { useState, useEffect } from 'react';
import './outfit.css';

const Outfit = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [outfitImages, setOutfitImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories and images from backend API
    // Mock data for illustration purposes
    const mockCategories = ['Category1', 'Category2', 'Category3'];
    const mockOutfitImages = [
      { category: 'Category1', imgUrl: 'image1.jpg' },
      { category: 'Category1', imgUrl: 'image2.jpg' },
      { category: 'Category2', imgUrl: 'image3.jpg' },
      // Add more images for other categories
    ];

    setCategories(mockCategories);
    setOutfitImages(mockOutfitImages);
    setLoading(false);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="outfit-container">
      <div className="categories-container">
        <h2>Outfit Categories</h2>
        <ul className="categories-list">
          {loading ? (
            <p>Loading categories...</p>
          ) : (
            categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? 'selected-category' : ''}
              >
                {category}
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="images-container">
        <h2>{selectedCategory ? `${selectedCategory} Images` : 'All Images'}</h2>
        <div className="outfit-images">
          {loading ? (
            <p>Loading images...</p>
          ) : (
            outfitImages
              .filter((image) => !selectedCategory || image.category === selectedCategory)
              .map((image, index) => (
                <img key={index} src={image.imgUrl} alt={`Outfit ${index + 1}`} />
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Outfit;
