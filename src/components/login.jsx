import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>User Log-in Form</h1>
      <form>
        <label>
            Username:
            <input type="text" name="name"/>
        </label>
        <br/>
        <br/>
        <label>
            Password:
            <input type="password" name="password"/><br/>
        </label>
      </form>
    </div>
  );
};

export default Login;