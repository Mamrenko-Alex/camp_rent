import { Advert } from 'components/Advert/Advert';
import React from 'react';
import { Options } from 'components/Options/Options';
import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';

const Catalog = () => {
  const { advert } = useSelector(state => state.advert);

  return (
    <>
      <Header />
      <div className="content_container">
        <Options />
        <Advert adverts={advert} />
      </div>
    </>
  );
};

export default Catalog;
