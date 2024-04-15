import React, { useEffect } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ toggleModal, offer }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [toggleModal]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  const handleCloseButtonClick = () => {
    toggleModal();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.name_wrapper}>
          <h2>{offer.name}</h2>
          <span
            onClick={handleCloseButtonClick}
            className={styles.button_close}
          >
            x
          </span>
        </div>
        <div className={styles.secondary_info}>
          <span>
            {offer.rating}({offer.reviews.length} Reviews)
          </span>
          <span>{offer.location}</span>
        </div>
        <h2>€{offer.price.toFixed(2)}</h2>
        <div className={styles.gallery_advert}>
          {offer.gallery.map(photo => (
            <img
              //   Not unique objects
              className={styles.photo_advert}
              src={photo}
              alt={offer.name}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={styles.description_advert}>{offer.description}</p>
        <nav>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <h2>Features</h2>
            </li>
            <li className={styles.nav_item}>
              <h2>Reviews</h2>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
    </div>
  );
};
