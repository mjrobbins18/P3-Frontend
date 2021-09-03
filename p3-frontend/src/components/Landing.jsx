import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Header'
// import Sidebar from './Sidebar';
import CreateNFT from './CreateNFT';
import About from './About'
import Trophies from './Trophies'
import Login from './Login';
import Main from './Main';
import FooterNav from './FooterNav';


function Landing(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className = "Main">
                <div>
                {/* <Sidebar/> */}
                <Main/>
                <Route exact path = "/about" render = { About }/>
                <Route exact path = "/trophies" render = { Trophies }/>
                <Route exact path = "/create" render = { CreateNFT }/>
                <Route exact path = "/login" render = { Login }/>
                </div>
               
            </main>
            <footer>
                <FooterNav/>
            </footer>
        </div>
    );
}

export default Landing;