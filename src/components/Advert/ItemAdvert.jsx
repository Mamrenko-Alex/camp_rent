import React from 'react';
import { DetailsInfo } from './DetailsInfo/DetailsInfo';
import { Modal } from '../Modal/Modal';
import styles from './Advert.module.css';
import { useToggle } from 'components/my_hooks/useToggle';

export const ItemAdvert = ({ offer }) => {
  const { isModalOpen, open, toggle } = useToggle();

  return (
    <>
      <li className={styles.item_advert}>
        <div className={styles.photo_advert_wrapper}>
          <img
            className={styles.photo_advert}
            src={offer.gallery[0]}
            alt={offer.name}
            width={290}
            height={310}
          />
        </div>
        <div className={styles.info_advert_wrapper}>
          <div className={styles.primary_info}>
            <h2>{offer.name}</h2>
            <div className={styles.left_info_wrapper}>
              <h2>€{offer.price.toFixed(2)}</h2>
              <svg
                className={styles.button_like_advert}
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <g clip-path="url(#clip0_58_198)">
                  <path
                    d="M21.3401 4.60999C20.8294 4.099 20.2229 3.69364 19.5555 3.41708C18.888 3.14052 18.1726 2.99817 17.4501 2.99817C16.7276 2.99817 16.0122 3.14052 15.3448 3.41708C14.6773 3.69364 14.0709 4.099 13.5601 4.60999L12.5001 5.66999L11.4401 4.60999C10.4084 3.5783 9.00915 2.9987 7.55012 2.9987C6.09108 2.9987 4.69181 3.5783 3.66012 4.60999C2.62843 5.64169 2.04883 7.04096 2.04883 8.49999C2.04883 9.95903 2.62843 11.3583 3.66012 12.39L4.72012 13.45L12.5001 21.23L20.2801 13.45L21.3401 12.39C21.8511 11.8792 22.2565 11.2728 22.533 10.6053C22.8096 9.93789 22.9519 9.22248 22.9519 8.49999C22.9519 7.77751 22.8096 7.0621 22.533 6.39464C22.2565 5.72718 21.8511 5.12075 21.3401 4.60999Z"
                    stroke="#101828"
                    stroke-width="2.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_58_198">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.secondary_info}>
            <span>
              {offer.rating}({offer.reviews.length} Reviews)
            </span>
            <span>{offer.location}</span>
          </div>
          <p className={styles.description_advert}>{offer.description}...</p>
          <DetailsInfo
            details={offer.details}
            adults={offer.adults}
            engine={offer.engine}
            transmission={offer.transmission}
          />
          <button className={styles.button_show_more} onClick={open}>
            Show more
          </button>
        </div>
      </li>
      {isModalOpen && <Modal toggleModal={toggle} offer={offer} />}
    </>
  );
};
