import React from 'react';
import styles from './DetailsInfo.module.css';

export const ItemDetailsInfo = ({ children }) => {
  return (
    <li className={styles.item_details}>
      <p className={styles.header_detail}>{children}</p>
    </li>
  );
};
