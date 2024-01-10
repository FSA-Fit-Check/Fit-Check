import React from 'react';

const Registration = () => {
  return (
    <div>
      <h1>User Registration Form</h1>
      <form>
        <label>
            Username:
            <input type="text" name="name"/>
        </label>
        <br/>
        <br/>
        <label>
            Email:
            <input type="email" name="email"/><br/>
        </label>
        <br/>
        <label>
            Password:
            <input type="password" name="password"/><br/>
        </label>
      </form>
    </div>
  );
};

export default Registration;