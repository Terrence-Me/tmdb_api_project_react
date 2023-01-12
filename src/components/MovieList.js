import React from 'react';

import MovieItem from './MovieItem';
import NoSearchResults from './NoSearchResults';

import '../styles/styles.css';

const MovieList = ({ movies, issearchResults }) => {
  const renderedMovieList = movies.map((movie) => {
    return <MovieItem key={movie.id} movie={movie} />;
  });
  // console.log(isInitialLoad);

  return (
    <div className="ui">
      {!issearchResults ? <h2>What's Popular</h2> : <h2>Search Results</h2>}
      {movies.length > 0 ? <div>{renderedMovieList}</div> : <NoSearchResults />}
    </div>
  );
};

export default MovieList;
