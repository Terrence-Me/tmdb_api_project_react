import React from 'react';

const SearchBar = () => {
  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form">
        <div className="field">
          <label htmlFor="input">Search Movies</label>
          <input type="text" id="input" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
