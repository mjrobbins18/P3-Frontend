import React, { useContext, useState } from 'react';
import Details from './Details';
import SimilarArt from './SimilarArt';
import Buy from './Buy'
import Collection from './Collection';
import mountain from './Images/mountain.jpg'
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';


function NFT({ match }) {

    const { loggedIn, setLoggedIn, random } = useContext(DataContext)
    const [loginOrBuy, setLoginOrBuy] = useState("/login")
    const thisID = match.params.id
    const thisNFT = random.filter(item => item._id === thisID)
    
    const checkLogin = () => {
        
        if(!loggedIn.isLoggedIn) {
            alert("You must login or create a username first")
        }
    

        
    }
    console.log(thisNFT)

    return (
        <div>
            <div className = "nftContainer" >
                <h1>{ thisNFT[0].name}</h1>
            <div className = "nftImg">
                <img className = "nftMain" src = { thisNFT[0].image_url } alt = "mountain"/>
            </div>
            <div className = "price">
                Price: $20340923
                <div className = "buyNFT">
                    <Link className = "buyLink" to = { loggedIn.buyOrLogin } onClick = { checkLogin }>Buy Now</Link>
                </div>
            </div>
            <div className = "detailsContainer">
            <Details thisNFT = { thisNFT }/>
            </div>
            
           
            </div>
            
            

           
            <SimilarArt/>
            {/* <Collection/> */}
          
        </div>
    );
}

export default NFT;