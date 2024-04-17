import { Advert } from 'components/Advert/Advert';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvert } from '../../redux/operations';
import { Options } from 'components/Options/Options';

const Catalog = () => {
  const dispatch = useDispatch();
  const { advert, loading, error, isLoadMore } = useSelector(
    state => state.advert
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdvert(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Options />
      <Advert
        adverts={advert}
        loading={loading}
        error={error}
        isLoadMore={isLoadMore}
        handleLoadMore={handleLoadMore}
      />
    </>
  );
};

export default Catalog;
