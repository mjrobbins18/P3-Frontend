import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PriceFilter from './PriceFilter';
import dropDownIcon from './Images/dropdown.png'

//great job max!!! incredible work!!!

function Dropdown(props) {
    
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