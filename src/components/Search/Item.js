import React from 'react';
import PropTypes from 'prop-types';
 
const Item = (props) => {
  return(
    <li>
      {props.value}
    </li>
  );
};

Item.propTypes = { 
  value: PropTypes.node, 
};

export default Item;