import React from 'react';
import { Link } from 'react-router-dom';
import CreateUser from './CreateUser';


function LoginForm(props) {
    return (
        <div className = "formDiv">
            <form className = "loginForm">
                <input className = "input" type = "text"/>
                <input className = "input" type = "password"/><br></br>
                <button className = "loginBtn">Log in</button>
            </form>
            <p>New User? Click Below:</p>
            <div>
                <Link className = "link" to = "/newuser">New User</Link>
            </div>
        </div>
    );
}

export default LoginForm;<h1>Login Form</h1>