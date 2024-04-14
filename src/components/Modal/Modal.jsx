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

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>hello modal</div>
    </div>
  );
};
