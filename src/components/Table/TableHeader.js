import React from 'react';
import styles from './Table.scss';
 
const TableHeader = () => {
  let header = ['nr','currency', 'code', 'mid', 'action'];
  return header.map((key, index) => {
    return <th className={styles.tableHead} key={index}>{key.toUpperCase()}</th>;
  });
};

export default TableHeader;