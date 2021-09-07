import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function RecentlyAdded(props) {

    const { random } = useContext(DataContext)



    return (
        <div>
             <div>
            <fieldset className = "collectionField"><legend className = "collectionLegend">Recently Added</legend></fieldset>
        <div className = "recentContainer">
            {random.map(item => {
                return(
                    <div className = "div">
                        <Link to = {`/NFT/${item._id}`}>
                            <img  className = "featuredImage" src ={ item.image_url } alt = ""/>
                        </Link>
                    </div>
                )
            })}
        </div>
                    
        </div> 
        </div>
    );
}

export default RecentlyAdded;