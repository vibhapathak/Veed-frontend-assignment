// components/Pricecard.js
"use client"
import React from 'react';
import styles from './PricingCard.module.css';
const SvgPath = '/correct.svg';
const Pricecard = () => {
  const handleGoBasicClick = () => {
    window.location.href = 'https://www.veed.io/pricing';
  };

  return (
    <div className='dialogbox'>
      <div className={styles.pricingCard}>
        <h2>Basic</h2>
        <p>Ideal starter plan</p>
        <div className={styles.price}>
          <div className={styles.pricee}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amount}>290.67</span>
            <span className={styles.savebutton}>SAVE 36%</span>
          </div>
          <div className={styles.billing}>Per user/month, billed yearly</div>
        </div>
        <button className={styles.btn} onClick={handleGoBasicClick}>Go Basic</button>
        <ul className={styles.features}>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Remove watermark</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Subtitles 12 hr/yr</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />No upload size limit</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Full HD 1080p exports</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricecard;
