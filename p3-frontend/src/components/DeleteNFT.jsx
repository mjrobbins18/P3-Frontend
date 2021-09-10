import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from './DataContext';
import axios from 'axios'

function DeleteNFT({match}) {
    const {userInfo} = useContext(DataContext)
    const thisID = {created:{_id: match.params.id}}
    const history = useHistory()

    const deleteNFT = () => {
        axios.delete(`http://localhost:8001/nftmarketplace/nft/${match.params.id}`)
        .then(res => console.log(res))
        .catch(console.error)
        history.push('/')
    } 

    return (
        <div className = "loginContainer">
            <h1>Delete NFT</h1>
            <h2>Are you sure you would like to delete this NFT?</h2>
            <div id = "dashLogButton" className = "loginBtn" onClick = { deleteNFT }>
                Yes, It's Ugly AF
            </div>
            <div id = "dashLogButton" className = "loginBtn">
                <Link className = "link" to = "/">No I Love it!</Link>
            </div>

            
        </div>
    );
}

export default DeleteNFT;