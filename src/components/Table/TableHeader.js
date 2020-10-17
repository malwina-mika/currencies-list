import React from 'react';
 
const TableHeader = () => {
  let header = ['currency', 'code', 'mid'];
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export default TableHeader;