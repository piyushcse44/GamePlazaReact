import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import profileheader from "../../assets/images/profile-header.jpg";


const NavBar = () => {
  let curInput = "";
  const searchFunction = (event) => {
    event.preventDefault(); 
    curInput = event.target.searchKeyword.value;
    if(curInput.trim().length>0){
      console.log(curInput)
      
    }
   
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="index.html" className="logo">
                <img src={logo} alt="" />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Search Start ***** */}
              <div className="search-input">
                <form id="search" onSubmit={searchFunction}>
                  <input
                    type="text"
                    placeholder="Type Something"
                    id="searchText"
                    name="searchKeyword"
                  />
                 
                </form>
              </div>
              {/* ***** Search End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li>
                  <a href="index.html" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="browse.html">Browse</a>
                </li>
                <li>
                  <a href="details.html">Details</a>
                </li>
                <li>
                  <a href="streams.html">Streams</a>
                </li>
                <li>
                  <a href="profile.html">
                    Profile{" "}
                    <img src={profileheader} alt="" />
                  </a>
                </li>
              </ul>
              <a className="menu-trigger">
                <span>Menu</span>
              </a>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
