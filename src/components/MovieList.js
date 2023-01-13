import React from 'react';

import MovieItem from './MovieItem';
import NoSearchResults from './NoSearchResults';

import '../styles/styles.css';

const MovieList = ({ movies, issearchResults, isLoading }) => {
  console.log(movies);
  let renderedMovieList =
    movies.length > 0 ? (
      movies.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} />;
      })
    ) : (
      <NoSearchResults />
    );

  return (
    <div className="ui">
      {issearchResults ? <h2>Search Results</h2> : <h2>What's Popular</h2>}
      {!isLoading && renderedMovieList}
    </div>
  );
};

export default MovieList;
