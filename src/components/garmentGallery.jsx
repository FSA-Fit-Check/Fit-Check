import { React, useState, useEffect } from "react";
import "../output.css";

const GarmentGallery = () => {
  const [garments, setGarments] = useState([]);

  useEffect(() => {
    const getGarments = async () => {
      try {
        const response = await fetch("http://localhost:3000/garments");
        const result = await response.json();

        if (response.ok) {
          setGarments(result);
        }
      } catch (error) {
        throw error;
      }
    };

    getGarments();
  }, []);

  // C: I would recommend something in the "else" of the ternary. Better to see something than nothing. ex "waiting on garments..."
  return (
    <>
      {garments.length > 0 ? (
        <section
          className="
      bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream
      "
        >
          <h1 className="text-xl text-whitecream font-serif italic">
            Pick your fit!
          </h1>

          <div className="img-gallery">
            {garments.map((garment) => {
              return (
                <img
                  src={garment.img_url}
                  alt={garment.description}
                  key={`Garment ${garment.id}`}
                  className="garment-img max-w-xs"
                ></img>
              );
            })}
          </div>
        </section>
      ) : (
        <p>...</p>
      )}
    </>
  );
};

export default GarmentGallery;
