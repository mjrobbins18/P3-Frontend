import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Header'
// import Sidebar from './Sidebar';
import NFT from './NFT'
import About from './About'
import Trophies from './Trophies'
import Login from './Login';


function Landing(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className = "Main">
                <div>
                {/* <Sidebar/> */}
                <NFT/>
                <Route exact path = "/about" render = { About }/>
                <Route exact path = "/trophies" render = { Trophies }/>
                <Route exact path = "/login" render = { Login }/>
                </div>
               
            </main>
        </div>
    );
}

export default Landing;