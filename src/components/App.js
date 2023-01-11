import React, { useState } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Header from './Header';

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
    console.log(response.data.results);
  };

  return (
    <div className="ui container">
      <Header />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
