import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return(
    <div>
      <input onChange={props.search} placeholder="Search Currency"/>
    </div>
  );
};

SearchBar.propTypes = { 
  search: PropTypes.func, 
};

export default SearchBar;