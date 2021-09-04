import React, { useContext, useState } from 'react';
import Details from './Details';
import SimilarArt from './SimilarArt';
import Buy from './Buy'
import Collection from './Collection';
import mountain from './Images/mountain.jpg'
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';


function NFT(props) {

    const { loggedIn, setLoggedIn } = useContext(DataContext)
    const [loginOrBuy, setLoginOrBuy] = useState("/login")
    

    const checkLogin = () => {
        
        if(!loggedIn.isLoggedIn) {
            alert("You must login or create a username first")
        }
    

        
    }

    return (
        <div>
            <div className = "nftContainer" >
            <div className = "nftImg">
                <img className = "nftMain" src = { mountain } alt = "mountain"/>
            </div>
            <div className = "price">
                Price: $20340923
                <div className = "buyNFT">
                    <Link className = "buyLink" to = { loggedIn.buyOrLogin } onClick = { checkLogin }>Buy Now</Link>
                </div>
            </div>
            <div className = "detailsContainer">
            <Details/>
            </div>
            
           
            </div>
            
            

           
            <SimilarArt/>
            {/* <Collection/> */}
          
        </div>
    );
}

export default NFT;