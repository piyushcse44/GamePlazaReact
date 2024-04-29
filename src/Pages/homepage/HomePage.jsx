import React, { useState, useEffect } from "react";
import NavBar from "../../components/nav/NavBar.jsx";
import Banner from "../../components/banner/Banner.jsx";
import MostPopular from "../../components/mostPopular/MostPopular.jsx";
import GamingLib from "../../components/gamingLib/GamingLib.jsx";
import Footer from "../../components/footer/Footer.jsx";
import { GetRequest } from "../../api/FetchRequest.js";
import "./homepage.css";

const HomePage = () => {
  const [gameList, setGameList] = useState([]);
  const endPoint = "/api/game_plaza/game_list";

  useEffect(() => {
    GetRequest((err, res) => { 
      if (err) {
        setError(err.response.data.message);
        return;
      } else {
         setGameList(res.data.content)
        return;
      }
    }, endPoint);
  }, []);

  return (
    <div className="main-container">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <Banner />
              <MostPopular gamelist={gameList} currentPage="home" />
              <GamingLib />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
