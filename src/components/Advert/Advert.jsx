import React from 'react';
import styles from './Advert.module.css';
import { Loader } from '../Loader/Loader';
import { ListAdvert } from './ListAdvert';

export const Advert = ({
  adverts,
  loading,
  error,
  isLoadMore,
  handleLoadMore,
}) => {
  return (
    <section className={styles.section_advert}>
      {loading && <Loader />}
      {error && <div>Error: {error}</div>}
      {adverts && <ListAdvert adverts={adverts} />}
      {isLoadMore && handleLoadMore && (
        <button className={styles.button_load_more} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};
