import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import styles from './Search.scss';

const SearchResult = (props) => {
  return (
    <div className={styles.relative}>
      <ul className={styles.searchListWrapper}>
        {props.data.map(function(value) {
		  return <Item 
		    key={value} 
		    value={value} 
		    currencyTable={props.currencyTable}
		    onclick={props.onclick}/>;
        })}
      </ul>
    </div>
  );
  
};

SearchResult.propTypes = { 
  currencyTable: PropTypes.array, 
  data: PropTypes.array, 
  onclick: PropTypes.func,
};

export default SearchResult;