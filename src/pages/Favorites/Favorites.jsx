import { Advert } from 'components/Advert/Advert';
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favorites, loading, error, isLoadMore } = useSelector(
    state => state.advert
  );

  return (
    <>
      <Advert
        adverts={favorites}
        loading={loading}
        error={error}
        isLoadMore={isLoadMore}
        handleLoadMore={null}
      />
    </>
  );
};

export default Favorites;
