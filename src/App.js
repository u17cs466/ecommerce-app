import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import SignUp from './pages/SignUpPage';
import SignIn from './pages/SiginPage';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(() => {
    // Try to get data from sessionStorage on initial load
    const savedData = sessionStorage.getItem('loggedInUser');
    return savedData ? JSON.parse(savedData) : null; // Initialize with sessionStorage data if available
  });
  const [user, setUser] = useState(false);
  console.log(loggedInUser)
  useEffect(() => {
    const userData = localStorage.getItem('authToken');
    if (userData) {
      setUser(true);

    }
  }, [loggedInUser]);

  return (
    <div className="h-screen w-screen">
      {/* Fixed Header */}
      <div className="bg-green-300 shadow-md border-collapse fixed top-0 w-full ">
        <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} user={user} setUser={setUser} />
      </div>

      {/* Content Section - Add margin-top to prevent content from being hidden under the fixed header */}
      <div className="mt-16">
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={(props) => <HomePage {...props} setLoggedInUser={setLoggedInUser} setUser={setUser} />} />
          <Route path='/login' component={(props) => <SignIn {...props} setLoggedInUser={setLoggedInUser} />} />
          <Route path='/signup' component={(props) => <SignUp {...props} setLoggedInUser={setLoggedInUser} />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
