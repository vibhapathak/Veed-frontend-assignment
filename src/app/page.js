// pages/index.js

import SignupBar from './Components/SignupBar.js';
import PricingCard from './Components/PricingCard';
import PricingCard2 from './Components/PricingCard2.js';
import PricingCard3 from './Components/PricingCard3.js';
import PriceCard4 from './Components/PriceCard4.js';
import styles from './Components/container.module.css';

export default function Home() {
  return (
    <div className='page'>
        <SignupBar />
      <div className={styles.container}>
          <div className={styles.heading}>GREAT VIDEOS START WITH A PLAN</div>
          <div className={styles.trial_box}>
            <div className={styles.try_veed}>
              Try VEED with our <a href="https://www.veed.io/signup?source=pricing-free-plan">Free Plan</a>
            </div>
          </div>
          
          <div className={styles.different_pricing_cards}>
            <PricingCard2 />
            <PricingCard />
            <PricingCard3 />
            <PriceCard4 />
          </div>
          <div className={styles.tag}>Trusted by teams at</div>
        </div>
        </div>
    
  );
}
