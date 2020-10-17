import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';

const SearchBar = (props) => {
  return(
    <div>
    <input 
      className={styles.searchInput}
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