import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import PriceFilter from './PriceFilter';
import trophy from './Images/trophy.png'
import upArrowPic from './Images/upArrow.png'
import downArrow from './Images/downArrow.png'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'
import aboutIcon from './Images/aboutIcon.svg'
import whiteArrow from './Images/whiteArrow.png'
import whiteUpArrow from './Images/whiteUpArrow.png'
import { DataContext } from './DataContext';
// import dropDownIcon from './Images/dropdown.png'

//great job max!!! incredible work!!!
//https://www.visualpharm.com/free-icons/menu-595b40b65ba036ed117d44bf  <---nice website for icons
function Dropdown({ currentUser }) {
    // const dropDownIcon = "https://visualpharm.com/assets/350/Menu-595b40b65ba036ed117d44bf.svg"
    const { loggedIn, checkLogin } = useContext(DataContext)
    const [dropDown, setDropDown] = useState(false)
    const [upArrow, setUpArrow] = useState(false)

    const clickArrow = () => {
        !upArrow ? setUpArrow(true) : setUpArrow(false)
        !dropDown ? setDropDown(true) : setDropDown(false)

    }
    const logout = () => {
        clickArrow()
        localStorage.clear()
        window.location.reload()
    }
console.log(`loggedin ${loggedIn}`)
    if (dropDown === false){
        return (
            <div className = "Dropdown">
                {!upArrow ? <img className = "upArrow" src = { whiteArrow} onClick = { clickArrow } alt = "uparrow"/> : <img className = "downArrow" src = { downArrow } onClick = { whiteArrow } alt = "upArrow"/>} 
                <div className = "dropDownContent">
                <div className = "hideText">
                 <div className = "dropBTN">
                 <Link to = '/dashboard'className= "maxHeader link">Dashboard </Link>
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
                 <Link to = {`/dashboard/${currentUser}`}className= "link" onClick = { clickArrow }>Dashboard </Link>
                </div>
                <div className = "dropBTN">
                <img src= { plusIcon } alt="Create NFT" className= "dropIcons"/>
                <Link to = '/create' className= "link" onClick = { clickArrow }>Create NFT</Link>
                </div> 
                <div className = "dropBTN">
                <img src={ aboutIcon }  alt="About" className= "dropIcons"/>
                <Link to = '/about' className= "link" onClick = { clickArrow }>About</Link>
                </div>
                <div className = "dropBTN">
                <img src = { profile } alt= "" className= "dropIcons" />
                {!loggedIn? <Link to = '/Login' className= "link" onClick = { clickArrow }>Login</Link> :
                <Link to = "/" className = "link" onClick = { logout }>Logout</Link>}
                </div> 
             </div>
            
            </div>
            </div>
        )
    }
    
            
            
           
        
}

export default Dropdown;