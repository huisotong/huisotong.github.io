import { useState } from "react";
import styles from "../styles/components/floorSignage.module.css";

const FloorSignage = ({ language }) => {
  return (
    <>
      <div className={styles.frontSign}>
        <div className={styles.frontSignBoard}>
          <h1 className={styles.languages}>My Skills</h1>
          {language.map((element, index) => {
            // eslint-disable-next-line react/jsx-key
            return (
              <p className={styles.languages} key={index}>
                {element}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.backSign}></div>
    </>
  );
};

export default FloorSignage;
