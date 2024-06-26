import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import profileheader from "../../assets/images/profile-header.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BiColor } from "react-icons/bi";


const NavBar = ({page}) => {



console.log(page)
  const navigate = useNavigate();

  const searchFunction = (event) => {
    event.preventDefault();
    const curInput = event.target.searchKeyword.value.trim();
      if(curInput.length >0)
        navigate("/gameStore?curInput="+curInput); 
    
  };

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <Link to="/" className="logo">
                <img src={logo} alt="" />
                </Link>
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
                <Link to="/"> 
                <div style={{ color: page === 'home' ? '#e75e8d' : '#666' }}>Home</div>
                </Link>
                </li>
                <li>
                  <Link to="/gamestore">
                  <div style={{ color: page === 'gamestore' ? '#e75e8d' : '#666' }}>Gamestore</div>
                    </Link>
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
