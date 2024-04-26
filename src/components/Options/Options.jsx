import React, { useState } from 'react';
import { Location } from './Location/Location';
import styles from './Options.module.css';
import { Filters } from './Filters/Filters';

export const Options = () => {
  const [location, setLocation] = useState('Put your city...');

  return (
    <div className={styles.container_options}>
      <Location location={location} setLocation={setLocation} />
      <Filters />
      <button className={styles.button_search}>Search</button>
    </div>
  );
};
