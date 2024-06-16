// components/PricingCard.js
"use client"
import React from 'react';
import styles from './PricingCard.module.css';
const SvgPath = '/correct.svg';
const PricingCard = () => {
  const handleGoProClick = () => {
    window.location.href = 'https://www.veed.io/pricing';
  };

  return (
    <div className={styles.pricingCard}>
      <span className={styles.recommended}>
        RECOMMENDED
      </span>
      <h2>Pro</h2>
      <p>For pro video creation</p>
      <div className={styles.price}>
        <div className={styles.pricee}>
          <span className={styles.currency}>₹</span>
          <span className={styles.amount}>599</span>
          <span className={styles.savebutton}>SAVE 21%</span>
        </div>
        <div className={styles.billing}>Per user/month, billed yearly</div>
      </div>
      <div className={styles.align_button}>
        <button className={styles.btn} onClick={handleGoProClick}>Go Pro</button>
      </div>
      <ul className={styles.features}>
        <li> <img src={SvgPath} alt="image" className={styles.icon} />Subtitles 24 hr/yr</li>
        <li> <img src={SvgPath} alt="image" className={styles.icon} /> Audio</li>
        <li> <img src={SvgPath} alt="image" className={styles.icon} />Eye Contact Correction</li>
        <li> <img src={SvgPath} alt="image" className={styles.icon} />Stock Audio & Video Library</li>
        <li> <img src={SvgPath} alt="image" className={styles.icon} />Download Subtitles</li>
      </ul>
    </div>
  );
};

export default PricingCard;
