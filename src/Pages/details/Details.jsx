import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Feature from "../../components/feature/Feature.jsx";
import DetailComponent from "../../components/detailComponent/DetailComponent.jsx";
import Other from "../../components/other/Other.jsx";
import { GetRequest } from "../../api/FetchRequest.js";
import { useLocation } from 'react-router-dom';

const Details = () => {
  const searchParams = new URLSearchParams(location.search);
  const gameId = searchParams.get('gameId');
  const [currentGameId, setCurrentGameId] = useState(gameId||'');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const gameId = searchParams.get('gameId');
    if (gameId) {
      setCurrentGameId(gameId);
    }
   
  }, [location.search]);

  let endPoint = "/api/game_plaza/search/game_list?pageSize="+pageSize+"&pageNumber="+currentPageNumber
  +"&searchedWord="+currentSearchedWord;


 
  return (
    <div className="main-container">
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
          <Feature />
          <DetailComponent />
          <Other />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Details
