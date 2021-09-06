import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Featured(props) {
    
    const { random } = useContext(DataContext)
    
    
    return (
        <div>
            <div>
            <fieldset className = "collectionField"><legend className = "collectionLegend">Featured</legend></fieldset>
        <div className = "imageContainer">
            {random.map(item => {
                return(
                    <div className = "div">
                        <Link to = {`/NFT/${item._id}`}><img  className = "featuredImage" src ={ item.image_url } alt = ""/></Link>
                    </div>
                )
            })}
           
            
        </div>
                    
        </div>   
            
        </div>
    );
}

export default Featured;
