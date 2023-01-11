import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const renderedMovieList = movies.map((movie) => {
    return <MovieItem key={movie.id} />;
  });

  return <div>{renderedMovieList}</div>;
};

export default MovieList;
