import React from 'react';

import SearchBar from './SearchBar';

import tmdb from '../apis/tmdb';

const App = () => {
  const onSearchSubmit = async (searchedMovie) => {
    const response = await tmdb.get('/search/movie', {
      params: {
        query: searchedMovie,
      },
    });

    console.log(response.data);
  };

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
