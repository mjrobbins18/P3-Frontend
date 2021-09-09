import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function Collection(props) {

    const { collection } = useContext(DataContext)
    

    return (

        
        <div className = "collectionContainer">
            <fieldset className = "collectionField"><legend className = "collectionLegend">Collections</legend></fieldset>
            <div className = "imageContainer">
        {collection.map(item => {
            return(
            <div className = "div">
            <Link to = {`/Collection/${item._id}`}>
            <img  className = "collectionImage" src ={ item.image_url } alt = ""/>
            </Link>
            </div>

            )
        })}
           
            </div>
        </div>
                     
    );
}

export default Collection;<h1>Collection</h1>