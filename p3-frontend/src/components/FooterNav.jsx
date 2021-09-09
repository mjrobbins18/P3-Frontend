import React from 'react';
import { Link } from 'react-router-dom'
import trophy from './Images/trophy.png'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'


function FooterNav(props) {
    return (
        <div className = "footerContainer">
            <div className = "Footer" id = "Nav">
             <Link to = '/dashboard'className= "footerIcons" id="trophyIconFoot"> <img src= {trophy} alt="Trophies"/> </Link><br></br>
             <Link to = '/create' className= "footerIcons" id= "createIconFoot"><img src= { plusIcon } alt="Create NFT"/></Link><br></br>
             <Link to = '/about' className= "footerIcons" id= "aboutIconFoot"><img src= "https://visualpharm.com/assets/454/About-595b40b65ba036ed117d42d0.svg" alt="About"/></Link><br></br>
             <Link to = '/Login' className= "footerIcons" id= "loginIconFoot"><img src = { profile } alt= ""/></Link>     
        </div>
        </div>
        
    );
}

export default FooterNav;