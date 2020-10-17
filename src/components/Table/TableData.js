import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../Modal/ModalWrapper';

const TableData = (props) => {
  
  return props.currencyTable.map((column, index) => {
    const { currency, code, mid} = column; 
    return (
      <> 
        <tbody>
          <tr key={index}>
            <td>{currency}</td>
            <td>{code}</td>
            <td>{mid}</td>
          </tr>
        </tbody>
		    <ModalWrapper onclick={props.onclick} column={column}/> 
           
      </>
    );
  });
};

TableData.propTypes = { 
  onclick: PropTypes.func, 
  column: PropTypes.any,
};

export default TableData;