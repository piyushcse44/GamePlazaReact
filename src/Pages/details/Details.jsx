import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Feature from "../../components/feature/Feature.jsx";
import DetailComponent from "../../components/detailComponent/DetailComponent.jsx";
import Other from "../../components/other/Other.jsx";
import { GetRequest } from "../../api/FetchRequest.js";
import { useLocation } from 'react-router-dom';

const Details = () => {
  const [gameSpec,setGameSpec] = useState({})
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

  let endPoint = "/api/game_plaza/game_spec/"+currentGameId;

  useEffect(() => {
  
     GetRequest((err, res) => { 
       if (err) {
         setError(err.response.data);
         return;
       } else {
          setGameSpec(res.data)
         return;
       }
     }, endPoint);
   }, [currentGameId]);
 


 
  return (
    <div className="main-container">
    <NavBar />
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="page-content">
          <Feature gameSpec ={gameSpec} />
          <DetailComponent gameSpec={gameSpec}/>
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
