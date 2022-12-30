import { useState } from "react";
import styles from '../styles/components/flickerSignage.module.css'

const FlickerSignage = ({ text }) => {

  return (
    <div className={styles.swingBoard}>
      <p className={styles.textGlow}>{text}</p>
      <br/>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default FlickerSignage;
