import React, { useContext, useState } from 'react';
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

   
        <div class="BuyContainer">
            
           <div class="card">
           
             <div class="face face1">
             
             
                  <i class="fab fa-windows"></i>   
                         
                 <img id= "NFTfeat" src={ thisNFT[0].image_url } alt="" />
               
             </div>
             <div class="face face2">
               <div class="content">
              <p> {thisNFT[0].description}</p>
              <p>Current Price: ${thisNFT[0].price}</p>
            
            
                 <br></br>
                 
                     <Link className = "buyLink" to = { `/buy/${thisNFT[0]._id}` } onClick = { checkLogin }>Buy Now</Link>
                    <Link className = "buyLink" to = {`/deleteNFT/${thisNFT[0]._id}`}>Delete NFT</Link>
                 <br></br>
                 
                 <br></br>
                 <h1>{ thisNFT[0].name}</h1>
               </div>
             </div>
          </div>
          </div>
        </div>

       
    );
}

export default NFT;