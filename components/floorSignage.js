import { useState } from "react";
import styles from "../styles/components/floorSignage.module.css";

const FloorSignage = ({ language }) => {
  return (
    <>
      <div className={styles.frontSign}>
        {language.map((element,index) => {
          // eslint-disable-next-line react/jsx-key
          return <p key={index}>{element}</p>;
        })}
      </div>
      <div className={styles.backSign}></div>
    </>
  );
};

export default FloorSignage;
