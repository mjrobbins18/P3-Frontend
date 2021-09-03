import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
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
            <main>
                <Sidebar/>
                <NFT/>
                <About/>
                <Trophies/>
                <Login/>
            </main>
        </div>
    );
}

export default Landing;