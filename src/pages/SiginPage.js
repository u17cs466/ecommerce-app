import React, { useState, useEffect } from 'react';
import { logInRequest } from '../Requests/authRequest';
import backgroundImage from '../images/image.png';

function SignIn(props) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleClick = (e) => {
    const newForm = { ...formData };
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Both fields are required!');
      return;
    }

    setError(null);
    setIsLoading(true); // Start loading

    try {
      const data = await logInRequest(formData); // Pass formData (email and password)
      if (data.status === 'success') {
        console.log(data.status)
        localStorage.setItem('authToken', data.token);
        props.history.push("/home");
        props.setLoggedInUser(data.data);
        sessionStorage.setItem('loggedInUser', JSON.stringify(data.data))
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-8"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Replace with your image URL
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-lg px-8 py-4 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your email"
              type="text"
              name="email"
              onChange={handleClick}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Password
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter password"
              type="text"
              name="password"
              onChange={handleClick}
              required
            />
          </div>

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out"
              type="submit"
              disabled={isLoading}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default SignIn;
