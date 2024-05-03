import React from 'react';
import styles from './Type.module.css';
import sprite from '../../../../img/svg/sprite.svg';

export const ItemType = ({ spriteImg, content, id, selected, onChange }) => {
  return (
    <li
      className={`${styles.item_type} ${selected ? styles.selected : ''}`}
      onClick={() => onChange(id)}
    >
      <label className={styles.checkbox_label}>
        <input
          type="radio"
          className={styles.checkbox_input}
          checked={selected}
          onChange={() => onChange(id)}
        />
        <svg className={styles.icon_type}>
          <use href={`${sprite}#${spriteImg}`}></use>
        </svg>
        <span className="list_item">{content}</span>
      </label>
    </li>
  );
};
