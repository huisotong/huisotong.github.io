import { useState } from "react";
import styles from "../styles/components/barStool.module.css";

const BarDesk = ({}) => {
  return (
    <>
      <div className={styles.stoolCushion}></div>
      {/* <div className={styles.stoolCushionBorder}></div> */}
      <div className={styles.stoolSupport}></div>
      <div className={styles.stoolFeet}></div>
      <div className={styles.stoolFeetSupport}></div>
      <div className={styles.stoolBase}></div>
    </>
  );
};

export default BarDesk;
