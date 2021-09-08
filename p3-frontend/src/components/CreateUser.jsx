import React from 'react';

function CreateUser(props) {
    return (
        <div className = "loginContainer">
            <div className = "formDiv">
                <h1>Create User</h1>
                <form className = "loginForm">
                    <input className = "input" type = "text" placeholder = "Username"/>
                    <input className = "input"  type = "password" placeholder = "Password"/><br></br>
                <div className = "loginBtn">Create Username</div>
            </form>
        </div>
        </div>
        
    );
}

export default CreateUser;