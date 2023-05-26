import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import SignUp from './pages/SignUpPage';
import Sigin from './pages/SiginPage'
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';


function App() {
  const [loggedInUser, setLoggedInUser] = useState(null)
  return (
    <div className='h-screen w-screen'>
      <div className="bg-green-300 shadow-md static"><Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} /></div>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route path='/login' component={Sigin} />
        <Route path='/signup' component={(props) => <SignUp {...props} setLoggedInUser={setLoggedInUser} />} />

      </Switch>
    </div>
  );
}

export default App;
