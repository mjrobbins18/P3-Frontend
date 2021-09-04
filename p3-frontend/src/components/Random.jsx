import React from 'react';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Random(props) {
    return (
        <div>
           <img  className = "collectionImage" src ={flower} alt = ""/>
           <img  className = "collectionImage" src ={flower1} alt = ""/>
           <img  className = "collectionImage" src ={mountain} alt = ""/>
           <img  className = "collectionImage" src ={flower} alt = ""/>
           <img  className = "collectionImage" src ={mountain} alt = ""/>
           <img  className = "collectionImage" src ={flower1} alt = ""/>
           <img  className = "collectionImage" src ={mountain} alt = ""/>
           <img  className = "collectionImage" src ={flower} alt = ""/>
        </div>
    );
}

export default Random;