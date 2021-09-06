import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';

function Random(props) {

    const { random } = useContext(DataContext)
    

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
    );
}

export default Random;