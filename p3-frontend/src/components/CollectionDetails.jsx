import React, { useState } from 'react';

function CollectionDetails({ thisCollection }) {
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
        
        if(thisCollection[0].description ===  null){
            return (
                <div className = "Dropdown">
                    <h1 onClick = { showDropDown }>Details</h1>
                <div className = "show1">
                    <h1>No details about this Collection available at this time!</h1>
       
                </div>
                </div>
            )
        }else {
            return(
                
                <div className = "Dropdown">
                <h1 onClick = { showDropDown }>Details</h1>
            <div className = "show1">
                <h1>{ thisCollection[0].description }</h1>
   
            </div>
            </div>
            )
        }
        
    }
}

export default CollectionDetails;