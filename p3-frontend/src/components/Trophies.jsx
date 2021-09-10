import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import Details from './Details';


function Trophies({ userInfo }) {
    if(userInfo[0].trophies.length < 2){
        return null
    }else {
        return (
            <div className = "collectionContainer">
                <fieldset className = "collectionField"><legend className = "collectionLegend">Currently Owned NFTS</legend></fieldset>
                <div className = "imageContainer">
                    
                </div>
            </div>
        )
    }
    
    
    
    
}

export default Trophies