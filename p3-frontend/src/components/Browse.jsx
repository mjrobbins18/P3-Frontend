import React from 'react';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'





function Browse(props) {
    return (
        <div>
       
        <div className = "imageContainer">
            <img className = "image" src ={flower} alt = ""/>
            <img className = "image"  src ={flower1} alt = ""/>
            <img className = "image"  src ={mountain} alt = ""/>
            <img className = "image"  src ={forest} alt = ""/>
            <img className = "image"  src ={flower} alt = ""/>
            <img className = "image"  src ={flower1} alt = ""/>
            <img className = "image"  src ={mountain} alt = ""/>
            <img className = "image"  src ={forest} alt = ""/>
            <img className = "image"  src ={flower} alt = ""/>
            <img className = "image"  src ={flower1} alt = ""/>
        </div>
        <div className = "imageContainer">
        <img className = "image" src ={flower} alt = ""/>
        <img className = "image"  src ={flower1} alt = ""/>
        <img className = "image"  src ={mountain} alt = ""/>
        <img className = "image"  src ={forest} alt = ""/>
        <img className = "image"  src ={flower} alt = ""/>
        <img className = "image"  src ={flower1} alt = ""/>
        <img className = "image"  src ={mountain} alt = ""/>
        <img className = "image"  src ={forest} alt = ""/>
        <img className = "image"  src ={flower} alt = ""/>
        <img className = "image"  src ={flower1} alt = ""/>
    </div>
                    
        </div>    
    );
}

export default Browse;

