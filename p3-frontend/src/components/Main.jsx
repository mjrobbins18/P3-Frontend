import React from 'react';
import Collection from './Collection';
import RecentlyAdded from './RecentlyAdded';
import FeaturedNFT from './FeaturedNFT';

function Main(props) {
    return (
        <div>
            <div className ="hideFeat">
            <FeaturedNFT/>
            </div>
            <div>
        
                <Collection/>
                {/* <Featured/> */}
                <RecentlyAdded/>
            </div>
        </div>
    );
}

export default Main;