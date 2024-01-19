import React, { useState } from 'react';
// import { link } from '../../api/login.cjs';

const UserPrefForm = () => {
    const [formInput, setFormInput] = useState({
        name: '',
        email: '',
        password: '',
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
            const response = await fetch('http://localhost:3000/submitFormData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formInput),
            });
    
            const result = await response.json();

        
            if (result.success) {
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
                <input type="text" 
                name="Garment Type"
                value={formInput.garmentType}
                onChange={(e) => setFormInput({ ...formInput, garmentType: e.target.value })}/>
                <br/>
            </label>
            <br />
            <br />
            <label>
                Weather Compatability: 
                <input type="text"
                name="Weather Compatability"
                value={formInput.weatherCompatibility}
                onChange={(e) => setFormInput({ ...formInput, weatherCompatibility: e.target.value })}/>
                <br/>
            </label>
            <br/>
            <br/>
            <label>
                style Type: 
                <input type="password"
                name="style Type"
                value={formInput.styleType}
                onChange={(e) => setFormInput({ ...formInput, styleType: e.target.value })}/>
                <br/>
            </label>
            <br/>
            <br/>
            <label>
                Color: 
                <input type="text"
                name="Color"
                value={formInput.color}
                onChange={(e) => setFormInput({ ...formInput, color: e.target.value })}/>
                <br/>
            </label>
            <br/>
            <br/>
            <label>
                Occasion: 
                <input type="text"
                name="Occasion"
                value={formInput.occasion}
                onChange={(e) => setFormInput({ ...formInput, occasion: e.target.value })}/>
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
                        <li key={result.id}></li>
                    ))
                }
                </ul>
            </div>
        </div>
        
        );
            };
      export default UserPrefForm;