import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
  return(
    <div>
	  <input 
	    value={props.chosen} 
	    onChange={props.search} placeholder="Search Currency"/>
    </div>
  );
};

SearchBar.propTypes = { 
  search: PropTypes.func, 
  chosen: PropTypes.string,
};

export default SearchBar;