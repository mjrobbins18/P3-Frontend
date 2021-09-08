import React from 'react';
import Browse from './Browse';
import Collection from './Collection';
import Featured from './Featured';
import RecentlyAdded from './RecentlyAdded';
import FeaturedNFT from './FeaturedNFT';
import Introtxt from './Introtxt';

function Main(props) {
    return (
        <div>
            <FeaturedNFT/>
            <div>
                
            
                <Browse/>
                <Collection/>
                <Featured/>
                <RecentlyAdded/>
            </div>
        </div>
    );
}

export default Main;