import React from 'react';
import { ItemDetailsInfo } from './ItemDetailsInfo';
import styles from './DetailsInfo.module.css';

export const DetailsInfo = ({
  details,
  adults,
  engine,
  transmission,
  endIndex,
}) => {
  return (
    <ul className={styles.list_details}>
      <ItemDetailsInfo>{adults} adults</ItemDetailsInfo>
      <ItemDetailsInfo>{transmission}</ItemDetailsInfo>
      <ItemDetailsInfo>{engine}</ItemDetailsInfo>
      {Object.keys(details)
        .slice(0, endIndex)
        .map(key => (
          <ItemDetailsInfo key={key}>{details[key] > 0 && key}</ItemDetailsInfo>
        ))}
    </ul>
  );
};
