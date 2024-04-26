import React, { useState, useEffect } from 'react';
import styles from './Location.module.css';
import sprite from '../../../img/svg/sprite.svg';

export const Location = ({ location, setLocation }) => {
  const [placeholderText, setPlaceholderText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingSpeed = 100;

    const typeText = () => {
      if (index <= location.length) {
        setPlaceholderText(location.slice(0, index));
        index++;
        setTimeout(typeText, typingSpeed);
      }
    };
    typeText();
    return () => clearTimeout();
  }, [location]);

  return (
    <div className={styles.container_location}>
      <label className={styles.label_location} htmlFor="location_input">
        Location
      </label>
      <div className={styles.input_wrapper}>
        <input
          className={styles.input_location}
          type="text"
          id="location_input"
          name="location"
          value={location === 'Put your city...' ? '' : location}
          onChange={e => setLocation(e.target.value)}
          placeholder={placeholderText}
        />
        <svg className={styles.logo_location}>
          <use href={`${sprite}#map-pin`}></use>
        </svg>
      </div>
    </div>
  );
};
