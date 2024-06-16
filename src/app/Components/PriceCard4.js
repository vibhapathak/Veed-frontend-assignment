// components/PricingCard.js
"use client"
import React from 'react';
import styles from './PricingCard.module.css';
const SvgPath = '/correct.svg';
const Pricecard_ = () => {
  const handleBookDemoClick = () => {
    window.location.href = 'https://www.veed.io/contact';
  };

  return (
    <div className='dialogbox'>
      <div className={styles.pricingCard}>
        <h2>Enterprise</h2>
        <p>Scale video across your team</p>
        <div className={styles.price}>
          <div className={styles.pricee}>
            <span className={styles.currency}></span>
            <span className={styles.amount}>Let's Talk</span>
          </div>
          <div className={styles.billing}>Custom Pricing</div>
        </div>
        <button className={styles.btn} onClick={handleBookDemoClick}>Book A Demo</button>
        <ul className={styles.features}>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Personalized AI avatars</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Brand assets & templates</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Multiple workspaces</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Custom usage limits</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Creator training</li>
          <li><img src={SvgPath} alt="image" className={styles.icon}/>Account manager</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricecard_;
