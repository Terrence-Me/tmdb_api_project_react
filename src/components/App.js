import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Header from './Header';

import '../styles/styles.css';

import tmdb from '../apis/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [issearchResults, setIsSearchResults] = useState(false);

  useEffect(() => {
    const onInitialLoad = async () => {
      const response = await tmdb.get('/movie/popular');
      setMovies(response.data.results);
      setIsInitialLoad(false);
    };
    if (isInitialLoad) {
      onInitialLoad();
    }
  });

  const onSearchSubmit = async (searchedMovie) => {
    const response = await tmdb.get('/search/movie', {
      params: {
        query: searchedMovie,
      },
    });

    setMovies(response.data.results);
    setIsSearchResults(true);
  };

  return (
    <div className="ui container">
      <Header />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <MovieList movies={movies} issearchResults={issearchResults} />
    </div>
  );
};

export default App;
