/* This code is for the Tic Tac Toe Game */
const cel00 = document.getElementById('pos00');
const cel01 = document.getElementById('pos01');
const cel02 = document.getElementById('pos02');
const cel10 = document.getElementById('pos10');
const cel11 = document.getElementById('pos11');
const cel12 = document.getElementById('pos12');
const cel20 = document.getElementById('pos20');
const cel21 = document.getElementById('pos21');
const cel22 = document.getElementById('pos22');
const startGame = document.querySelector('#startButton');
const gridContent = document.getElementsByClassName('.gridcontent');
const PlayerXName = document.getElementById('playerXname');
const PlayerOName = document.getElementById('playerOname');
const WinnerAnnoucer = document.getElementsByClassName('winnerAnnoucer');
const WinnerLogo = document.getElementsByClassName('winnerLogo');
const dialog = document.getElementsByClassName('dialog');
const closeDialog = document.querySelector('.closeDialog');
const Xlogo = '<svg fill="#967979" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>';
const Ologo = '<h id="logoO">O</h>';

function close(){
dialog[0].style.visibility = "hidden";
}
close();
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
//This function get's the values from the gameboard GUI to the Array
function updateArray(){
    Gameboard.gameboard[0][0] = cel00.textContent;
    Gameboard.gameboard[0][1] = cel01.textContent;
    Gameboard.gameboard[0][2] = cel02.textContent;
    Gameboard.gameboard[1][0] = cel10.textContent;
    Gameboard.gameboard[1][1] = cel11.textContent;
    Gameboard.gameboard[1][2] = cel12.textContent;
    Gameboard.gameboard[2][0] = cel20.textContent;
    Gameboard.gameboard[2][1] = cel21.textContent;
    Gameboard.gameboard[2][2] = cel22.textContent;
    console.log(Gameboard.gameboard);
}
function checkWinner(Array){
    let x = PlayerX.Token;
    let o = PlayerO.Token;
    if (((Array [0][0] === x &&  //Checks if X wins by rows
         Array  [0][1] === x &&
         Array  [0][2] === x) ||
        (Array  [1][0] === x &&
         Array  [1][1] === x &&
         Array  [1][2] === x) ||
        (Array  [2][0] === x && 
         Array  [2][1] === x && 
         Array  [2][2] === x))|| //Ends Row Checks
        ((Array [0][0] === x &&  //Checks if X wins by col
         Array  [1][0] === x &&
         Array  [2][0] === x) ||
        (Array  [0][1] === x &&
         Array  [1][1] === x &&
         Array  [2][1] === x) ||
        (Array  [0][2] === x && 
         Array  [1][2] === x && 
         Array  [2][2] === x)) || //Ends Col Checks
        ((Array [0][0] === x &&  //Checks if X wins cross
         Array  [1][1] === x &&
         Array  [2][2] === x) || 
        (Array  [0][2] === x &&
         Array  [1][1] === x &&
         Array  [2][0] === x))){
            WinnerAnnoucer[0].innerHTML = (Game.Player1.name + " wins!");
            WinnerLogo[0].innerHTML = Xlogo;
            dialog[0].style.visibility = "visible";
        } 
    if (((Array [0][0] === o && //Checks if O wins by rows
         Array  [0][1] === o &&
         Array  [0][2] === o) ||
        (Array  [1][0] === o &&
         Array  [1][1] === o &&
         Array  [1][2] === o) ||
        (Array  [2][0] === o && 
         Array  [2][1] === o && 
         Array  [2][2] === o))||
        ((Array [0][0] === o &&  //Checks if X wins by col
         Array  [1][0] === o &&
         Array  [2][0] === o) ||
        (Array  [0][1] === o &&
         Array  [1][1] === o &&
         Array  [2][1] === o) ||
        (Array  [0][2] === o && 
         Array  [1][2] === o && 
         Array  [2][2] === o)) || //Ends Col Checks
        ((Array [0][0] === o &&  //Checks if X wins cross
         Array  [1][1] === o &&
         Array  [2][2] === o) || 
        (Array  [0][2] === o &&
         Array  [1][1] === o &&
         Array  [2][0] === o))){
            WinnerAnnoucer[0].innerHTML = (Game.Player2.name + " wins!");
            WinnerLogo[0].innerHTML = Ologo;
            dialog[0].style.visibility = "visible";
        } 
}
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
const Game = {
    Counter: 1,
    Gameboard: Gameboard,
    Player1: PlayerX,
    Player2: PlayerO,
}
//This function checks if the spot is filled
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
//This will get any input from gameboard
function RunGame(Game){
    const selectCell = document.querySelectorAll('[id^="pos"]');

    selectCell.forEach((p) =>{
        p.addEventListener("click", (event) =>{
            let selection = (event.target.id);
            let element = document.getElementById(selection);
            let text = element.textContent;
            console.log("The cell had:" + element.textContent)
            if (text === 'null'){
                if ((Game.Counter%2 !== 0) && (Game.Counter < 10)){
                    element.innerHTML = Game.Player1.Token;
                    element.style.color = 'brown';
                    updateArray();
                    checkWinner(Gameboard.gameboard);
                    Game.Counter++;
                    console.log("#" + Game.Counter);
                }
                else  if ((Game.Counter%2 === 0) && (Game.Counter < 10)){
                    element.innerHTML = Game.Player2.Token;
                    element.style.color = 'brown';
                    updateArray();
                    checkWinner(Gameboard.gameboard);
                    Game.Counter++;
                    console.log("#" + Game.Counter);
                }
            } 
            else if (text === 'X' || text === 'O'){
                alert("Please select an empty space");
                console.log("#" + Game.Counter);
            }   
        });
    });
}

let repeat = 1;
//Starts the game when clicked and sets cells values to null hidden
startGame.addEventListener('click', ()=>{
    cel00.innerHTML = ('null');
    cel00.style.color = "rgb(179, 149, 149)";
    cel00.style.textShadow = "none";
    cel01.innerHTML = ('null');
    cel01.style.color = "rgb(179, 149, 149)";
    cel01.style.textShadow = "none";
    cel02.innerHTML = ('null');
    cel02.style.color = "rgb(179, 149, 149)";
    cel02.style.textShadow = "none";
    cel10.innerHTML = ('null');
    cel10.style.color = "rgb(179, 149, 149)";
    cel10.style.textShadow = "none";
    cel11.innerHTML = ('null');
    cel11.style.color = "rgb(179, 149, 149)";
    cel11.style.textShadow = "none";
    cel12.innerHTML = ('null');
    cel12.style.color = "rgb(179, 149, 149)";
    cel12.style.textShadow = "none";
    cel20.innerHTML = ('null');
    cel20.style.color = "rgb(179, 149, 149)";
    cel20.style.textShadow = "none";
    cel21.innerHTML = ('null');
    cel21.style.color = "rgb(179, 149, 149)";
    cel21.style.textShadow = "none";
    cel22.innerHTML = ('null');
    cel22.style.color = "rgb(179, 149, 149)";
    cel22.style.textShadow = "none";
    updateArray();
    Game.Counter = 1;
    if (PlayerXName.value === ''){
        PlayerX.name = 'X-men'
    } else {
        PlayerX.name = PlayerXName.value;
    }
    if (PlayerOName.value === ''){
        PlayerO.name = 'Optimus Prime'
    } else {
        PlayerO.name = PlayerOName.value;
    }
    if (repeat > 0) {
        RunGame(Game);
        repeat--;
    }
})  

closeDialog.addEventListener('click', ()=>{
    close();
})