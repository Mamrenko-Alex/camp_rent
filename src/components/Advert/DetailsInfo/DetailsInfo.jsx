import React from 'react';
import { ItemDetailsInfo } from './ItemDetailsInfo';
import styles from './DetailsInfo.module.css';

export const DetailsInfo = ({ details, adults, engine, transmission }) => {
  return (
    <ul className={styles.list_details}>
      <ItemDetailsInfo>{adults} adults</ItemDetailsInfo>
      <ItemDetailsInfo>{transmission}</ItemDetailsInfo>
      <ItemDetailsInfo>{engine}</ItemDetailsInfo>
      {Object.keys(details)
        .slice(0, 3)
        .map(key => (
          <ItemDetailsInfo key={key}>{details[key] > 0 && key}</ItemDetailsInfo>
        ))}
    </ul>
  );
};
