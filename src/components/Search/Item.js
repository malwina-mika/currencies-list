import React from 'react';
import PropTypes from 'prop-types';
 
const Item = (props) => {
  return(
    <li onClick={() => props.onclick(props.value, props.currencyTable)}>
      {props.value}
    </li>
  );
};

Item.propTypes = { 
  value: PropTypes.node, 
  currencyTable: PropTypes.array,
  onclick: PropTypes.func,
};

export default Item;