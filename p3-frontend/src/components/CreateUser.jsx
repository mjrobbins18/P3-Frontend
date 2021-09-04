import React from 'react';

function CreateUser(props) {
    return (
        <div className = "loginContainer">
            <div className = "formDiv">
                <h1>Create User</h1>
                <form className = "loginForm">
                    <input className = "input" type = "text"/>
                    <input className = "input"  type = "password"/><br></br>
                <button className = "loginBtn">Create Username</button>
            </form>
        </div>
        </div>
        
    );
}

export default CreateUser;