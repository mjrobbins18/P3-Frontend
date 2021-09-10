import React from 'react';
import { Route } from 'react-router-dom'
import Header from './Header'
import About from './About'
import Login from './Login';
import Main from './Main';
import FooterNav from './FooterNav';
import Buy from './Buy';
import NFTContainer from './NFTContainer';
import RandomCont from './RandomCont';
import CollectionInfo from './CollectionInfo';
import CreateContainer from './CreateContainer';
import CreateUserCont from './CreateUserCont';
import DashboardCont from './DashboardCont';
import Dashboard from './Dashboard';
import UserNFTCont from './UserNFTCont';
import DeleteNFT from './DeleteNFT';



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
                <Route exact path = "/dashboard" render = { DashboardCont }/>
                <Route exact path = "/create" render = { CreateContainer }/>
                <Route exact path = "/login" render = { Login }/>
                <Route exact path = "/NFT/:id"  render = { routerProps => <NFTContainer match = { routerProps.match }/>}/>
                <Route exact path = "/Collection/:id"  render = { routerProps => <CollectionInfo match = { routerProps.match }/>}/>
                <Route exact path = "/dashboard/:id"  render = { routerProps => <Dashboard match = { routerProps.match }/>}/>
                <Route exact path = "/createdNFT/:id"  render = { routerProps => <UserNFTCont match = { routerProps.match }/>}/>
                <Route exact path = "/deleteNFT/:id"  render = { routerProps => <DeleteNFT match = { routerProps.match }/>}/>
                <Route exact path = "/buy/:id"  render = { routerProps => <Buy match = { routerProps.match }/>}/>
                
                <Route exact path = "/newuser" render = { CreateUserCont }/>
                </div>
               
            </main>
            <footer>
                <FooterNav/>
            </footer>
        </div>
    );
}

export default Landing;