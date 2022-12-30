import { useState } from "react";
import styles from '../styles/components/floorSignage.module.css'

const FloorSignage = ({ language }) => {

    return (
        <>
            <div className={styles.frontSign}>
                <p>{language[0]}</p>
            </div>
            <div className={styles.backSign}>
                <p>{language[0]}</p>
            </div>
        </>
    );
};

export default FloorSignage;
