import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import Header from './Header';
import Loading from './Loading';

import '../styles/styles.css';

import tmdb from '../apis/tmdb';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [issearchResults, setIsSearchResults] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const onInitialLoad = async () => {
      const response = await tmdb.get('/movie/popular');
      setMovies(response.data.results);
      setIsInitialLoad(false);
      setIsLoading(false);
    };
    if (isInitialLoad) {
      onInitialLoad();
    }
  });

  const onSearchSubmit = async (searchedMovie) => {
    setIsLoading(true);
    const response = await tmdb.get('/search/movie', {
      params: {
        query: searchedMovie,
      },
    });

    setMovies(response.data.results);
    setIsLoading(false);
    setIsSearchResults(true);
  };

  return (
    <div className="ui container">
      <Header />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      {isLoading ? (
        <Loading />
      ) : (
        <MovieList
          movies={movies}
          issearchResults={issearchResults}
          isloading={isLoading}
        />
      )}
    </div>
  );
};

export default App;
