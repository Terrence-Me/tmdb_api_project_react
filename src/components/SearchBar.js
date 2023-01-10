import React from 'react';
import { Icon, Input } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <div className="ui segment search-bar">
      <form action="" className="ui form">
        <div className="field">
          <label htmlFor="input">Search Movies</label>
          <Input
            icon={<Icon name="search" inverted circular link />}
            placeholder="Search..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
