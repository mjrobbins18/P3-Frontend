import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import rocket from './Images/rocket.png'

function Header(props) {
    return (
        <div className = "Header">
            <img src = { rocket } alt = "rocket logo"/>
            <SearchBar/>
            <Dropdown/>
        </div>
    );
}

export default Header;