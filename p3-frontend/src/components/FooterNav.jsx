import React from 'react';
import { Link } from 'react-router-dom'

function FooterNav(props) {
    return (
        <div className = "footerContainer">
            <div className = "Footer" id = "Nav">
             <Link to = '/trophies'>Trophies</Link><br></br>
             <Link to = '/create'>Create NFT</Link><br></br>
             <Link to = '/about'>About</Link><br></br>
                    
        </div>
        </div>
        
    );
}

export default FooterNav;