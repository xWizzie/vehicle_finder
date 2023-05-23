import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./LoginComponent.css"

const Login = ({ handleRouteClick }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Perform login logic here with username and password
        // For example, you can make an API call to validate the credentials

        // Reset the form
        setUsername('');
        setPassword('');

        handleRouteClick('Form')
        navigate('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div id='login-stuff' >
                    <label id='username-label' htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div id='login-stuff'>
                    <label id='username-label' htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div id='buttons'>
                    <button type="submit">Login</button>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
