import React from 'react';
import styles from './Advert.module.css';
import data from './tamplate.json';
import { ItemAdvert } from './ItemAdvert';

export const Advert = () => {
  return (
    <section className={styles.section_advert}>
      <ul className={styles.container_advert}>
        {data.data.map(obj => (
          <ItemAdvert key={obj.id} offer={obj} />
        ))}
      </ul>
      <button className={styles.button_load_more}>Load more</button>
    </section>
  );
};
