import React, { useState } from 'react';

const UserPrefForm = () => {
    const [formInput, setFormInput] = useState({
        // name: '',
        // email: '',
        // password: '',
        garmentType: '',
        weatherCompatibility: '',
        styleType: '',
        color: '',
        occasion: '',
        gender: '',
      });    

      const [searchResults, setSearchResults] = useState([]);

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
              console.log('Preferences submitted successfully:', result.data);
            } else {
              console.error('Error submitting preferences:', result.error);
            }
          } catch (error) {
            console.error('Error during form submission:', error);
            
          }
        };
      
        return (
          <div>
          <h1>User Preferences Questionnaire</h1>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
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
                <br/>
            </label>
            <br />
            <br />
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
                <br/>
            </label>
            <br/>
            <br/>
            <label>
                style Type: 
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
                <br/>
            </label>
            <br/>
            <br/>
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
                <br/>
            </label>
            <br/>
            <br/>
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
                <br/>
            </label>
            <br/>
            <br/>
            <label>
                Gender: 
                <input type="text"
                name="Gender"
                value={formInput.gender}
                onChange={(e) => setFormInput({ ...formInput, gender: e.target.value })}/>
                <br/>
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>

            <div>
                <h2>Preference Results</h2>
                <ul>
                    {searchResults.map((result) =>
                    ( 
                        <li key={result.id}>
                          <strong>Garment Type:</strong> {result.garment_type},{' '}
                          <strong>Weather Compatibility:</strong> {result.weather_compatability},{' '}
                          <strong>Style Type:</strong> {result.style_type}, <strong>Color:</strong> {result.color},{' '}
                          <strong>Occasion:</strong> {result.occasion}, <strong>For Men:</strong> {result.forMen ? 'Yes' : 'No'},{' '}
                          <strong>Description:</strong> {result.description}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
        
        );
            };
      export default UserPrefForm;