export default function winningNumber(humanHistory,table) {
    let winningNumber  = 9
    if(humanHistory.includes("0") && humanHistory.includes("1") && table[2]===""){
      winningNumber = 2
    }else if(humanHistory.includes("3") && humanHistory.includes("4") && table[5]===""){
      winningNumber = 5
    }else if(humanHistory.includes("6") && humanHistory.includes("7") && table[8]===""){
      winningNumber = 8
    }else if(humanHistory.includes("6") && humanHistory.includes("3") && table[0]===""){
      winningNumber = 0
    }else if(humanHistory.includes("7") && humanHistory.includes("4") && table[1]===""){
      winningNumber = 1
    }else if(humanHistory.includes("8") && humanHistory.includes("5") && table[2]===""){
      winningNumber = 2
    }else if(humanHistory.includes("7") && humanHistory.includes("8") && table[6]===""){
      winningNumber = 6
    }else if(humanHistory.includes("4") && humanHistory.includes("5") && table[3]===""){
      winningNumber = 3
    }else if(humanHistory.includes("1") && humanHistory.includes("2") && table[0]===""){
      winningNumber = 0
    }else if(humanHistory.includes("2") && humanHistory.includes("5") && table[8]===""){
      winningNumber = 8
    }else if(humanHistory.includes("1") && humanHistory.includes("4") && table[7]===""){
      winningNumber = 7
    }else if(humanHistory.includes("0") && humanHistory.includes("3") && table[6]===""){
      winningNumber = 6
    }else if(humanHistory.includes("0") && humanHistory.includes("4") && table[8]===""){
      winningNumber = 8
    }else if(humanHistory.includes("2") && humanHistory.includes("4") && table[6]===""){
      winningNumber = 6
    }else if(humanHistory.includes("6") && humanHistory.includes("4") && table[2]===""){
      winningNumber = 2
    }else if(humanHistory.includes("8") && humanHistory.includes("4") && table[0]===""){
      winningNumber = 0
    }
    return winningNumber;
  }
  