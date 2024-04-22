import { Advert } from 'components/Advert/Advert';
import { Header } from 'components/Header/Header';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="content_container">
        <Advert adverts={favorites} />
      </div>
    </>
  );
};

export default Favorites;
