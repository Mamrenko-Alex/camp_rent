import React, { useEffect, useState } from 'react';
import styles from './Advert.module.css';
import { Loader } from '../Loader/Loader';
import { ListAdvert } from './ListAdvert';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvert } from '../../redux/operations';

export const Advert = ({ adverts }) => {
  const dispatch = useDispatch();
  const { loading, error, isLoadMore } = useSelector(state => state.advert);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdvert(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <section className={styles.section_advert}>
      {loading && <Loader />}
      {error && typeof error === 'string' && <div>Error: {error}</div>}
      {adverts && <ListAdvert adverts={adverts} />}
      {isLoadMore && !loading && (
        <button className={styles.button_load_more} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};
