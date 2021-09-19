import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import trophy from './Images/trophy.png'
import upArrowPic from './Images/upArrow.png'
import downArrow from './Images/downArrow.png'
import profile from './Images/—Pngtree—vector edit profile icon_4102545.png'
import plusIcon from './Images/plusIcon.png'
import aboutIcon from './Images/aboutIcon.svg'
import whiteArrow from './Images/whiteArrow.png'
import { DataContext } from './DataContext';

function Dropdown({ currentUser }) {

    const { loggedIn} = useContext(DataContext)
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
    if (dropDown === false){
        return (
            <div className = "Dropdown">
                
                {!upArrow ?<div className = "testdiv" onClick = { clickArrow }> <img className = "upArrow" src = { upArrowPic } alt = "uparrow" onClick = { clickArrow }/> </div>: <div onClick = { clickArrow  } className = "testdiv"><img className = "downArrow" src = { downArrow } alt = "upArrow" onClick = { clickArrow }/></div>} 
                
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
                <div onClick = { clickArrow } className = "testdiv" >
                {!upArrow ? <img className = "upArrow" src = { upArrowPic }  alt = "uparrow"/> : <img className = "downArrow" src = { downArrow } alt = "upArrow"/>} 

                </div>
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