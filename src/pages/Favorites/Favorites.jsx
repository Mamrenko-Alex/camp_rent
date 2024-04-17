import { Advert } from 'components/Advert/Advert';
import { Header } from 'components/Header/Header';
import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { favorites, loading, error, isLoadMore } = useSelector(
    state => state.advert
  );

  return (
    <>
      <Header />
      <div className="content_container">
        <Advert
          adverts={favorites}
          loading={loading}
          error={error}
          isLoadMore={isLoadMore}
          handleLoadMore={null}
        />
      </div>
    </>
  );
};

export default Favorites;
