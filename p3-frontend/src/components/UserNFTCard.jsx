import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function UserNFTCard({match}) {
    
    const {userInfo} = useContext(DataContext)
    const thisID = match.params.id
    const thisCreatedNFT = userInfo[0].created.filter(item => item._id === thisID)
    console.log(thisCreatedNFT[0]._id)
    return (
        <div className= "BuyDiv"> 
        <div class="BuyContainer">
            
           <div class="card">
           
             <div class="face face1">
             
             
                  <i class="fab fa-windows"></i>   
                         
                 <img id= "NFTfeat" src={ thisCreatedNFT[0].image_url } alt="" />
               
             </div>
             <div class="face face2">
               <div class="content">
              <p> {thisCreatedNFT[0].description}</p>
             {/* <Details thisNFT = { thisNFT }/> */}
            
                 <br></br>
                 <Link to = {`/sell/${thisCreatedNFT[0]._id}`}>Sell</Link>
                 <br></br>
                 <Link to ={`/deleteNFT/${thisCreatedNFT[0]._id}`}>Delete</Link>
                 
                 
                 <br></br>
                 
                 <br></br>
                 <h1>{ thisCreatedNFT[0].name}</h1>
               </div>
             </div>
          </div>
          </div>
        </div>
    );
}

export default UserNFTCard;