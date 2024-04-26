import React from 'react';
import styles from './Equipment.module.css';
import sprite from '../../../../img/svg/sprite.svg';

export const ItemEquipment = ({
  spriteImg,
  content,
  id,
  selected,
  onChange,
}) => {
  return (
    <li
      className={`${styles.item_equipment} ${selected ? styles.selected : ''}`}
      onClick={() => onChange(id)}
    >
      <label className={styles.checkbox_label}>
        <input
          type="checkbox"
          className={styles.checkbox_input}
          checked={selected}
          onChange={() => onChange(id)}
        />
        <svg className={styles.icon} width={32} height={32}>
          <use href={`${sprite}#${spriteImg}`}></use>
        </svg>
        <span className={styles.checkbox_content}>{content}</span>
      </label>
    </li>
  );
};
