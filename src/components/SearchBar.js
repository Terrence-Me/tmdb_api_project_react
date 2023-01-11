import React, { useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';

const SearchBar = ({ onSearchSubmit }) => {
  const [searchedMovie, setSearchedMovie] = useState('');

  const onInputChange = (event) => {
    setSearchedMovie(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onSearchSubmit(searchedMovie);
  };

  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="input">Search Movies</label>
          <Input
            icon={<Icon name="search" inverted circular link />}
            placeholder="Search..."
            value={searchedMovie}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
