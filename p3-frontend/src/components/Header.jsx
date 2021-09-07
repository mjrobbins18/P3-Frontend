import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import rocket from './Images/rocket.png'
import trophy from './Images/trophy.png'
import nftIcon from './Images/NFT_Icon.png'
import { Link } from 'react-router-dom'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'
import aboutIcon from './Images/aboutIcon.svg'

function Header(props) {

    return (
        <div className = "Header">
             
            <Link to = '/'><img className = "Logo" src = { nftIcon } alt = "rocket logo"/></Link>
            <div className = "iconDiv hideIcons">
            <Link to = '/trophies'className= "footerIcons" id="trophyIcon"> <img src= {trophy} alt="Trophies"/> </Link>
             <Link to = '/create' className= "footerIcons" id= "createIcon"><img src= { plusIcon } alt="Create NFT"/></Link>
             <Link to = '/about' className= "footerIcons" id= "aboutIcon"><img src={ aboutIcon }  alt="About"/></Link>
             <Link to = '/Login' className= "footerIcons" id= "loginIcon"><img src = { profile } alt= ""/></Link>
             <Link to = '/trophies'className= "maxHeader link">Trophies </Link>
             <Link to = '/create' className= "maxHeader link">Create NFT</Link>
             <Link to = '/about' className= "maxHeader link">About</Link>
             <Link to = '/Login' className= "maxHeader link">Login</Link>
             </div>
            <SearchBar/>
            {/* <Dropdown/> */}
           
           
           
            {/* added div to try to keep organized on header */}
            
        </div>
    );

}

export default Header;