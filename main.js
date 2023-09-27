const gameboard = (() => {

    const boardContainer = document.querySelector('.gameboard');
    let gameArray = ['','','','','','','','','']; //initializes gameArray, each element being one of the 9 tic tac toe elements


    function makeBoard(){ //prints gameArray to board
    gameArray.forEach((n) => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = n;
        boardContainer.appendChild(box);
    })};

    return {
        gameArray,
        makeBoard,
    }
})();


const playerFactory = (playerName, marker) => {
    const sayHello = () => console.log ('hello ' + marker);

    return {playerName, marker, sayHello};
};




gameboard.makeBoard()

const playerOne = playerFactory('Jeff', 'X');
const playerTwo = playerFactory('Marco', 'O');



