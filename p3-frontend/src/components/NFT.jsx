import React, { useContext, useState } from 'react';
import Details from './Details';
import SimilarArt from './SimilarArt';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';


function NFT({ match }) {



    const { loggedIn, 
            setLoggedIn, 
            random,
            loginOrBuy, 
            setLoginOrBuy,
             } = useContext(DataContext)
    
    const thisID = match.params.id
    const thisNFT = random.filter(item => item._id === thisID)


    const checkLogin = () => { 
        if(loggedIn === "") {
            alert("You must login or create a username first")
        }
        
      }

    return (
<div className= "BuyDiv"> 

    {/* <script src="https://kit.fontawesome.com/95a02bd20d.js"></script> */}
        <div class="BuyContainer">
            
           <div class="card">
           
             <div class="face face1">
             
             
                  <i class="fab fa-windows"></i>   
                         
                 <img id= "NFTfeat" src={ thisNFT[0].image_url } alt="" />
               
             </div>
             <div class="face face2">
               <div class="content">
              
             <Details thisNFT = { thisNFT }/>
            
                 <br></br>
                 
                     <Link className = "buyLink" to = { loginOrBuy } onClick = { checkLogin }>Buy Now</Link>
               
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                 <h1>{ thisNFT[0].name}</h1>
               </div>
             </div>
          </div>
          </div>
        </div>

        // <div>
        //     <div className = "nftContainer" >
        //         <h1>{ thisNFT[0].name}</h1>
        //     <div className = "nftImg">
        //         <img className = "nftMain" src = { thisNFT[0].image_url } alt = "mountain"/>
        //     </div>
        //     <div className = "price">
        //         Price: $20340923
        //         <div className = "buyNFT">
        //             <Link className = "buyLink" to = { loggedIn.buyOrLogin } onClick = { checkLogin }>Buy Now</Link>
        //         </div>
        //     </div>
        //     <div className = "detailsContainer">
        //     <Details thisNFT = { thisNFT }/>
        //     </div>
            
           
        //     </div>
        //     <SimilarArt/>
          
        // </div>
    );
}

export default NFT;