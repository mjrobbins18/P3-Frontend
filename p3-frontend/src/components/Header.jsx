import React from 'react';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import rocket from './Images/rocket.png'
import trophy from './Images/trophy.png'
import { Link } from 'react-router-dom'

function Header(props) {

    return (
        <div className = "Header">
            <Link to = '/'><img className = "Logo" src = "https://lh3.googleusercontent.com/UiF_88MADFIHbCZp88RlGbCRDX3exmR4FOg_u4XMqwmXglbmbOFq26F3XdgTgPX4PwZ5BpaViXQ9KfljhLfZci-1NJzSc1tLL_QV=s130" alt = "rocket logo"/></Link>
            <SearchBar/>
            <div id= "dropLog">
            <Dropdown/>
            </div>
            {/* added div to try to keep organized on header */}
            
        </div>
    );

}

export default Header;