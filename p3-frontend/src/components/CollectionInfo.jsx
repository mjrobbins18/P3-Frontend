import React, { useContext } from 'react';
import CollectionDetails from './CollectionDetails';
import { DataContext } from './DataContext';

function CollectionInfo({ match }) {
    
    const { collection } = useContext(DataContext)
    const thisID = match.params.id
    const thisCollection = collection.filter(item => item._id === thisID)

console.log(thisCollection)
    return (
       
            
            <div className = "nftContainer" >
                <h1>{ thisCollection[0].name}</h1>
            <div className = "nftImg">
                <img className = "nftMain" src = { thisCollection[0].large_image_url } alt = "mountain"/>
            </div>
            <div className = "detailsContainer">
            <CollectionDetails thisCollection = { thisCollection }/>
            </div>
            
           
            </div>
        
    );
}

export default CollectionInfo;