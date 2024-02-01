import { React, useState, useEffect } from "react";
const baseURL = process.env.NODE_ENV === `production` ? `https://fit-check.onrender.com` : `http://localhost:3000`;

const OutfitUploadForm = () => {
  const [user, setUser] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  const [formInput, setFormInput] = useState({
    name: ``,
    weather_compatability: ``,
    occasion: ``,
    style_type: ``,
    color: ``,
  });
  const handleInputChange = (field, value) => {
    setFormInput({ ...formInput, [field]: value });
  };

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
  useEffect(() => {
    fetchMe();
  }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Return out of the submit function if any values are empty.
    for (const key in formInput) {
      if (formInput[key] === ``) {
        setResponseMessage(`All fields must not be empty.`)
        return;
      }
    }

    try {
      const response = await fetch(`${baseURL}/outfitUpload/${user.userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInput),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      try {
        const result = await response.json();
        setResponseMessage(result.ok ? "Outfit creation successful!" : result.error);
      } catch (error) {
        setResponseMessage("Non-JSON response received.");
      }
    } catch (error) {
      setResponseMessage(`Error during creation: ${error.message}`);
      console.error("Error during creation:", error);
    }
  };

  return (<div className="panel">
    <h2>Outfit Creation Form</h2>

    <form 
    className="flex flex-col gap-3" 
    onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input type='text' 
        name="name"
        value={formInput.name}
        onChange={(e) =>
          handleInputChange("name", e.target.value)
        }
        />
      </label>
      <label>
        Weather Compatibility:
        <select
          name="Weather Compatability"
          value={formInput.weather_compatability}
          onChange={(e) =>
            handleInputChange("weather_compatability", e.target.value)
          }
        >
          <option value="choose">Please Choose One</option>
          <option value="fall">Fall</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
        </select>
      </label>
      <label>
        Occasion:
        <select
          name="Occasion"
          value={formInput.occasion}
          onChange={(e) => handleInputChange("occasion", e.target.value)}
        >
          <option value="choose">Please Choose One</option>
          <option value="business">Business</option>
          <option value="casual">Casual</option>
          <option value="formal">Formal</option>
          <option value="athletic">Athletic</option>
        </select>
      </label>
      <label>
        Style Type:
        <select
          name="Style Type"
          value={formInput.style_type}
          onChange={(e) => handleInputChange("style_type", e.target.value)}
        >
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
          onChange={(e) => handleInputChange("color", e.target.value)}
        >
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

      <button type="submit">Create outfit</button>
    </form>

    {responseMessage && <p>{responseMessage}</p>}
  </div>);
};

export default OutfitUploadForm;