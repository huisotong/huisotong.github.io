import winningNumber from "./winningNumber";
export default function computerTurn(table, totalTurns, computer, computerHistory, humanHistory) {
  let indexChosen
  //index of corners
  let corners = [0, 2, 6, 8]
  let connecter = [1, 3, 5, 7]
  let cornersOccupied = 0
  let humanCornersOccupied = 0
  let i = 0
  while (i < corners.length) {
    if (computerHistory.includes(corners[i])) {
      cornersOccupied += 1
    }
    if (humanHistory.includes(corners[i])) {
      humanCornersOccupied += 1
    }
    i++
  }
  switch (totalTurns) {
    case 0:
      indexChosen = corners[Math.floor(Math.random() * 3)];
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      let stopWinningNumber = winningNumber(humanHistory, table)
      let getWinningNumber = winningNumber(computerHistory, table)
      if (totalTurns === 1 && table[4] === "" && humanCornersOccupied === 1) {
        indexChosen = 4
      }

      else if (getWinningNumber !== 9) {
        indexChosen = getWinningNumber
      } else if (stopWinningNumber !== 9) {
        indexChosen = stopWinningNumber
      }
      else if (humanCornersOccupied >= 2) {
        if (humanHistory.includes("0") && humanHistory.includes("2") && table[1] === "") {
          indexChosen = 1
        } else if (humanHistory.includes("6") && humanHistory.includes("8") && table[7] === "") {
          indexChosen = 7
        } else if (humanHistory.includes("0") && humanHistory.includes("6") && table[3] === "") {
          indexChosen = 3
        } else if (humanHistory.includes("2") && humanHistory.includes("8") && table[5] === "") {
          indexChosen = 5
        } else if ((humanHistory.includes("0") && humanHistory.includes("8") && table[4] === "") || (humanHistory.includes("2") && humanHistory.includes("6") && table[4] === "")) {
          indexChosen = 4
        } else {
          let x = 0
          while (x < connecter.length) {
            if (table[connecter[x]] === "") {
              indexChosen = connecter[x]
              x = connecter.length
            }
            x++
          }
        }

      }
      else if (totalTurns === 3 && humanCornersOccupied === 2) {
        indexChosen = connecter[Math.floor(Math.random() * 3)];
      }
      else if (stopWinningNumber === 9) {

        while (i < corners.length) {
          if (computerHistory.includes(corners[i])) {
            cornersOccupied += 1
          }
          if (humanHistory.includes(corners[i])) {
            humanCornersOccupied += 1
          }
          i++
        }

        if (table[4] === "" && ((humanHistory.includes("1") && humanHistory.includes("3")) || (humanHistory.includes("1") && humanHistory.includes("5")) || (humanHistory.includes("1") && humanHistory.includes("7")) || (humanHistory.includes("3") && humanHistory.includes("5")) || (humanHistory.includes("7") && humanHistory.includes("3")) || (humanHistory.includes("7") && humanHistory.includes("5")))) {
          indexChosen = 4
        }
        else if (cornersOccupied === 2 && table[4] === "") {
          indexChosen = 4
        }
        else if (cornersOccupied < 3 && (table[corners[0]] === "" || table[corners[1]] === "" || table[corners[2]] === "" || table[corners[3]] === "")) {
          indexChosen = table[corners[0]] === "" ? corners[0] :
            table[corners[1]] === "" ? corners[1] :
              table[corners[2]] === "" ? corners[2] :
                corners[3]
        } else {
          while (i < connecter.length) {
            if (table[i] === "") {
              indexChosen = i
              i = connecter.length
            }
            i++
          }
        }
      } else {
      }

      // code block
      break;
    default:
      indexChosen = 10
    // code block
  }
  return indexChosen;
}
