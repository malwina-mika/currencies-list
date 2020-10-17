import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.scss';
 
const Item = (props) => {
  return(
    <li 
      onClick={() => props.onclick(props.value, props.currencyTable)}
      className={styles.searchItem}>
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