import React from 'react';
import styles from './Advert.module.css';
import { ItemAdvert } from './ItemAdvert';
import { nanoid } from 'nanoid';

export const ListAdvert = ({ adverts }) => {
  return (
    <ul className={styles.container_advert}>
      {adverts.map(obj => (
        <ItemAdvert key={nanoid()} offer={obj} />
      ))}
    </ul>
  );
};
