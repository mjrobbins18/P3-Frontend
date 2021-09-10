import React, { useContext, useEffect } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CreateNFT(props) {

    const { loggedIn, 
            setLoggedIn,
            createNftState,
            setCreateNftState,
            nftFormState,
            setNftFormState,
            initialNftState,
            userInfo,
            setUserInfo,
            userUrl } = useContext(DataContext)
        const [createdNFT, setCreatedNFT] = useState({})

        const post = () => {
            axios.post("http://localhost:8001/nftmarketplace/new", createNftState)
            .then(res => setCreatedNFT(res.data))
        }
   
    const handleSubmit = (event) => {
        event.preventDefault()
         post()
         axios.get(userUrl)
        .then(res => setUserInfo(res.data))
         .then(axios.put(`http://localhost:8001/api/users/newNFT/${userInfo[0]._id}`, createdNFT))
        .catch(console.error)
        setCreateNftState(initialNftState)
        }
        

    const handleChange = (event) => {
        setCreateNftState({
            ...createNftState,
            [event.target.id]: event.target.value,
        })
    }
    console.log(userInfo)
    console.log(createdNFT)
    if(loggedIn === "") {
        return(
            <div className = "loginContainer">
                <h1>Please Login in order to create an NFT</h1>
                <div className = "loginBtn">
                    <Link className = "link" to = "/login">Login</Link>
                </div>

            </div>
        )
    }else{
        return (
            <div className = "loginContainer">
                <h1>Create NFT</h1>
    
                <form onSubmit = { handleSubmit }>
                    <input id = "name" 
                           value = { createNftState.name }
                           onChange = { handleChange }
                           type = "text" 
                           className = "input" 
                           placeholder = "Name of NFT"/>
                    <input id = "image_url" 
                           value = { createNftState.image_url }
                           onChange = { handleChange }
                           type = "text" 
                           className = "input" 
                           placeholder = "Image URL" />
                     <input id = "price" 
                           value = { createNftState.price }
                           onChange = { handleChange }
                           type = "number" 
                           className = "input" 
                           placeholder = "Set Price" />      
                    <textarea id = "description" 
                              value = { createNftState.description }
                              onChange = { handleChange }
                              type = "text" 
                              className = "input"
                              placeholder = "NFT Description"/>
                    <button className = "loginBtn" type = "submit">
                        Create
                        {/* <Link className = "buyLink" to = { loggedIn.buyOrLogin }>Create</Link> */}
                        </button>
    
                </form>
            </div>
        );
    }
    
}

export default CreateNFT;