import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PriceFilter from './PriceFilter';
// import dropDownIcon from './Images/dropdown.png'

//great job max!!! incredible work!!!
//https://www.visualpharm.com/free-icons/menu-595b40b65ba036ed117d44bf  <---nice website for icons
function Dropdown(props) {
    // const dropDownIcon = "https://visualpharm.com/assets/350/Menu-595b40b65ba036ed117d44bf.svg"
    const dropDownIcon = "https://visualpharm.com/assets/188/Menu-595b40b75ba036ed117d9f7e.svg"
    const [dropDown, setDropDown] = useState(false)

    const showDropDown = () => {
        !dropDown ? setDropDown(true) : setDropDown(false)
    }
    if (dropDown === false){
        return (
            <div className = "Dropdown">
                <img onClick = { showDropDown } className = "dropDownIcon" src = { dropDownIcon } alt = "dropdown"/>
                <div className = "dropDownContent">
                    <Link to = '/'>Home</Link>
                    <PriceFilter/>
                   
                    </div>
                </div>
        );
    }else if(dropDown === true){
        return (
            <div className = "Dropdown">
                <img onClick = { showDropDown } className = "dropDownIcon" src = { dropDownIcon } alt = "dropdown"/>
            <div className = "show">
   
                    <PriceFilter/>
            </div>
            </div>
        )
    }
    
            
            
           
        
}

export default Dropdown;