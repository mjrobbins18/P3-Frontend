import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from './DataContext';


function DashboardLogin(props) {



    // axios.get(url)

    const { loggedIn } = useContext(DataContext)
    if(loggedIn === "") {
        return (
            <div className = "loginContainer">
                <h1>Please Login in order to Create, Buy, and Update NFTS!</h1>
                <div id= "dashLogButton"className = "loginBtn">
                <Link className = "link" to = "/login">Login</Link>
                </div>
            </div>
        )
    }else{
        return null
    }
    
}

export default DashboardLogin;