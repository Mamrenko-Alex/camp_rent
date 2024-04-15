import React, { useEffect } from 'react';
import styles from './Advert.module.css';
import { ItemAdvert } from './ItemAdvert';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvert } from '../../redux/operations';

export const Advert = () => {
  const dispatch = useDispatch();
  const { advert, loading, error } = useSelector(state => state.advert);

  useEffect(() => {
    dispatch(fetchAdvert());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={styles.section_advert}>
      <ul className={styles.container_advert}>
        {advert.slice(0, 4).map(obj => (
          <ItemAdvert key={obj.id} offer={obj} />
        ))}
      </ul>
      <button className={styles.button_load_more}>Load more</button>
    </section>
  );
};
