import React from 'react';

import PercentBar from './PercentBar';

import '../styles/styles.css';

const posterUrl = 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2';
const searchMovieBaseUrl = 'https://www.themoviedb.org/movie/';

const MovieItem = ({ movie }) => {
  return (
    <div className="ui link cards">
      <div className="card" id="card-flex">
        <div className="image">
          <a href={searchMovieBaseUrl + movie.id}>
            <img src={posterUrl + movie.poster_path} alt={movie.title} />
          </a>
        </div>
        <div className="content" id="content-container">
          <div className="content-display">
            <a href={searchMovieBaseUrl + movie.id}>
              <div className="header">
                <h2 className="title">{movie.title}</h2>
              </div>
            </a>
            <span>{movie.release_date}</span>
          </div>
          <div className="description" id="description-text">
            <p>{movie.overview}</p>
          </div>
          <PercentBar rating={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
