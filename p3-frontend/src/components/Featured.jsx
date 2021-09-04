import React from 'react';
import { Link } from 'react-router-dom';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Featured(props) {
    return (
        <div>
            <div>
            <fieldset className = "collectionField"><legend className = "collectionLegend">Featured</legend></fieldset>
        <div className = "imageContainer">
            <div className = "div">
                 <Link to = "/NFT"><img  className = "featuredImage" src ={flower} alt = ""/></Link>
            </div>
            <div className = "div">
                 <img  className = "featuredImage" src ={mountain} alt = ""/>
            </div>
            <div className = "div">
                <img  className = "featuredImage" src ={flower1} alt = ""/>
            </div>
            <div className = "div">
                 <img  className = "featuredImage" src ={forest} alt = ""/>
            </div>
            <div className = "div">
                <img  className = "featuredImage" src ={flower} alt = ""/>
            </div>
        </div>
                    
        </div>   
            
        </div>
    );
}

export default Featured;
