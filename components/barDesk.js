import { useState } from "react";
import styles from "../styles/components/barDesk.module.css";

const BarDesk = ({  }) => {
  return (
    <>
      <div className={styles.deskBody}></div>
      <div className={styles.deskCounter}></div>
    </>
  );
};

export default BarDesk;
