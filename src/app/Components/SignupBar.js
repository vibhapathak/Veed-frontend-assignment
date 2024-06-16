"use client"
import React from 'react';
import styles from './SignUpBar.module.css';

const SignUpBar = () => {
const handleSignUpClick = () => {
window.location.href = 'https://www.veed.io/signup?locale=en&source=%2F';
};

return (
<div className={styles.signupbox}>
<span className={styles.veed}>VEED</span>
<button className={styles.signUpButton} onClick={handleSignUpClick}>Sign Up</button>
</div>
);
};

export default SignUpBar;