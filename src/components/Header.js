import React from 'react';
import { Link } from 'react-router-dom';
import srikanthimg from '../images/srikanth.jpg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Header({ loggedInUser, setLoggedInUser, user, setUser }) {
  const history = useHistory()
  console.log(user, "header")
  const logOutUser = () => {
    setUser(false)
    localStorage.removeItem('authToken'); // Remove token from localStorage
    setLoggedInUser(null); // Clear the user state
    history.push('/login');
  }

  return (
    <>
      <div className=' flex'>
        <div className=' grid place-content-start  w-3/6 p-3 px-2'>
          <div className=' h-auto m-1 p-1 border rounded-md  bg-slate-300'>Welcome Srikanth</div>
        </div>
        <div className='flex flex-row-reverse w-3/6'>
          {user ? <><Link to="/">< button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white flex-row-reverse m-3 '
            type='submit' onClick={() => logOutUser()}
          >
            logout
          </button></Link></> : <><div className='p-3'>
            <Link to='/login'>
              <button
                className="w-full px-2 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out"
                type="submit"
              >
                Sign In
              </button>
            </Link>
          </div>
            <div className='p-3'>
              <Link to='/signup'>
                <button
                  className="w-full py-2 px-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-300 ease-in-out"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>{' '}
            </div> </>}
        </div>
      </div>
    </>
  );
}

export default Header;
