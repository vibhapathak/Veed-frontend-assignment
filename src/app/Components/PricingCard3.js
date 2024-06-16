// components/Pricecard_.js
"use client"
import React from 'react';
import styles from './PricingCard.module.css';
const SvgPath = '/correct.svg';
const Pricecard_ = () => {
  const handleGoBusinessClick = () => {
    window.location.href = 'https://www.veed.io/pricing';
  };

  return (
    <div className='dialogbox'>
      <div className={styles.pricingCard}>
        <h2>Business</h2>
        <p>For up to 5 people</p>
        <div className={styles.price}>
          <div className={styles.pricee}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amount}>1500</span>
            <span className={styles.savebutton}>SAVE 14%</span>
          </div>
          <div className={styles.billing}>Per user/month, billed yearly</div>
        </div>
        <button className={styles.btn} onClick={handleGoBusinessClick}>Go Business</button>
        <ul className={styles.features}>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />AI avatars 4 hr/yr</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Subtitles 134 hr/yr</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Translate to 50+ Languages</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Text to Speech 60 hr/yr</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />Customizable Video Templates</li>
          <li> <img src={SvgPath} alt="image" className={styles.icon} />4K Export Quality</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricecard_;
