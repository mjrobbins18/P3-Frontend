import React from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DataContext } from './DataContext';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';


function Buy({ match }) {
    
    const {userInfo} = useContext(DataContext)
    const NFTid = match.params.id
    const [nftInfo, setNftInfo] = useState([])
    const history = useHistory()

    useEffect(() =>{
        axios.get(`https://nft-api-p3.herokuapp.com/nftmarketplace/nft/${NFTid}`)
        .then(res => setNftInfo(res.data))
    }, [])

    console.log(nftInfo)

    const buyNFT = () => {
        axios.put(`https://nft-api-p3.herokuapp.com/api/users/newTrophy/${userInfo[0]._id}`,nftInfo)
        .then(res => console.log(res.data))
        .then(history.push('/'))
        .catch(console.error)
        
    }



    return (
        <div className="loginContainer">
            <h2>You would like to purchase { nftInfo.name }?</h2>
            <div id = "dashLogButton" className = "loginBtn" onClick = {buyNFT} >
                Yes, I love it!
            </div>
            <div id = "dashLogButton" className = "loginBtn">
                <Link className = "link" to = "/">Nope, nevermind</Link>
            </div>
        </div>
    );
}

export default Buy;