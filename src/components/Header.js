import React from 'react';
import { Link } from 'react-router-dom';

function Header({loggedInUser,setLoggedInUser}) {

  const logOutUser = ()=>{
    setLoggedInUser(null)
    return localStorage.removeItem('authToken')
  }
  return (
    <div className='flex'>
      <div className='p-4'>
        <label className="text-center uppercase">ecommerce</label>
      </div>
      {loggedInUser ? <><Link to="/">< button
            className='rounded-md bg-gray-200 m-2 h-10 w-20 hover:bg-blue-700 hover:text-white '
      type='submit' onClick={()=>logOutUser()}
          >
      logout
      </button></Link></> :<><div className='p-3'>
        <Link to='/login'>
          <button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white '
            type='submit'
          >
            Sigin
          </button>
        </Link>
      </div>
      <div className='p-3'>
        <Link to='/signup'>
          <button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white '
            type='submit'
          >
            SignUp
          </button>
        </Link>{' '}
      </div> </>}
      {/* <div className='p-3'>
        <Link to='/login'>
          <button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white '
            type='submit'
          >
            Sigin
          </button>
        </Link>
      </div>
      <div className='p-3'>
        <Link to='/signup'>
          <button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white '
            type='submit'
          >
            SignUp
          </button>
        </Link>{' '}
      </div> */}
    </div>
  );
}

export default Header;
