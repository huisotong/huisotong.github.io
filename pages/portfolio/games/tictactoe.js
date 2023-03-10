import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../../../styles/games/Tictactoe.module.css";
import { useEffect, useState } from "react";
import Board from "../../../components/games/tictactoe/board";
import computerTurn from "../../../functions/games/tictactoe/computerTurn";

const inter = Inter({ subsets: ["latin"] });

export default function Tictactoe() {
    const [table, setTable] = useState([
        // "X", "O", "O",
        // "O", "X", "X",
        // "O", "X", "O"
        "", "", "",
        "", "", "",
        "", "", ""
    ])
    const [player, setPlayer] = useState("X");
    const [computer, setComputer] = useState("O");
    const [computerHistory, setComputerHistory] = useState("");
    const [humanHistory, setHumanHistory] = useState("");
    const [totalTurns, setTotalTurns] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(true);
    const [currentTurn, setCurrentTurn] = useState("X");
    const handleReset = () => {
        setTable([
            "", "", "",
            "", "", "",
            "", "", ""
        ])
        setComputerHistory("")
        setHumanHistory("")
        setTotalTurns(0)
        setPlayerTurn(true)
    };
    const handleTurn = (index, currentTurn, playerTurn) => {
        if (playerTurn === true) {
            if (table[index] === "") {
                let newTable = [...table];
                newTable[index] = player;
                setTable(newTable)
                // if (currentTurn === "X") {
                //     setCurrentTurn("O")
                // } else {
                //     setCurrentTurn("X")
                // }
                setTotalTurns(totalTurns + 1)
                setPlayerTurn(false)
                let newHumanHistory = `${humanHistory}${index}`
                setHumanHistory(newHumanHistory)
                handleComputerTurn(newTable, totalTurns + 1, computer, computerHistory, newHumanHistory)
            } else {
                alert("Box already filled")
            }
        } else {
            alert("Its not your turn")
        }


    };
    const handleComputerTurn = (table, totalTurns, computer, computerHistory, humanHistory) => {
        console.log("Hmm let me think...")
        console.log(table)
        setTimeout(function () {
            let indexChosen = computerTurn(table, totalTurns, computer, computerHistory, humanHistory)
            if (indexChosen === 10) {
                handleReset()
            } else {
                let newTable = [...table];
                newTable[indexChosen] = computer;
                setTable(newTable)
                setComputerHistory(`${computerHistory}${indexChosen}`)
                setTotalTurns(totalTurns + 1)
                setPlayerTurn(true)
            }

        }, 3000);
    }
    return (
        <>
            <Head>
                <title>Tic-tac-toe</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.mainAreaSetUp}>
                </div>
                <div className={styles.mainArea}>
                    <div className={styles.ticTacToeTitle}>

                        <button  className={styles.resetButton} onClick={() => { handleReset() }}>Reset</button>
                    </div>
                    <div className={styles.ticTacToeArea}>
                        <div className={styles.ticTacToeBoardArea}>
                            <Board table={table} handleTurn={handleTurn} currentTurn={currentTurn} playerTurn={playerTurn} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
