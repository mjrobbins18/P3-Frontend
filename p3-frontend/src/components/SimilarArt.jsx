import React from 'react';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'


function SimilarArt(props) {
    return (
        <div className = "similarContainer">
        <fieldset className = "collectionField"><legend className = "collectionLegend">Similar Art</legend></fieldset>
    <div className = "imageContainer">
        <div className = "div">
             <img  className = "collectionImage" src ={flower} alt = ""/>
        </div>
        <div className = "div">
             <img  className = "collectionImage" src ={mountain} alt = ""/>
        </div>
        <div className = "div">
            <img  className = "collectionImage" src ={flower1} alt = ""/>
        </div>
        <div className = "div">
             <img  className = "collectionImage" src ={forest} alt = ""/>
        </div>
        <div className = "div">
            <img  className = "collectionImage" src ={flower} alt = ""/>
        </div>
    </div>
                
    </div> 
    );
}

export default SimilarArt;