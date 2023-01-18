import styles from "../../../styles/components/games/tictactoe/BoxFiller.module.css";
import { useEffect, useState } from "react";
const BoxFiller = ({ activeOption }) => {

    return (
        <>
            <div className={styles.ticTacToeBoardX1} style={activeOption==="X"?{display:""}:{display:"none"}}>

            </div>
            <div className={styles.ticTacToeBoardX2} style={activeOption==="X"?{display:""}:{display:"none"}}>

            </div>
            <div className={styles.ticTacToeBoardO} style={activeOption==="O"?{display:""}:{display:"none"}}>

            </div>
        </>
    );
};

export default BoxFiller;
