import React from 'react';
import FeaturedImg from './Images/FeaturedImg.jpeg';
import Introtxt from './Introtxt';

function FeaturedNFT(props) {
    return (

<div className= "featDiv"> 
<Introtxt/>
    <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>
        <div class="featContainer">
            
           <div class="card">
           <h3> Feature of the Day!!</h3>
             <div class="face face1">
             
                  <i class="fab fa-windows"></i>            
                 <img id= "NFTfeat" src={FeaturedImg} alt="" />
               
             </div>
             <div class="face face2">
               <div class="content">
                 <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
                 <a href="#" type="button">Read More</a>
               </div>
             </div>
          </div>
          </div>
        </div>
        // <div >
        //     <img class="box glowing" src={FeaturedImg} alt="" />
        // </div>
    );
}

export default FeaturedNFT;