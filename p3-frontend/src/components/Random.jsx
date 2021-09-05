import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Random(props) {

    const { random, setRandom } = useContext(DataContext)
    

    console.log(random)


    return (
        random.map(item => {
            return (
                <div>
                    <Link to = {`/NFT/${item._id}`}>
                        <img className = "collectionImage" src = { item.image_preview_url} alt = { item.name }/>
                    </Link>
                </div> 
            )
                
            

        })
        // <div>
        //    <img  className = "collectionImage" src ={flower} alt = ""/>
        //    <img  className = "collectionImage" src ={flower1} alt = ""/>
        //    <img  className = "collectionImage" src ={mountain} alt = ""/>
        //    <img  className = "collectionImage" src ={flower} alt = ""/>
        //    <img  className = "collectionImage" src ={mountain} alt = ""/>
        //    <img  className = "collectionImage" src ={flower1} alt = ""/>
        //    <img  className = "collectionImage" src ={mountain} alt = ""/>
        //    <img  className = "collectionImage" src ={flower} alt = ""/>
        // </div>
    );
}

export default Random;