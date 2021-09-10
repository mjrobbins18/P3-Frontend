import React from 'react';
import { useContext } from 'react';
import { DataContext } from './DataContext';
import { Link } from 'react-router-dom'

function CreatedNFTS({ userInfo }) {
    const { recent } = useContext(DataContext)
    console.log(userInfo)
    if(userInfo[0].created.length < 2){
        return null
    }else {
        return (
            <div className = "collectionContainer">
            <fieldset className = "collectionField"><legend className = "collectionLegend">NFT's You Have Created</legend></fieldset>
            <div className = "imageContainer">
                {userInfo[0].created.map(item => {
                    return(
                        <div className = "div">
                            <Link to = {`/createdNFT/${item._id}`}>
                             <img className = "collectionImage" src = { item.image_url} alt = { item.name }/>
                             </Link>
                            </div>
                    )
                   
                })}

            </div>
            </div>
        );
    }
    
   
}

export default CreatedNFTS;