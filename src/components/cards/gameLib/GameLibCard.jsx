import React from "react";

const GameLibCard = ({key,gamelib}) => {
  return (
    <div className="item">
      <ul>
        <li>
          <img
            src={gamelib.featureImage}
            alt=""
            className="templatemo-item"
          />
        </li>
        <li>
          <h4>{gamelib.gameName}</h4>
          <span>{gamelib.companyName}</span>
        </li>
        <li>
          <h4>Date Added</h4>
          <span>{gamelib.dateAdded}</span>
        </li>
        <li>
          <h4>Hours Played</h4>
          <span>{gamelib.hoursPlayed}</span>
        </li>
        <li>
          <h4>Currently</h4>
          <span>Downloaded</span>
        </li>
        <li>
          <div className="main-border-button">
            <a href="#">Donwload</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default GameLibCard;
