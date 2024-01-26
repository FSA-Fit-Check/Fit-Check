import React, { useState } from 'react';

const UserPrefForm = ({ userId }) => {
  const [formInput, setFormInput] = useState({
    // name: '',
    // email: '',
    // password: '',
    garmentType: '',
    weatherCompatibility: '',
    styleType: '',
    color: '',
    occasion: '',
    forMen: false,
  });    

  const [searchResults, setSearchResults] = useState([]);

  const addToFavorites = async(garmentID) => {
    try {
      const response = await fetch(
        `http://localhost:3000/favorites/${userId}/add`,
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
        // console.log(`Added to favorites: ${result}`);
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/userprefform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formInput),
      });

      const result = await response.json();

      if (result.success) {
        setSearchResults(result.data)
        // console.log('Preferences submitted successfully:', result.data);
      } else {
        console.error('Error submitting preferences:', result.error);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }};
      
  return (<>
    <form onSubmit={handleSubmit}
    className='panel'>
      <h1
      className='text-xl font-serif italic'
      >User Preferences Questionnaire</h1>

      {/* <label> */}
          {/* make username, email and pword nullable for non-registered users to 
          be able to submit the form without login credentials ??  */}
          {/* Username:                           
          <input type="text"
            name="name"
            value={formInput.garmentType}
            onChange={(e) => setFormInput({ ...formInput, username: e.target.value })}/>
      </label>
      <br/>
      <label>
          <br />
          <br />
          Email: 
          <input type="email" name="email"/><br/>
      </label>
      <br/>
      <br/>
      <label>
          Password: 
          <input type="password"
          name="password"
          value={formInput.garmentType}
          onChange={(e) => setFormInput({ ...formInput, password: e.target.value })}/>
          <br/>
      </label>
      <br/>
      <br/> */}

      <label>
        Garment Type: 
        <select
            name="Garment Type"
            value={formInput.garmentType}
            onChange={(e) => setFormInput({ ...formInput, garmentType: e.target.value })}>
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
        Weather Compatability: 
        <select
            name="Weather Compatability"
            value={formInput.weatherCompatibility}
            onChange={(e) => setFormInput({ ...formInput, weatherCompatibility: e.target.value })}>
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
            value={formInput.styleType}
            onChange={(e) => setFormInput({ ...formInput, styleType: e.target.value })}>
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
            onChange={(e) => setFormInput({ ...formInput, color: e.target.value })}>
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
            onChange={(e) => setFormInput({ ...formInput, occasion: e.target.value })}>
            <option value="choose">Please Choose One</option>
            <option value="business">Business</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="athletic">Athletic</option>
        </select>
      </label>
      <label className='flex justify-center gap-3'>
        For men: 
        <input type="checkbox"
        name="Gender"
        value={formInput.forMen}
        onChange={(e) => setFormInput({ ...formInput, forMen: e.target.checked })}/>
      </label>
      <button type="submit">Submit</button>
    </form>

  {
    searchResults.length > 0 ? (
      <section
      className='
      bg-black rounded-xl p-3 drop-shadow-lg border-2 border-whitecream
      flex flex-col gap-3'>
        <div className='flex flex-row
        justify-center items-center gap-2
        '>
          <img src="/form_icon.svg"
          className='icon'></img>
          <h1 className='text-xl text-whitecream font-serif italic'>Preference Results</h1>
        </div>

        <section className='garment-grid'>
        {searchResults.map((result) =>
          ( 
            <div key={result.id} className='split-container'>
              <img src={result.img_url}
              alt={result.description}
              title={result.description}
              className='garment-img'
              onClick={() => {addToFavorites(result.id)}}
              />
              <div className='garment-specification'>
                <p><strong>Garment Type:</strong> {result.garment_type}</p>
                <p><strong>Weather Compatibility:</strong> {result.weather_compatability}</p>
                <p><strong>Style Type:</strong> {result.style_type}</p>
                <p><strong>Color:</strong> {result.color}</p>
                <p><strong>Occasion:</strong> {result.occasion}</p>
                <p><strong>For Men:</strong> {result.forMen ? 'Yes' : 'No'}</p>
                <p><strong>Description:</strong> {result.description}</p>
              </div>
            </div>
          ))
        }
        </section>
      </section>
      ) : (
        <></>
      )
    }
  </>);
}

export default UserPrefForm;