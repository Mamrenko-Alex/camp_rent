import React, { useState } from 'react';
import styles from './Type.module.css';
import { ItemType } from './ItemType';
import { nanoid } from 'nanoid';

const typesTrack = [
  { id: 1, name: 'Van', spriteImg: 'van' },
  { id: 2, name: 'Fully Integrated', spriteImg: 'fully_integrated' },
  { id: 3, name: 'Alcove', spriteImg: 'alcove' },
];

export const Type = () => {
  const [selectedType, setSelectedType] = useState([]);

  const handleTypeChange = id => {
    if (selectedType.includes(id)) {
      setSelectedType(selectedType.filter(item => item !== id));
    } else {
      setSelectedType([...selectedType, id]);
    }
  };

  return (
    <div className={styles.container_type}>
      <h2>Vehicle type</h2>
      <hr />
      <ul className={styles.list_type}>
        {typesTrack.map(({ spriteImg, name, id }) => (
          <ItemType
            key={nanoid()}
            spriteImg={spriteImg}
            id={id}
            content={name}
            selected={selectedType.includes(id)}
            onChange={handleTypeChange}
          />
        ))}
      </ul>
    </div>
  );
};
<svg
  className={styles.icon_type}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 40 28"
  fill="none"
></svg>;
