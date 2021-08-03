import { BACKEND_URL } from '../utils/urls';

export const signUpRequest = (data) => {
  return fetch(BACKEND_URL + 'users/signup',
  {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(res => res.json());
};
export const logInRequest = (data) => {
  return fetch(BACKEND_URL + 'users/login',
    {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(res => res.json());
};
