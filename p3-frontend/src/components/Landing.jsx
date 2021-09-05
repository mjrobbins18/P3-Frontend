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
import NFT from './NFT'
import Random from './Random';
import CreateUser from './CreateUser';
import Buy from './Buy';
import NFTContainer from './NFTContainer';
import RandomCont from './RandomCont';



function Landing(props) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <main className = "Main">
                <div>
                {/* <Sidebar/> */}
                <Route exact path = "/" render = { Main }/>
                <Route exact path = "/browse" render = { RandomCont }/>
                <Route exact path = "/about" render = { About }/>
                <Route exact path = "/trophies" render = { Trophies }/>
                <Route exact path = "/create" render = { CreateNFT }/>
                <Route exact path = "/login" render = { Login }/>
                <Route exact path = "/NFT/:id"  render = { routerProps => <NFTContainer match = { routerProps.match }/>}/>
                <Route exact path = "/buy" render = { Buy }/>
                
                <Route exact path = "/newuser" render = { CreateUser }/>
                </div>
               
            </main>
            <footer>
                <FooterNav/>
            </footer>
        </div>
    );
}

export default Landing;