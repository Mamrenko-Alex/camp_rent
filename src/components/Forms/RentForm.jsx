import React, { useState } from 'react';
import styles from './RentForm.module.css';

export const RentForm = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    booking_date: '',
    comment: '',
  });
  const { name, email, booking_date, comment } = fields;

  const handleChange = event => {
    const { name, value } = event.target;
    setFields(prevField => ({ ...prevField, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!booking_date.trim()) {
      errors.booking_date = 'Booking date is required';
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(booking_date);
      if (selectedDate <= currentDate) {
        errors.booking_date = 'Booking date must be in the future';
      }
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, do something (e.g., submit form)
      console.log('Form is valid');
      console.log(fields);
      setFields({
        name: '',
        email: '',
        booking_date: '',
        comment: '',
      });
    } else {
      // Form is invalid, display errors
      console.log('Form is invalid', errors);
    }
  };

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
          value={name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className={styles.rent_form_input}
          value={email}
          onChange={handleChange}
        />
        <input
          name="booking_date"
          type="date"
          placeholder="Booking date"
          className={styles.rent_form_input}
          value={booking_date}
          onChange={handleChange}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          value={comment}
          className={styles.rent_form_texarea}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className={styles.rent_form_button}
          onClick={handleSubmit}
        >
          Send
        </button>
      </form>
    </div>
  );
};
