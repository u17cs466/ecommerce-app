import React, { useEffect } from 'react';

function HomePage(props) {
    useEffect(() => {
        const userData = localStorage.getItem('authToken');
        if (userData) {
            //props.setLoggedInUser(JSON.parse(userData));
            props.history.push('/home'); // Redirect to homepage if user is already logged in
        }
    }, []);
    return (
        <div className="m-20 text-center uppercase ">
            <h1>User loggedin successfully</h1>
        </div>
    )
}

export default HomePage
