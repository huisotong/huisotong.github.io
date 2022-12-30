import { useState } from "react";
import styles from '../styles/components/floorSignage.module.css'

const FloorSignage = ({ nice }) => {

    return (
        <div >
            <p>{nice}</p>
        </div>
    );
};

export default FloorSignage;
