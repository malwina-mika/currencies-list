import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const SearchResult = (props) => {
  console.log('SearchResult props ratesTable', props.currencyTable);
  return (
    <div className="test">
      <ul>
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