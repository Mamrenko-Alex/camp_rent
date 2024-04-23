import React from 'react';
import { DetailsInfo } from './DetailsInfo/DetailsInfo';
import { Modal } from '../Modal/Modal';
import styles from './Advert.module.css';
import { useToggle } from 'components/my_hooks/useToggle';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slices';
import { selectFavorites } from '../../redux/selectors';
import sprite from '../../img/svg/sprite.svg';

export const ItemAdvert = ({ offer }) => {
  const { isModalOpen, open, toggle } = useToggle();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isLiked = advertId => {
    return favorites.some(({ id }) => id === advertId);
  };

  const handleAddToFavorites = advert => {
    if (favorites.findIndex(({ id }) => id === advert.id) !== -1) {
      dispatch(removeFromFavorites(advert.id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  const handleMouseEnter = id => {
    if (isLiked(id)) {
      const icon = document.querySelector(`#image_${id}`);
      if (icon) {
        icon.setAttribute('href', `${sprite}#unlike`);
      }
    } else {
      const icon = document.querySelector(`#image_${id}`);
      if (icon) {
        icon.setAttribute('href', `${sprite}#like`);
      }
    }
  };

  const handleMouseLeave = id => {
    if (isLiked(id)) {
      const icon = document.querySelector(`#image_${id}`);
      if (icon) {
        isLiked(id) && icon.setAttribute('href', `${sprite}#like`);
      }
    }
  };

  return (
    <>
      <li className={styles.item_advert}>
        <div className={styles.photo_advert_wrapper}>
          <img
            className={styles.photo_advert}
            src={offer.gallery[0]}
            alt={offer.name}
            width={290}
            height={310}
          />
        </div>
        <div className={styles.info_advert_wrapper}>
          <div className={styles.primary_info}>
            <h2>{offer.name}</h2>
            <div className={styles.left_info_wrapper}>
              <h2>€{offer.price.toFixed(2)}</h2>
              <svg
                onClick={() => handleAddToFavorites(offer)}
                className={`${styles.icon}  ${
                  isLiked(offer.id) && styles.liked
                }`}
                onMouseEnter={() => handleMouseEnter(offer.id)}
                onMouseLeave={() => handleMouseLeave(offer.id)}
              >
                <use id={`image_${offer.id}`} href={`${sprite}#like`}></use>
              </svg>
            </div>
          </div>
          <div className={styles.secondary_info}>
            <span>
              {offer.rating}({offer.reviews.length} Reviews)
            </span>
            <span>{offer.location}</span>
          </div>
          <p className={styles.description_advert}>{offer.description}...</p>
          <div className={styles.detail_info_wrapper}>
            <DetailsInfo
              details={offer.details}
              adults={offer.adults}
              engine={offer.engine}
              transmission={offer.transmission}
              endIndex={3}
            />
          </div>
          <button className={styles.button_show_more} onClick={open}>
            Show more
          </button>
        </div>
      </li>
      {isModalOpen && <Modal toggleModal={toggle} offer={offer} />}
    </>
  );
};
