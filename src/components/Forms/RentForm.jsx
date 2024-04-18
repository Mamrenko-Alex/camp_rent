import React from 'react';
import styles from './RentForm.module.css';

export const RentForm = () => {
  return (
    <div className={styles.rent_form_container}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={styles.rent_form}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className={styles.rent_form_input}
          value=""
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          className={styles.rent_form_input}
          value=""
        />
        <input
          name="booking_date"
          type="text"
          placeholder="Booking date"
          className={styles.rent_form_input}
          value=""
        />
        <textarea
          name="сomment"
          placeholder="Comment"
          className={styles.rent_form_texarea}
        ></textarea>
        <button type="submit" className={styles.rent_form_button}>
          Send
        </button>
      </form>
    </div>
  );
};
