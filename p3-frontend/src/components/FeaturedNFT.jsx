import React from "react";
import { Link } from "react-router-dom";
import FeaturedImg from "./Images/FeaturedImg.jpeg";
import Introtxt from "./Introtxt";

function FeaturedNFT(props) {
  return (
    <div className="featDiv">
      <Introtxt />
      <div class="featContainer">
        <div class="card">
          <div class="face face1">
            <img id="NFTfeat" src={FeaturedImg} alt="" />
          </div>
          <div class="face face2">
            <div class="content">
              <br />
              <br />
             
              <p>
                CryptoPunks launched as a fixed set of 10,000 items in mid-2017
                and became one of the inspirations for the ERC-721 standard.
                They have been featured in places like The New York Times,
                Christie’s of London, Art|Basel Miami, and The PBS NewsHour.
              </p>
              <br />
              <Link to="/browse" type="button">
                Explore!
              </Link>
              <br></br>
              <br />
              <h4>Featured NFT of the Day!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div >
    //     <img class="box glowing" src={FeaturedImg} alt="" />
    // </div>
  );
}

export default FeaturedNFT;
