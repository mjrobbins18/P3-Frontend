import React from 'react';
import { Link } from 'react-router-dom';
import Details from './Details';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Trophies(props) {
    return (
        <div>
            <h1>Trophies</h1>
            <div>
            <div className = "trophyDiv">
            <img  className = "trophyImage" src ={mountain} alt = ""/>
                <div className = "detailsContainer">
                    <div className = "sellCont">
                    <div className = "sellBtn">
                    <Link className = "buyLink" to = "/sell">Sell NFT</Link>
                    </div>
                    </div>
                </div>
                <div className = "detailsContainer">
                    <Details/>
                </div>
            </div>
            <br></br>
            <div className = "trophyDiv">
            <img  className = "trophyImage" src ={mountain} alt = ""/>
                <div className = "detailsContainer">
                    <div className = "sellCont">
                        <div className = "sellBtn">
                            <Link className = "buyLink" to = "/sell">Sell NFT</Link>
                        </div>
                    </div>                
                </div>
                <div className = "detailsContainer">
                    <Details/>
           
                </div>
            </div>
            <br></br>
            <div className = "trophyDiv">
            <img  className = "trophyImage" src ={mountain} alt = ""/>
                <div className = "detailsContainer">
                    <div className = "sellCont">
                        <div className = "sellBtn">
                            <Link className = "buyLink" to = "/sell">Sell NFT</Link>
                        </div>
                    </div>
                </div>
                <div className = "detailsContainer">
                    <Details/>
           
                </div>
            </div>
            <br></br>
            <div className = "trophyDiv">
            <img  className = "trophyImage" src ={mountain} alt = ""/>
                <div className = "detailsContainer">
                    <div className = "sellCont">
                        <div className = "sellBtn">
                            <Link className = "buyLink" to = "/sell">Sell NFT</Link>
                        </div>
                    </div>
                </div>
                <div className = "detailsContainer">
                    <Details/>
           
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        </div>
    );
}

export default Trophies;<h1>Trophies</h1>