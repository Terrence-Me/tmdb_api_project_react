import React from 'react';
import logo from '../images/TMDB.png';

const Header = () => {
  return (
    <header>
      <div>
        <div className="header-content">
          <a href="index.html">
            <img src={logo} alt="The Movie Database (TMDB) Logo" />
          </a>
          <h3>
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
