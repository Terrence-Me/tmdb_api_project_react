import React from 'react';
// import classes from './MovieItem.module.css';

import '../styles/styles.css';

const posterUrl = 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2';
const searchMovieBaseUrl = 'https://www.themoviedb.org/movie/';

const MovieItem = ({ movie }) => {
  return (
    <div className="ui link cards">
      <div className="card" id="card-flex">
        <div className="image">
          <a href={searchMovieBaseUrl + movie.id}>
            <img src={posterUrl + movie.poster_path} alt="" />
          </a>
        </div>
        <div className="content">
          <a href={searchMovieBaseUrl + movie.id}>
            <div className="header">{movie.title}</div>
          </a>
          <div className="description">
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
