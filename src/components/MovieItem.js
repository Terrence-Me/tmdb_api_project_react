import React from 'react';
const posterUrl = 'https://www.themoviedb.org/t/p/w94_and_h141_bestv2';
const MovieItem = ({ movie }) => {
  return (
    <div>
      <img src={posterUrl + movie.poster_path} alt="" />
      {movie.title}
    </div>
  );
};

export default MovieItem;
