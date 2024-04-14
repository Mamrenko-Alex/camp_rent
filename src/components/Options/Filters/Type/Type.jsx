import React from 'react';
import { ItemType } from './ItemType';
import styles from './Type.module.css';

const typesTrack = [
  { id: 1, name: 'Van' },
  { id: 2, name: 'Fully Integrated' },
  { id: 3, name: 'Alcove' },
];

export const Type = () => {
  return (
    <div className={styles.container_type}>
      <h2>Vehicle type</h2>
      <hr />
      <ul className={styles.list_type}>
        {typesTrack.map(({ id, name }) => (
          <ItemType key={id}>{name}</ItemType>
        ))}
      </ul>
    </div>
  );
};
