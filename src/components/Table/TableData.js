import React from 'react';

const TableData = (props) => {
  return props.currencyTable.map((column, index) => {
    const { currency, code, mid} = column; 
    return (
      <>
        <tr  key={index}>
          <td>{currency}</td>
          <td>{code}</td>
          <td>{mid}</td>
        </tr>
      </>
    );
  });
};

export default TableData;