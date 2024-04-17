import React from 'react';
import styles from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
import { Header } from 'components/Header/Header';

const Home = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="content_container">
        {' '}
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Discover Your Next Adventure with CampingTruck Rentals
          </h1>
          <div className={styles.home_content_wrapper}>
            <img
              className={styles.image}
              src="https://img.freepik.com/premium-vector/premium-overland-camper-truck-illustration-vector-isolated_289688-389.jpg"
              alt="logo"
              width={313}
              height={313}
            />
            <p className={styles.paragraph}>
              At CampingTruck Rentals, we believe that every journey is an
              opportunity for adventure. Whether you're craving the solitude of
              the wilderness, the thrill of the open road, or the tranquility of
              a beachside retreat, our camping trucks are your ticket to
              exploration. Experience the freedom to roam wherever your heart
              desires, with all the comforts of home right at your fingertips.
              Our fully-equipped camping trucks are designed to make your
              outdoor experience unforgettable, offering everything you need for
              a seamless and enjoyable trip. From cozy sleeping quarters to
              convenient kitchenette facilities, our trucks are your home away
              from home. Pack your sense of adventure and let the open road
              guide you to new discoveries. Ready to start your journey? Click
              below to explore our fleet and book your camping truck today!
            </p>
          </div>
          <div className={styles.button_start_wrapper}>
            <Link
              to={`/catalog`}
              state={{ from: location }}
              className={styles.button_start}
            >
              Start Your Adventure
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
