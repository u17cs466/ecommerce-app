import { BACKEND_URL } from '../utils/urls';

export const signUpRequest = async (data) => {
  const res = await fetch('http://localhost:5000/api/users/signup',
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  return await res.json();
};
export const logInRequest = async (data) => {
  const res = await fetch('http://localhost:5000/api/users/login',
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  return await res.json();
};
