import { Advert } from 'components/Advert/Advert';
import React, { useEffect, useState } from 'react';
import { Options } from 'components/Options/Options';
import { Header } from 'components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvert } from '../../redux/selectors';
import { fetchAdvert } from '../../redux/operations';
import { clearAdverts } from '../../redux/slices';

const Catalog = () => {
  const adverts = useSelector(selectAdvert);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(clearAdverts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAdvert({ page, limit: 4 }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Header />
      <div className="content_container">
        <Options />
        <Advert
          adverts={adverts}
          handleLoadMore={handleLoadMore}
          isFavorites={false}
        />
      </div>
    </>
  );
};

export default Catalog;
