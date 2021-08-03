import React, { useState } from 'react';
import { signUpRequest } from '../Requests/authRequest';

function SignUp(props) {
  console.log(props);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleClick = (e) => {
    const newForm = { ...formData };
    newForm[e.target.name] = e.target.value;
    setFormData(newForm);
    console.log(newForm);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      setError('password do not match please check');
    } else {
      setError(null);
      signUpRequest(formData).then((data) => {
        if (data.status === 'success') {
          localStorage.setItem('authToken', data.token);

          props.history.push('/HomePage');

         props.setLoggedInUser(data.data);
        } else {
          if (data.status === 'fail') {
            if (data.data.keyPattern && data.data.keyPattern.email) {
              setError('Email Exists');
            } else {
              setError('check inputs carefully');
            }
          } else {
            setError('Some Error Occured, please try again in some time.');
          }
        }
      });
    }

    console.log(formData);
  };
  return (
    <div className=' px-10 py-12 mt-10 bg-gray-100 space-y-3 rounded-md max-w-md mx-auto '>
      <form onChange={handleClick} onSubmit={handleSubmit}>
        <div className=' space-x-4  h-11'>
          <label className='p-2'>FullName</label>
          <input
            className=' rounded-sm border-2 m-2 outline-none'
            placeholder='fullname'
            type='fullname'
            name='fullname'
          />
        </div>
        <div className=' space-x-4  h-11'>
          <label className='p-2'>Email</label>
          <input
            className=' rounded-sm border-2 m-2 outline-none'
            placeholder='email'
            type='email'
            name='email'
          />
        </div>
        <div className=' space-x-4  h-11'>
          <label className='p-2'>phone</label>
          <input
            className=' rounded-sm border-2 m-2 outline-none'
            placeholder='phone'
            type='number'
            name='phone'
          />
        </div>
        <div className=' space-x-4  h-11'>
          <label className='p-2'>Password</label>
          <input
            className=' rounded-sm border-2 m-2 outline-none'
            placeholder='password'
            type='password'
            name='password'
          />
        </div>
        <div className=' space-x-4 h-11 '>
          <label className='p-2'>Confirm Password</label>
          <input
            className=' rounded-sm border-2 m-2 outline-none'
            placeholder='confirm password'
            type='password'
            name='confirmpassword'
          />
          {error}
        </div>
        <div>
          <button className='h-9 w-20 mt-7 bg-gray-500' type='submit'>
            signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
