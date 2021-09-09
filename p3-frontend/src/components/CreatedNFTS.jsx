import React from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext';

function CreatedNFTS({ userInfo }) {
    const { recent } = useContext(DataContext)
    
    if(!recent){
        return null
    }else {
        return (
            <div className = "collectionContainer">
            <fieldset className = "collectionField"><legend className = "collectionLegend">NFT's You Have Created</legend></fieldset>
            <div className = "imageContainer">
                {recent.map(item => {
                    return(
                        <img src = { item.image_url } alt = {item.name}/>
                    )
                   
                })}

            </div>
            </div>
        );
    }
    
   
}

export default CreatedNFTS;