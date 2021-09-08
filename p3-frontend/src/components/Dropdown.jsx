import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PriceFilter from './PriceFilter';
import trophy from './Images/trophy.png'
import upArrowPic from './Images/upArrow.png'
import downArrow from './Images/downArrow.png'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'
import aboutIcon from './Images/aboutIcon.svg'
// import dropDownIcon from './Images/dropdown.png'

//great job max!!! incredible work!!!
//https://www.visualpharm.com/free-icons/menu-595b40b65ba036ed117d44bf  <---nice website for icons
function Dropdown(props) {
    // const dropDownIcon = "https://visualpharm.com/assets/350/Menu-595b40b65ba036ed117d44bf.svg"
    
    const [dropDown, setDropDown] = useState(false)
    const [upArrow, setUpArrow] = useState(false)

    const clickArrow = () => {
        !upArrow ? setUpArrow(true) : setUpArrow(false)
        !dropDown ? setDropDown(true) : setDropDown(false)

    }

    if (dropDown === false){
        return (
            <div className = "Dropdown">
                {!upArrow ? <img className = "upArrow" src = { upArrowPic } onClick = { clickArrow } alt = "uparrow"/> : <img className = "downArrow" src = { downArrow } onClick = { clickArrow } alt = "upArrow"/>} 
                <div className = "dropDownContent">
                <div className = "hideText">
                 <div className = "dropBTN">
                 <Link to = '/trophies'className= "maxHeader link">Trophies </Link>
                </div>
                <div className = "dropBTN">
                <Link to = '/create' className= "maxHeader link">Create NFT</Link>
                </div> 
                <div className = "dropBTN">
                <Link to = '/about' className= "maxHeader link">About</Link>
                </div>
                <div className = "dropBTN">
                <Link to = '/Login' className= "maxHeader link">Login</Link>
                </div>  
             </div>
                   
                    </div>
                </div>
        );
    }else if(dropDown === true){
        return (
            <div className = "Dropdown">
                {!upArrow ? <img className = "upArrow" src = { upArrowPic } onClick = { clickArrow } alt = "uparrow"/> : <img className = "downArrow" src = { downArrow } onClick = { clickArrow } alt = "upArrow"/>} 
            <div className = "show">
            <div className = "hideText">
            <div className = "dropBTN">
            <img src= {trophy} alt="Trophies" className= "dropIcons"/>
                 <Link to = '/trophies'className= "link">Trophies </Link>
                </div>
                <div className = "dropBTN">
                <img src= { plusIcon } alt="Create NFT" className= "dropIcons"/>
                <Link to = '/create' className= "link">Create NFT</Link>
                </div> 
                <div className = "dropBTN">
                <img src={ aboutIcon }  alt="About" className= "dropIcons"/>
                <Link to = '/about' className= "link">About</Link>
                </div>
                <div className = "dropBTN">
                <img src = { profile } alt= "" className= "dropIcons" />
                <Link to = '/Login' className= "link">Login</Link>
                </div> 
             </div>
            
            </div>
            </div>
        )
    }
    
            
            
           
        
}

export default Dropdown;