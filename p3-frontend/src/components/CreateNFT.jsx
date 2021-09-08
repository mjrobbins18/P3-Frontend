import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function CreateNFT(props) {
    
    const { loggedIn, setLoggedIn } = useContext(DataContext)
    const checkLogin = () => {
        
        if(!loggedIn.isLoggedIn) {
            alert("You must login or create a username first")
        }   
    }
    return (
        <div className = "loginContainer">
            <h1>Create NFT</h1>
            <form>
                <input type = "text" className = "input" placeholder = "Name of NFT"/>
                <input type = "text" className = "input" placeholder = "Image URL" />
                <textarea type = "text" className = "input" placeholder = "NFT Description"/>
                <div onClick = { checkLogin }className = "loginBtn">
                    Create
                    <Link className = "buyLink" to = { loggedIn.buyOrLogin }></Link>
                    </div>

            </form>
        </div>
    );
}

export default CreateNFT;