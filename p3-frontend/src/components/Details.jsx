import React, { useState } from 'react';


function Details(props) {
    const [dropDown, setDropDown] = useState(false)

    const showDropDown = () => {
        !dropDown ? setDropDown(true) : setDropDown(false)
    }
    if (dropDown === false){
        return (
            <div className = "Dropdown">
                <h1 onClick = { showDropDown }>Details</h1>
                <div className = "dropDownContent">
                    <h1>details</h1>
                   
                    </div>
                </div>
        );
    }else if(dropDown === true){
        return (
            <div className = "Dropdown">
                <h1 onClick = { showDropDown }>Details</h1>
            <div className = "show1">
                <h1>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</h1>
   
            </div>
            </div>
        )
    }
    
            
            
}

export default Details;