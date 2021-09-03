import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import rocket from './Images/rocket.png'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <div className = "Header">
            <Link to = '/'><img className = "Logo" src = { rocket } alt = "rocket logo"/></Link>
            <SearchBar/>
            <Dropdown/>
            <Link to = '/Login'>Login</Link>
        </div>
    );
    
}

export default Header;