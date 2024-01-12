import React from 'react';

const UserPrefForm = () => {

      return (
        <div>
          <h1>User Preferences Questionnaire</h1>
          <br />
          <br />
          <form>
            <label>
                {/* make username, email and pword nullable for non-registered users to 
                be able to submit the form without login credentials ??  */}
                Username:                           
                <input type="text" name="name"/>
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
                <input type="password" name="password"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Garment Type: 
                <input type="text" name="Garment Type"/><br/>
            </label>
            <br />
            <br />
            <label>
                Weather Compatability: 
                <input type="text" name="Weather Compatability"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                style Type: 
                <input type="password" name="style Type"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Color: 
                <input type="text" name="Color"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Occasion: 
                <input type="text" name="Occasion"/><br/>
            </label>
            <br/>
            <br/>
            <label>
                Gender: 
                <input type="text" name="Gender"/><br/>
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
        </div>
      );
    };
    
export default UserPrefForm;