import React from 'react';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Featured(props) {
    return (
        <div>
            <div className = "collectionContainer">
            <fieldset className = "collectionField"><legend className = "collectionLegend">Featured</legend></fieldset>
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
            
        </div>
    );
}

export default Featured;
