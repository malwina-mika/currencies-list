import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../Modal/ModalWrapper';
import styles from './Table.scss';

const TableData = (props) => {
  
  return props.currencyTable.map((column, index) => {
    const { currency, code, mid} = column; 
    return (
      <> 
        <tbody className={styles.tableBody} >
          <tr key={index}>
            <td>{currency}</td>
            <td>{code}</td>
            <td>{mid}</td>
            <td><ModalWrapper onclick={props.onclick} column={column}/> </td>
          </tr>
        </tbody>
      </>
    );
  });
};

TableData.propTypes = { 
  onclick: PropTypes.func, 
  column: PropTypes.any,
};

export default TableData;