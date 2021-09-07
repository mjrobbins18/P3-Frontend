import React from 'react';
import Browse from './Browse';
import Collection from './Collection';
import Featured from './Featured';
import RecentlyAdded from './RecentlyAdded';
import FeaturedNFT from './FeaturedNFT';

function Main(props) {
    return (
        <div>
            <div>
                <FeaturedNFT/>
                <Browse/>
                <Collection/>
                <Featured/>
                <RecentlyAdded/>
            </div>
        </div>
    );
}

export default Main;