import React, { useState } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

import tmdb from '../apis/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);

  const onSearchSubmit = async (searchedMovie) => {
    const response = await tmdb.get('/search/movie', {
      params: {
        query: searchedMovie,
      },
    });

    setMovies(response.data.results);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
