import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateUser(props) {
    
    const { userState,
            setUserState,
            userFormState,
            setUserFormState,
            initialUserState} = useContext(DataContext)
const [newUser, setNewUser] = useState(initialUserState)
const history = useHistory()


    const handleSubmit = (event) => {
        setNewUser(userState)
        console.log(newUser)
        axios.post("http://localhost:8001/api/users/register", userState)
        .then(res => console.log(res.data))
        .then(history.push('/login'))
        .catch(error => alert(error))

        setUserState(initialUserState)
    }
    const handleChange = (event) => {
        setUserState({
            ...userState, [event.target.id]: event.target.value
        })
    }
    
    
    return (


        <div className = "loginContainer">
            <div className = "formDiv">
                <h1>Create User</h1>
                <form className = "loginForm"
                      onSubmit = { handleSubmit } >
                    <input className = "input" 
                           type = "text" 
                           placeholder = "Username"
                           id = "username"
                           value = { userState.username }
                           onChange = { handleChange }/>
                    <input className = "input"  
                           type = "password" 
                           placeholder = "Password"
                           id = "password"
                           value = { userState.password }
                           onChange = { handleChange }/>
                    <input className = "input"  
                           type = "password" 
                           placeholder = "Re-Enter Password"
                           id = "password2"
                           value = { userState.password2 }
                           onChange = { handleChange }/>
                           <br></br>
                <button className = "loginBtn" onSubmit = { handleSubmit }>Create Username</button>
            </form>
        </div>
        </div>
        
    );
}

export default CreateUser;