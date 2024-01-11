import React, {useState} from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      console.log(result); // Handle the result, e.g., show a success message or redirect to a new page
    } catch (error) {
      console.error('Error:', error.message);
      // Handle the error, e.g., show an error message to the user
    }
  };
  

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