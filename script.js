/* This code is for the Tic Tac Toe Game */
  

//This functions generates a empty gameboard
function gameBoardArray() {
    let Array = [
        ['','',''],
        ['','',''],
        ['','',''],
        ];
    return Array;
}

//This object stores the Gameboard
const Gameboard = {
    gameboard: gameBoardArray()
}
//console.log(Gameboard.gameboard[2][1]) //Delete this

//This object stores PlayerX info
const PlayerX = {
    Token: 'X',
    name: "PlayerX",
}
//This object stores PlayerO info
const PlayerO = {
    Token: 'O',
    name: "PlayerO",
}
//console.log(PlayerO,PlayerX); //Delete this

//This function runs the game
function game(){
    let i = 0;
    while (i < 9){
        if ((i%2 === 0) || (i === 0)){
            let XP1 = prompt("Player X move 1");
            let XP2 = prompt("Player X move 2");
            let status  = gameBoardController(Gameboard.gameboard, XP1, XP2, PlayerX.Token);
            i++;
        }
        else if ((i != 0)&& (i%2 != 0)){
            let OP1 = prompt("Player O move 1");
            let OP2 = prompt("Player O move 2");
            let status  = gameBoardController(Gameboard.gameboard, OP1, OP2, PlayerO.Token);
            i++;
        }
    }
}

function gameBoardController(gameboard, row, col, token){
    if (gameboard[row][col] === ""){
        gameboard[row][col] = token;
        console.log(Gameboard.gameboard);
        return 0;
    } else {
        console.log("This position is taken");
        return 1;
    }
}
