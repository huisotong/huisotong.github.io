import styles from "../../../styles/components/games/tictactoe/Board.module.css";
import BoxFiller from "./boxFiller";
import BoardLines from "./boardLines";
const Board = ({ table, handleTurn, currentTurn, playerTurn }) => {

    return (
        <>
            {/* Outlines of board */}
            <BoardLines />
            {/* Clickable boxs on board */}
            {table.map((element, index) => {
                return (
                    <div key={index} className={styles[`ticTacToeBoardBox${index + 1}`]} onClick={() => { handleTurn(index, currentTurn,playerTurn) }}>
                        <BoxFiller activeOption={table[index]} />
                    </div>
                )
            })}
        </>
    );
};

export default Board;
