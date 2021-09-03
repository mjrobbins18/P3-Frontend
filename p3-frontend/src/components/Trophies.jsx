import React from 'react';
import CreateNFT from './CreateNFT';
import DeleteNFT from './DeleteNFT';
import Sell from './Sell';
import UpdatePrice from './UpdatePrice';

function Trophies(props) {
    return (
        <div>
            <h1>Trophies</h1>
            <DeleteNFT/>
            <Sell/>
            <UpdatePrice/>
            <CreateNFT/>
        </div>
    );
}

export default Trophies;<h1>Trophies</h1>