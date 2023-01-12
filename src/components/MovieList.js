import React from 'react';

import MovieItem from './MovieItem';
import NoSearchResults from './NoSearchResults';

import '../styles/styles.css';

const MovieList = ({ movies }) => {
  const renderedMovieList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });

  return (
    <div className="ui">
      {movies.length > 0 ? <div>{renderedMovieList}</div> : <NoSearchResults />}
      {/* <div>{renderedMovieList}</div> */}
    </div>
  );
};

export default MovieList;
