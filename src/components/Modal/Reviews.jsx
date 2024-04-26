import React from 'react';
import styes from './Modal.module.css';
import { ReviewItem } from './ReviewItem';
import { nanoid } from 'nanoid';

export const Reviews = ({ reviews }) => {
  return (
    <div className={styes.reviewer_wrapper}>
      <ul className={styes.reviewev_list}>
        {reviews.map(reviewer => (
          <ReviewItem key={nanoid()} reviewer={reviewer} />
        ))}
      </ul>
    </div>
  );
};
