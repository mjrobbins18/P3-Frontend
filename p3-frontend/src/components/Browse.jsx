import React from 'react';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'





function Browse(props) {
    return (
        <div>
       
        <div className = "imageContainer">
            <div className = "div">
                <p className = "centered">Browse</p> <img  className = "image" src ={flower} alt = ""/>
            </div>
            <div className = "div">
                <p className = "centered">Drops</p> <img  className = "image" src ={mountain} alt = ""/>
            </div>
            <div className = "div">
                <p className = "centered">New</p> <img  className = "image" src ={flower1} alt = ""/>
            </div>
            <div className = "div">
                <p className = "centered">Coming</p> <img  className = "image" src ={forest} alt = ""/>
            </div>
            <div className = "div">
                <p className = "centered">Brands</p> <img  className = "image" src ={flower} alt = ""/>
            </div>
        </div>
                    
        </div>    
    );
}

export default Browse;

