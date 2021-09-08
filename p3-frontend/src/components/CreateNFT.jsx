import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import axios from 'axios'
import NFT from './NFT';

function CreateNFT(props) {
    const test = {
        name: "ksdfslk",
        url: "dfsfsd",
        description: "dskjfksdd"
    }
    
    const { loggedIn, 
            setLoggedIn,
            createNftState,
            setCreateNftState,
            nftFormState,
            setNftFormState,
            initialNftState } = useContext(DataContext)

    const checkLogin = () => {
        
        if(!loggedIn.isLoggedIn) {
            alert("You must login or create a username first")
        }   
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        
        setCreateNftState(initialNftState)
        console.log(nftFormState)

        axios.post("http://localhost:8001/nftmarketplace/new", createNftState)
        .then(res => console.log(res.data))
        .catch(console.error)
        setNftFormState(createNftState)

    } 
    const handleChange = (event) => {
        setCreateNftState({
            ...createNftState,
            [event.target.id]: event.target.value,
        })

    }
    useEffect(() => {},[nftFormState])

    console.log(createNftState)
    console.log(nftFormState)
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

export default CreateNFT;