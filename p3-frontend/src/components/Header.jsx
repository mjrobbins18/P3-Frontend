import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import trophy from './Images/trophy.png'
import nftIcon from './Images/NFT_Icon.png'
import { Link } from 'react-router-dom'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'
import aboutIcon from './Images/aboutIcon.svg'
import { useContext } from 'react';
import { DataContext } from './DataContext';


function Header(props) {

   const {currentUser} = useContext(DataContext)
   
    return (
        <div className = "Header">
            
            <Link to = '/'><img className = "Logo" src = { nftIcon } alt = "rocket logo"/></Link>
            <Dropdown currentUser = {currentUser}/>
            <div>
                <h3>{ currentUser }</h3>
            <div className = "iconDiv hideIcons">
            <Link to = {`/dashboard/${currentUser}`}className= "headerIcons" id="trophyIcon"> <img src= {trophy} alt="Trophies"/> </Link>
             <Link to = '/create' className= "headerIcons" id= "createIcon"><img src= { plusIcon } alt="Create NFT"/></Link>
             <Link to = '/about' className= "headerIcons" id= "aboutIcon"><img src={ aboutIcon }  alt="About"/></Link>
             <Link to = '/Login' className= "headerIcons" id= "loginIcon"><img src = { profile } alt= ""/></Link>
             </div>
            
             
            </div>
            
             
            <SearchBar/>
        
            
        </div>
    );

}

export default Header;