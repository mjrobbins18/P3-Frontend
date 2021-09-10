import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CreatedNFTS from './CreatedNFTS';
import { DataContext } from './DataContext';
import Trophies from './Trophies';


function Dashboard({ match }) {

    const {userInfo, recent} = useContext(DataContext)


    return (
        <div>
            <div className = "loginContainer">
                <h1>Welcome, { userInfo[0].username }</h1>
                <h3>This is your dashboard, where you can see the NFT's that you own!</h3>
                {userInfo[0].trophies.length < 2 ? <h2>You currently do not own any NFT's</h2>: null}
                {userInfo[0].trophies.length < 2 ? <div className = "loginBtn"><Link to = '/browse' className = "link">Buy NFTs</Link></div> : null}
                {userInfo[0].created.length < 2 ? <h2>You have not created any NFT's yet</h2>: null}
                {userInfo[0].created.length < 2 ? <div className = "loginBtn"><Link to = '/create' className = "link">Create NFT</Link></div> : null}
            </div>
            <div >
            <Trophies userInfo = { userInfo }/>
            </div>
            <div>
            {/* <CreatedNFTS userInfo = { userInfo }/> */}
            </div>
                
        </div>
    );
}

export default Dashboard;