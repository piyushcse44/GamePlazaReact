import React from "react";
import GameLibCard from "../cards/gameLib/GameLibCard";
import gaminglib from "../../assets/json/gaminglib.json"

const GamingLib = () => {
  console.log(gaminglib);
  return (
    <div className="gaming-library">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4>
            <em>Your Gaming</em> Library
          </h4>
        </div>

        {
           gaminglib.map(
            (gameLib)=> <GameLibCard key = {gaminglib.gameId} gamelib = {gameLib} />
           )
        }
       
      </div>
      <div className="col-lg-12">
        <div className="main-button">
          <a href="profile.html">View Your Library</a>
        </div>
      </div>
    </div>
  );
};

export default GamingLib;
