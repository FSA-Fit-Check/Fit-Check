import React, { useState } from "react";

const GarmentUploadForm = () => {
  const [formInput, setFormInput] = useState({
    garment_type: "",
    weather_compatability: "",
    occasion: "",
    style_type: "",
    color: "",
    img_url: "",
    description: "",
    forMen: true,
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/garment_upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      try {
        const result = await response.json();
        setResponseMessage(result.ok ? 'Upload successful!' : result.error);
      } catch (error) {
        setResponseMessage('Non-JSON response received.');
      }
    } catch (error) {
      setResponseMessage(`Error during upload: ${error.message}`);
      console.error('Error during upload:', error);
    }
  };

  const handleInputChange = (field, value) => {
    setFormInput({ ...formInput, [field]: value });
  };

  return (
    <div>
      <h2>Garment Upload Form</h2>
      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
      <label>
          Garment Type:
          <select
            name="Garment Type"
            value={formInput.garment_type}
            onChange={(e) => handleInputChange("garment_type", e.target.value)}>
            <option value="choose">Choose One</option>
            <option value="shirt">Shirts</option>
            <option value="blouse">Blouses</option>
            <option value="shorts">Shorts</option>
            <option value="leggings">Leggings</option>
            <option value="trousers">Trousers</option>
            <option value="skirts">Skirts</option>
            <option value="pants">Pants</option>
            <option value="jackets">Jackets</option>
          </select>
        </label>
        <label>
          Weather Compatibility:
          <select
            name="Weather Compatability"
            value={formInput.weather_compatability}
            onChange={(e) => handleInputChange("weather_compatability", e.target.value)}>
            <option value="choose">Please Choose One</option>
            <option value="fall">Fall</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="winter">Winter</option>
          </select>
        </label>
        <label>
          Style Type:
          <select
            name="Style Type"
            value={formInput.style_type}
            onChange={(e) => handleInputChange("style_type", e.target.value)}>
            <option value="choose">Please Choose One</option>
            <option value="athleisure">Athleisure</option>
            <option value="business">Business</option>
            <option value="casual">Casual</option>
            <option value="chic">Chic</option>
            <option value="elegance">Elegance</option>
            <option value="grunge">Grunge</option>
            <option value="sporty">Sporty</option>
            <option value="streetwear">Streetwear</option>
          </select>
        </label>
        <label>
          Color:
          <select
            name="Color"
            value={formInput.color}
            onChange={(e) => handleInputChange("color", e.target.value)}>
            <option value="choose">Please Choose One</option>
            <option value="tan">Tan</option>
            <option value="gray">Gray</option>
            <option value="blue">Blue</option>
            <option value="light-gray">Light-Gray</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label>
          Occasion:
          <select
            name="Occasion"
            value={formInput.occasion}
            onChange={(e) => handleInputChange("occasion", e.target.value)}>
            <option value="choose">Please Choose One</option>
            <option value="business">Business</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="athletic">Athletic</option>
          </select>
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="Gender"
            value={formInput.forMen}
            onChange={(e) => handleInputChange("forMen", e.target.value)} />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="img_url"
            value={formInput.img_url}
            onChange={(e) => handleInputChange("img_url", e.target.value)} />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formInput.description}
            onChange={(e) => handleInputChange("description", e.target.value)} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default GarmentUploadForm;
