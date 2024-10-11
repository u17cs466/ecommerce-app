import React, { useState } from 'react';
import { signUpRequest } from '../Requests/authRequest';
import backgroundImage from '../images/image.png';



function SignUp(props) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const newForm = { ...formData };
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match, please check.');
    } else {
      setError(null);
      signUpRequest(formData).then((data) => {
        if (data.status === 'success') {
          props.history.push('/home');
          props.setLoggedInUser(data.data);
        } else {
          if (data.status === 'fail') {
            if (data.data.keyPattern && data.data.keyPattern.email) {
              setError('Email already exists.');
            } else {
              setError('Please check your inputs carefully.');
            }
          } else {
            setError('Some error occurred, please try again later.');
          }
        }
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center py-8"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Replace with your image URL
    >
      <div className="bg-white bg-opacity-90 shadow-md rounded-lg px-8 py-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Full Name
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your full name"
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Username */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Username
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Choose a username"
              type="text"
              name="userName"
              onChange={handleChange}
              required
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Age
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your age"
              type="number"
              name="age"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your email"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Phone
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Enter your phone number"
              type="number"
              name="phone"
              onChange={handleChange}
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
              placeholder="Enter your password"
              type="password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1">Confirm Password
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none transition duration-200 ease-in-out"
              placeholder="Confirm your password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
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
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
