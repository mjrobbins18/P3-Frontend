import React from 'react';
import Details from './Details';
import SimilarArt from './SimilarArt';
import Buy from './Buy'
import Collection from './Collection';


function NFT(props) {
    return (
        <div>
            <h1>NFT</h1>
            <Details/>
            <SimilarArt/>
            <Buy/>
            {/* <Collection/> */}
          
        </div>
    );
}

export default NFT;