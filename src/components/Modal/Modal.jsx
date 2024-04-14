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
        <div>
          <h2>{offer.name}</h2>
          <span onClick={handleCloseButtonClick}>X</span>
        </div>
        <div className={styles.secondary_info}>
          <span>
            {offer.rating}({offer.reviews.length} Reviews)
          </span>
          <span>{offer.location}</span>
        </div>
        <div>
          <h2>€{offer.price.toFixed(2)}</h2>
        </div>
        <div>
          {offer.gallery.map(photo => (
            <img
              //   Not unique objects
              src={photo}
              alt={offer.name}
              width={290}
              height={310}
            />
          ))}
        </div>
        <div>
          <p>{offer.description}</p>
        </div>
        <nav>
          <ul>
            <li>
              <h2>Features</h2>
            </li>
            <li>
              <h2>Reviews</h2>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
