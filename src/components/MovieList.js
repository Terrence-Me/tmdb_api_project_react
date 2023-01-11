import React from 'react';

import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const renderedMovieList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return <div>{renderedMovieList}</div>;
};

export default MovieList;
