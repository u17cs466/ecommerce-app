import React from 'react';
import { Link } from 'react-router-dom';
import srikanthimg from '../images/srikanth.jpg'

function Header({ loggedInUser, setLoggedInUser }) {

  const logOutUser = () => {
    setLoggedInUser(null)
    return localStorage.removeItem('authToken')
  }
  return (
    <>
      <div className=' flex'>
        <div className=' grid place-content-start border w-3/6 m-4 '>
          <div className=' h-auto rounded-md p-1 border bg-slate-500'>Welcome Srikanth</div>
        </div>
        <div className='flex flex-row-reverse border w-3/6'>
          {loggedInUser ? <><Link to="/">< button
            className='rounded-md bg-gray-200 h-10 w-20 hover:bg-blue-700 hover:text-white flex-row-reverse '
            type='submit' onClick={() => logOutUser()}
          >
            logout
          </button></Link></> : <><div className='p-3'>
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
        </div>
      </div>
    </>
  );
}

export default Header;
