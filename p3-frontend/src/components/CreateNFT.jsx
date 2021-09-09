import React, { useContext, useEffect } from 'react';
import { DataContext } from './DataContext';
import axios from 'axios'

function CreateNFT(props) {

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

export default CreateNFT;