import React from 'react';
import CreateNFT from './CreateNFT';
import DeleteNFT from './DeleteNFT';
import Sell from './Sell';
import UpdatePrice from './UpdatePrice';
import { Link } from 'react-router-dom';
import flower from './Images/flower.jpg'
import flower1 from './Images/flower1.jpg'
import forest from './Images/forest.jpg'
import mountain from './Images/mountain.jpg'

function Trophies(props) {
    return (
        <div>
            <h1>Trophies</h1>
            <div>
            <div>
            <img  className = "collectionImage" src ={mountain} alt = ""/>
                <Link to = "/sell">Sell NFT</Link>
                <Link to = "/NFT">Details</Link>

            </div>
            <div className = "div">
            <img  className = "image" src ={mountain} alt = ""/>
                <Link to = "/sell">Sell NFT</Link>
                <Link to = "/NFT">Details</Link>
            </div>
            <div className = "div">
            <img  className = "image" src ={mountain} alt = ""/>
                <Link to = "/sell">Sell NFT</Link>
                <Link to = "/NFT">Details</Link>
            </div>
            <div className = "div">
            <img  className = "image" src ={mountain} alt = ""/>
                <Link to = "/sell">Sell NFT</Link>
                <Link to = "/NFT">Details</Link>
            </div>
            <div className = "div">
            <img  className = "image" src ={mountain} alt = ""/>
                <Link to = "/sell">Sell NFT</Link>
                <Link to = "/NFT">Details</Link>
            </div>
        </div>
        </div>
    );
}

export default Trophies;<h1>Trophies</h1>