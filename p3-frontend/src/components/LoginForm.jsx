import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from './DataContext';
import axios from 'axios'


function LoginForm(props) {

const {loginState, 
       loggedIn, 
       setLoggedIn,
       loginUser,
       setLoginUser,
       initialUserState,
       userFormState, 
       setUserFormState,
       setToken,
       loginOrBuy,
       setLoginOrBuy
                        } = useContext(DataContext)

    const history = useHistory()


    const handleSubmit = (event) => {
        event.preventDefault()
        setLoginUser(userFormState)
        axios.post("https://nft-api-p3.herokuapp.com/api/users/login", userFormState)
        .then(res => {
          const { token } = res.data
          localStorage.setItem("jwtToken", token)
          localStorage.setItem("username", userFormState.username )
          localStorage.setItem('loggedin', true)
          setLoginOrBuy("/buy")
          history.push('/')
          window.location.reload()
        })
        .then(res => console.log(`res ${res}`))
        .catch(err => alert("Incorrect Username or Password"))
        setUserFormState(initialUserState)
        
        console.log(loggedIn)
        
    }

    const handleChange = (event) => {
        setUserFormState({
            ...userFormState, [event.target.id]: event.target.value
        })

    }
    console.log(loginUser)
    console.log(userFormState)
    return (
        <div className = "formDiv">

            <form className = "loginForm"
                  onSubmit = { handleSubmit}>
                <input className = "input" 
                       type = "text" 
                       placeholder = "Username"
                       id = "username"
                       value = { userFormState.username }
                       onChange = {handleChange} />
                <input className = "input" 
                       type = "password" 
                       placeholder = "Password"
                       id = "password"
                       value = { userFormState.password }
                       onChange = { handleChange }/><br></br>
                <button className = "loginBtn" onSubmit = { handleSubmit }>
                    Login
                </button>
            </form>
           
            <p>New User? Click Below:</p>
           
            <div id="newUser">
                <Link className = "link" to = "/newuser">New User</Link>
            </div>
        </div>
    );
}

export default LoginForm;