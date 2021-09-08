import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'


function SimilarArt(props) {
    const { random } = useContext(DataContext)
    
    return (
        <div className = "similarContainer">
        <fieldset className = "collectionField"><legend className = "collectionLegend">Similar Art</legend></fieldset>
    <div className = "imageContainer">
        {random.map(item => 
            <div className = "div">
        <Link to = {`/NFT/${ item._id }`}>
            <img  className = "collectionImage" src ={ item.image_preview_url } alt = ""/>
            </Link>
       </div>
        )}
    </div>
                
    </div> 
    );
}

export default SimilarArt;