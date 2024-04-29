import React from "react";
import { Link } from "react-router-dom";
import MostPopularCard from "../cards/mostPopular/MostPopularCard";
import gameinfo from "../../assets/json/gameinfo.json";
import "./mostPopular.css";

const MostPopular = ({
  gamelist,
  currentPage,
  currentPageNumber,
  setCurrentPageNumber,
  totalPages,
}) => {

let paginationButtons = document.querySelectorAll('.paginationButton a');

let currentPageNum = parseInt(currentPageNumber);

paginationButtons.forEach(button => {

  let pageNum = parseInt(button.innerText);

  if (pageNum === currentPageNum) {
    button.style.backgroundColor = "white";
  } else {
    button.style.backgroundColor = "#e75e8d";
  }
});



  return (
    <div className="most-popular" id ="most-popular-start">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>
              <em>Most Popular</em> Right Now
            </h4>
          </div>
          <div className="row">
            {gamelist
              ? gamelist.map((game) => (
                  <MostPopularCard key={game?.gameId} game={game} />
                ))
              : gameinfo.map((game) => (
                  <MostPopularCard key={game?.gameId} game={game} />
                ))}

            {currentPage == "home" ? (
              <div className="col-lg-12">
                <div className="main-button">
                  <Link to="gamestore">Discover More</Link>
                </div>
              </div>
            ) : (
              <div className="col-lg-12">
                <div className="row">
                  {currentPageNumber > 1 ? (
                    <div className="main-button col-lg-3 paginationPrevButton">
                      <a
                        onClick={() =>
                          setCurrentPageNumber(currentPageNumber - 1)
                        }
                      >
                        Prev
                      </a>
                    </div>
                  ) : (
                    <div className="main-button col-lg-3"></div>
                  )}

                  {totalPages >= 5 ? (
                    <>
                      {currentPageNumber >= 3 && totalPages > 5 ? (
                        <>
                          <div className="main-button col-lg-1 paginationButton">
                            <a 
                             onClick={() =>
                              setCurrentPageNumber(1)
                            }
                            >1</a>
                          </div>
                          <div
                            className="main-button col-lg-1 paginationButton"
                            style={{ cursor: "not-allowed " }}
                          >
                            <a>...</a>
                          </div>
                        </>
                      ) : (
                        <div className="main-button col-lg-1 paginationButton">
                          <a
                           onClick={() =>
                            setCurrentPageNumber(1)
                          }>1</a>
                        </div>
                      )}

                      {currentPageNumber != 1 ? (
                        currentPageNumber < totalPages - 3 ? (
                          <>
                        
                            <div className="main-button col-lg-1 paginationButton">
                              <a  onClick={() =>
                          setCurrentPageNumber(currentPageNumber)
                        }>{currentPageNumber}</a>
                            </div>

                            <div className="main-button col-lg-1 paginationButton">
                              <a
                               onClick={() =>
                                setCurrentPageNumber(currentPageNumber + 1)
                              }>{currentPageNumber + 1}</a>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="main-button col-lg-1 paginationButton">
                              <a
                               onClick={() =>
                                setCurrentPageNumber(totalPages-3)
                              }>{totalPages - 3}</a>
                            </div>

                            <div className="main-button col-lg-1 paginationButton">
                              <a
                               onClick={() =>
                                setCurrentPageNumber(totalPages - 2)
                              }>{totalPages - 2}</a>
                            </div>
                          </>
                        )
                      ) : (
                        <>
                          <div className="main-button col-lg-1 paginationButton">
                            <a
                             onClick={() =>
                              setCurrentPageNumber(currentPageNumber + 1)
                            }>{currentPageNumber + 1}</a>
                          </div>

                          <div className="main-button col-lg-1 paginationButton">
                            <a
                             onClick={() =>
                              setCurrentPageNumber(currentPageNumber +2)
                            }>{currentPageNumber + 2}</a>
                          </div>
                        </>
                      )}

                      {currentPageNumber < totalPages - 3 ? (
                        <>
                          <div
                            className="main-button col-lg-1 paginationButton"
                            style={{ cursor: "not-allowed " }}
                          >
                            <a>...</a>
                          </div>
                          <div className="main-button col-lg-1 paginationButton">
                            <a
                             onClick={() =>
                              setCurrentPageNumber(totalPages)
                            }>{totalPages}</a>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="main-button col-lg-1 paginationButton">
                            <a
                             onClick={() =>
                              setCurrentPageNumber(totalPages - 1)
                            }>{totalPages - 1}</a>
                          </div>
                          <div className="main-button col-lg-1 paginationButton">
                            <a
                             onClick={() =>
                              setCurrentPageNumber(totalPages)
                            }>{totalPages}</a>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {Array.from({ length: totalPages }, (_, index) => (
                        <div
                          className="main-button col-lg-1 paginationButton"
                          key={index}
                        >
                          <a
                           onClick={() =>
                            setCurrentPageNumber(index+1)
                          }>{index + 1}</a>
                        </div>
                      ))}
                    </>
                  )}

                  {currentPageNumber < totalPages ? (
                    <div className="main-button col-lg-3 paginationNextButton">
                      <a
                        onClick={() => {
                          setCurrentPageNumber(currentPageNumber + 1);
                        }}
                      >
                        Next
                      </a>
                    </div>
                  ) : (
                    <div className="main-button col-lg-3 "></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
