import React from 'react';
import { ItemDetailsInfo } from './ItemDetailsInfo';
import styles from './DetailsInfo.module.css';
import sprite from '../../../img/svg/sprite.svg';
import { nanoid } from 'nanoid';

export const DetailsInfo = ({
  details,
  adults,
  engine,
  transmission,
  endIndex,
}) => {
  return (
    <ul className={styles.list_details}>
      <li className={styles.item_details}>
        <svg className={styles.icon} width={32} height={32}>
          <use href={`${sprite}#adults`}></use>
        </svg>
        {adults} adults
      </li>
      <ItemDetailsInfo>{transmission}</ItemDetailsInfo>
      <ItemDetailsInfo>{engine}</ItemDetailsInfo>
      {Object.keys(details)
        .slice(0, endIndex)
        .map(key => (
          <ItemDetailsInfo key={nanoid()}>
            {details[key] > 0 && key}
          </ItemDetailsInfo>
        ))}
    </ul>
  );
};
