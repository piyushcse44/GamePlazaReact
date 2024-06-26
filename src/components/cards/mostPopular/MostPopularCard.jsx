import React from "react";
import './mostPopularCard.css'
import { Link, useNavigate } from "react-router-dom";

const MostPopularCard = ({key , game}) => {
  const navigate = useNavigate();

  const navToDetailPage = (event) => {
    event.preventDefault();
    const curGameId = game.gameId;
    navigate("/Details?gameId="+curGameId); 
  };

  return (
    <div className="col-lg-3 col-sm-6" onClick={navToDetailPage}>
      <div className="item">
        <img src={game.featureImage} alt="" />
        <h4 style={{ color: 'white' }}>
          {game.gameName}
          <br />
          <span>{game.companyName}</span>
        </h4>
        <ul>
          <li>
            <i className="fa fa-star" /> {game.gameRating == null ? 0.0 :game.gameRating }
          </li>
          <li>
            <i className="fa fa-download" /> {game.totalDownloads==null ?0 : game.totalDownloads}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MostPopularCard;
