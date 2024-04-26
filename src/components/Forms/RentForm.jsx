import React, { useState } from 'react';
import styles from './RentForm.module.css';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import sprite from '../../img/svg/sprite.svg';

export const RentForm = ({ offer, toggleModal }) => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    comment: '',
  });
  const { name, email, comment } = fields;

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    setFields(prevField => ({ ...prevField, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
      toast.error('Name is required');
      return;
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
      toast.error('Email is required');
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      toast.error('Email is invalid');
      return;
    }

    if (!startDate || !endDate) {
      errors.startDate = 'Booking date is required';
      toast.error('Booking date is required');
      return;
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(startDate);
      if (selectedDate <= currentDate) {
        errors.startDate = 'Booking date must be in the future';
        toast.error('Booking date must be in the future');
        return;
      }
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, do something (e.g., post on backend)
      toast.success(
        `The '${offer.name}' has been booked for the date of ${
          startDate.toISOString().split('T')[0]
        } to ${endDate.toISOString().split('T')[0]}.`
      );
      toggleModal();
      setFields({
        name: '',
        email: '',
        comment: '',
      });
      setDateRange([null, null]);
    } else {
      toast.error('Form is invalid, try again');
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
        <div className={styles.input_date_container}>
          <DatePicker
            formatWeekDay={nameOfDay => nameOfDay.slice(0, 3)}
            onChange={update => {
              setDateRange(update);
            }}
            className={`${styles.rent_form_input} ${styles.date_input}`}
            minDate={new Date()}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
          />
          <svg className={styles.icon_calendar} width={32} height={32}>
            <use href={`${sprite}#calendar`}></use>
          </svg>
        </div>
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
