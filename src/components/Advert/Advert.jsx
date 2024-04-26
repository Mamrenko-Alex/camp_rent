import React from 'react';
import styles from './Advert.module.css';
import { Loader } from '../Loader/Loader';
import { ListAdvert } from './ListAdvert';
import { useSelector } from 'react-redux';
import { SmallLoader } from 'components/Loader/SmallLoader';
import {
  selectError,
  selectIsLoadMore,
  selectIsLoading,
} from '../../redux/selectors';

export const Advert = ({ adverts, handleLoadMore, isFavorites }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isLoadMore = useSelector(selectIsLoadMore);

  return (
    <section className={styles.section_advert}>
      {isLoading && adverts.length === 0 && <Loader />}
      {error && typeof error === 'string' && <div>Error: {error}</div>}
      {adverts && <ListAdvert adverts={adverts} />}
      {(isLoadMore && !isLoading && !isFavorites && (
        <button className={styles.button_load_more} onClick={handleLoadMore}>
          Load more
        </button>
      )) ||
        (isLoading && adverts.length && !isFavorites > 0 && <SmallLoader />)}
    </section>
  );
};
