import React from 'react';
import LoginForm from './LoginForm';

function Login(props) {
    return (
        <div className = "loginContainer">
            <h1>Welcome to NFT Marketplace</h1>
            <h3>Please Login</h3>
            <LoginForm/>
        </div>
    );
}

export default Login;