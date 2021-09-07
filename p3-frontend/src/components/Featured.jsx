import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

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
