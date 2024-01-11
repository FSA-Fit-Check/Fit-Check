import React, {useState} from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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