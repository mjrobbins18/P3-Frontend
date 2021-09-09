import React from 'react';
import { Link } from 'react-router-dom';


function LoginForm(props) {
    return (
        <div className = "formDiv">
            <form className = "loginForm">
                <input className = "input" type = "text" placeholder = "Username" />
                <br />
                <input className = "input" type = "password" placeholder = "Password"/><br></br>
                <br />
                
                <div className = "loginBtn">Log in</div>
            </form>
           
            <p>New User? Click Below:</p>
           
            <div id="newUser">
                <Link className = "link" to = "/newuser">New User</Link>
            </div>
        </div>
    );
}

export default LoginForm;<h1>Login Form</h1>