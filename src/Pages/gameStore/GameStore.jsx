import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav/NavBar.jsx";
import MostPopular from "../../components/mostPopular/MostPopular.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Banner from "../../components/banner/Banner.jsx";
import { GetRequest } from "../../api/FetchRequest.js";

const GameStore = () => {
  const [gameList, setGameList] = useState([]);
  const [currentPageNumber,setCurrentPageNumber] = useState(1)
  const [pageSize,setPageSize] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const endPoint = "/api/game_plaza/game_list?pageSize="+pageSize+"&pageNumber="+currentPageNumber;

  useEffect(() => {
    GetRequest((err, res) => { 
      if (err) {
        setError(err.response.data.message);
        return;
      } else {
         setGameList(res.data.content)
         setTotalPages(res.data.totalPages)
        return;
      }
    }, endPoint);
  }, [currentPageNumber]);

  return (
    <div className="main-container">
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">
              <Banner />
              <MostPopular gamelist={gameList} currentPage ="gamestore" 
              currentPageNumber={currentPageNumber}
              setCurrentPageNumber={setCurrentPageNumber}
              totalPages={totalPages}/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameStore;
