import React from 'react';
import UserNFTCard from './UserNFTCard';

function UserNFTCont({match}) {
    return (
        <div>
            <UserNFTCard match = {match}/>
        </div>
    );
}

export default UserNFTCont;