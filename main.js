const gameboard = (() => {

    const boardContainer = document.querySelector('.gameboard');
    const boardContainerChildNodes = boardContainer.childNodes;
    let gameArray = ['','','','','','','','','']; //initializes gameArray, each element being one of the 9 tic tac toe elements
    let value = [''] //making array to save which tile the user clicks on 

    function makeBoard () {

        for (let i=0; i< gameArray.length; i++) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = gameArray[i];
            data = box.dataset;
            data.indexnumber = i;
            boardContainer.appendChild(box);
            
            box.addEventListener('click', function eventHandler(){
                    var num = this.dataset.indexnumber;
                    invokeMe(num);
                    box.removeEventListener('click', eventHandler);
        
                 }) 
                    }   const invokeMe = (num) => {
                            value[0] = num,
                            playerOne.turns();    
        }    
    }

    function highlightWinner (one, two, three) {
        boardContainerChildNodes[one].classList.add('win');
        boardContainerChildNodes[two].classList.add('win');
        boardContainerChildNodes[three].classList.add('win');
    }
        
    function clearBoard () {
        while(boardContainer.firstChild){
        boardContainer.removeChild(boardContainer.firstChild);}
        }


    return {
        gameArray,
        makeBoard,
        value,
        clearBoard,
        highlightWinner,
    }
})();





const playerFactory = (playerName, marker) => {

    let winner = ['']

    function displayWinner (one, two, three) {
        winner[0] = playerName;
        console.log(`${winner[0]} WINS`)
        var delayInMs = 3000;
        gameboard.highlightWinner(one, two,three);

        // setTimeout(function(){
        //      location.reload()
        // }, delayInMs)
    }


    function userTurn () { //cyles between the two players turns 
        let count = 0;

        return () => {
            if (winner[0]){
                return 
            }

        else if (count === 0){
                if (gameboard.gameArray[Number(gameboard.value[0])]=='') {
                    gameboard.gameArray[Number(gameboard.value[0])] = playerOne.marker //places marker 
                    gameboard.clearBoard()
                    gameboard.makeBoard()
                    gameChecker.winnerChecker()
                    count++;
            } else {return};
          } 

        else if (count === 1){ 
                if (gameboard.gameArray[Number(gameboard.value[0])]=='') {
                    gameboard.gameArray[Number(gameboard.value[0])] = playerTwo.marker
                    gameboard.clearBoard()
                    gameboard.makeBoard()
                    gameChecker.winnerChecker()
                    count--;
            } else {return};
          }
        };
      };
      
      const turns = userTurn();



    return {playerName, marker, turns, displayWinner} 
};


const gameChecker = (()=>{


    function winnerChecker () {

        if (gameboard.gameArray[0]==gameboard.gameArray[1] && gameboard.gameArray[1]==gameboard.gameArray[2]){
            if (gameboard.gameArray[0] == playerOne.marker){
                playerOne.displayWinner(0,1,2)
            } else if ((gameboard.gameArray[0] == playerTwo.marker)) {
                playerTwo.displayWinner(0,1,2)
            } 
            return;
        }
        else  if (gameboard.gameArray[3]==gameboard.gameArray[4] && gameboard.gameArray[4]==gameboard.gameArray[5]){
            if (gameboard.gameArray[3] == playerOne.marker){
                playerOne.displayWinner(3,4,5)
            } else if ((gameboard.gameArray[3] == playerTwo.marker)) {
                playerTwo.displayWinner(3,4,5)
            }
            return;
        }
        else  if (gameboard.gameArray[6]==gameboard.gameArray[7] && gameboard.gameArray[7]==gameboard.gameArray[8]){
            if (gameboard.gameArray[6] == playerOne.marker){
                playerOne.displayWinner(6,7,8)
            } else if ((gameboard.gameArray[6] == playerTwo.marker)) {
                playerTwo.displayWinner(6,7,8)
            } 
            return;
        }
        else  if (gameboard.gameArray[0]==gameboard.gameArray[3] && gameboard.gameArray[3]==gameboard.gameArray[6]){
            if (gameboard.gameArray[0] == playerOne.marker){
                playerOne.displayWinner(0,3,6)
            } else if ((gameboard.gameArray[0] == playerTwo.marker)) {
                playerTwo.displayWinner(0,3,6)
            } 
            return;
        }
        else  if (gameboard.gameArray[1]==gameboard.gameArray[4] && gameboard.gameArray[4]==gameboard.gameArray[7]){
            if (gameboard.gameArray[1] == playerOne.marker){
                playerOne.displayWinner(1,4,7)
            } else if ((gameboard.gameArray[1] == playerTwo.marker)) {
                playerTwo.displayWinner(1,4,7)
            } 
            return;
        }
        else  if (gameboard.gameArray[2]==gameboard.gameArray[5] && gameboard.gameArray[5]==gameboard.gameArray[8]){
            if (gameboard.gameArray[2] == playerOne.marker){
                playerOne.displayWinner(2,5,8)
            } else if ((gameboard.gameArray[2] == playerTwo.marker)) {
                playerTwo.displayWinner(2,5,8)
            } 
            return;
        }
        else  if (gameboard.gameArray[0]==gameboard.gameArray[4] && gameboard.gameArray[4]==gameboard.gameArray[8]){
            if (gameboard.gameArray[0] == playerOne.marker){
                playerOne.displayWinner(0,4,8)
            } else if ((gameboard.gameArray[0] == playerTwo.marker)) {
                playerTwo.displayWinner(0,4,8)
            } 
            return;
        }
        else  if (gameboard.gameArray[2]==gameboard.gameArray[4] && gameboard.gameArray[4]==gameboard.gameArray[6]){
            if (gameboard.gameArray[2] == playerOne.marker){
                playerOne.displayWinner(2,4,6)
            } else if ((gameboard.gameArray[2] == playerTwo.marker)) {
                playerTwo.displayWinner(2,4,6)
            } 
        }
        else {
            tieChecker()
        }


    }

    function tieChecker (){
        if (gameboard.gameArray.includes('')==false) {
            console.log('its a tie')
        } else {return}
    }
  
    return {
        winnerChecker,   
    }


})();




gameboard.makeBoard()



const playerOne = playerFactory('Jeff', 'X');
const playerTwo = playerFactory('Marco', 'O');
















