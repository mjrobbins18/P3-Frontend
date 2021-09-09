import React, { useContext } from 'react';
import CollectionDetails from './CollectionDetails';
import { DataContext } from './DataContext';
import { Link } from "react-router-dom";
function CollectionInfo({ match }) {
    
    const { collection } = useContext(DataContext)
    const thisID = match.params.id
    const thisCollection = collection.filter(item => item._id === thisID)

console.log(thisCollection)
    return (

        <div className="BuyDiv">
    
  
        {/* <script src="https://kit.fontawesome.com/95a02bd20d.js"></script> */}
        <div class="BuyContainer">
          <div class="card">
            <div class="face face1">
            <img id= "Buydiv" className = "nftMain" src = { thisCollection[0].large_image_url } alt = "mountain"/>
            </div>
            <div class="face face2">
              <div class="content">
                <br />
               <br />
                 {/* <p><CollectionDetails thisCollection = { thisCollection }/></p> */}
                    <div className= "detailsDiv">
                    <p>{thisCollection[0].description}</p>
                    </div>
                <br></br>
                
                <br />
                <h3>{ thisCollection[0].name}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
            
            // <div className = "nftContainer" >
            //     <h1>{ thisCollection[0].name}</h1>
            // <div className = "nftImg">
            //     <img className = "nftMain" src = { thisCollection[0].large_image_url } alt = "mountain"/>
            // </div>
            // <div className = "detailsContainer">
            // <CollectionDetails thisCollection = { thisCollection }/>
            // </div>
            
           
            // </div>
        
    );
}

export default CollectionInfo;