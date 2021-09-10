import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import Details from './Details';


function Trophies({ userInfo }) {

    const removeBlanks = userInfo[0].trophies.filter(item => item !== "")
    if(userInfo[0].trophies.length < 2){
        return null
    }else {
        return (
            <div className = "collectionContainer">
                <fieldset className = "collectionField"><legend className = "collectionLegend">Currently Owned NFTS</legend></fieldset>
                <div className = "imageContainer">
                    {removeBlanks.map(item => {
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
        )
    }
    
    
    
    
}

export default Trophies