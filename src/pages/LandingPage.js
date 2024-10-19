import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Use hooks instead of connect
import backgroundImage from '../images/image.png';
import { updateFirstName, updateLastName } from '../redux/actions/userActions'; // Import your actions

export function LandingPage() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch(); // Hook to dispatch actions
    const fullName = useSelector(state => `${state.userInfo.firstName} ${state.userInfo.lastName}`); // Hook to access Redux state

    const changeFirstName = () => {
        dispatch(updateFirstName(inputValue)); // Dispatch action to update first name
    };

    const changeLastName = () => {
        dispatch(updateLastName(inputValue)); // Dispatch action to update last name
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex p-44 px-96"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-2xl text-white rounded-lg max-w-md w-full">
                Welcome to My Website
            </div>

            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // Update state with input value
                    className="mt-4 p-2 rounded border"
                />
                <button onClick={changeFirstName} className="m-2 p-2 bg-blue-500 text-white rounded">Change First Name</button>
                <button onClick={changeLastName} className="m-2 p-2 bg-green-500 text-white rounded">Change Last Name</button>
                <div className="mt-4 text-white">Full Name: {fullName}</div>
            </div>
        </div>
    );
}

export default LandingPage;
