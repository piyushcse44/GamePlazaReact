import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav/NavBar.jsx";
import MostPopular from "../../components/mostPopular/MostPopular.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Banner from "../../components/banner/Banner.jsx";
import { GetRequest } from "../../api/FetchRequest.js";
import { useLocation } from 'react-router-dom';

const GameStore = () => {
  
  const [gameList, setGameList] = useState([]);
  const [currentPageNumber,setCurrentPageNumber] = useState(parseInt(localStorage.getItem("currentPageNumber")) || 1)
  const [pageSize,setPageSize] = useState(16)
  const [totalPages,setTotalPages] = useState(0)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const curInput = searchParams.get('curInput');
  const [currentSearchedWord, setCurrentSearchedWord] = useState(curInput||'');


  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const curInput = searchParams.get('curInput');
    if (curInput) {
      setCurrentSearchedWord(curInput);
    }
   
  }, [location.search]);
 
  
  let endPoint = "/api/game_plaza/search/game_list?pageSize="+pageSize+"&pageNumber="+currentPageNumber
  +"&searchedWord="+currentSearchedWord;




  useEffect(() => {
   // localStorage.setItem("currentPageNumber", parseInt(currentPageNumber));
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
  }, [currentPageNumber,currentSearchedWord]);

  return (
    <div className="main-container">
      <NavBar page="gamestore"/>
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
