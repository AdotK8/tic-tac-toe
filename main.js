const gameboard = (() => {

    const boardContainer = document.querySelector('.gameboard');
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

                box.addEventListener('click', function (){
                    var num = this.dataset.indexnumber;
                    invokeMe(num);
            }) 
                    }   const invokeMe = (num) => {
                            value[0] = num,
                            playerOne.counter();    
        }    

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
    }
})();





const playerFactory = (playerName, marker) => {


    function counterCreator () { //cyles between the two players turns 
        let count = 0;

        return () => {
          if (count === 0){
            gameboard.gameArray[Number(gameboard.value[0])] = playerOne.marker
            gameboard.clearBoard()
            gameboard.makeBoard()
            gameChecker.winnerChecker()
            count++;
          } else if (count === 1){
            gameboard.gameArray[Number(gameboard.value[0])] = playerTwo.marker
            gameboard.clearBoard()
            gameboard.makeBoard()
            gameChecker.winnerChecker()
            count--;
          }
        };
      };
      
      const counter = counterCreator();



    return {playerName, marker, counter} 
};




gameboard.makeBoard()



const playerOne = playerFactory('Jeff', 'X');
const playerTwo = playerFactory('Marco', 'O');



const gameChecker = (()=>{

    function winnerChecker () {
        // console.log(gameboard.gameArray[0]);

        if (gameboard.gameArray=)
        
           
    };

    function tieChecker (){
        console.log('tie');
    }

    return {
        winnerChecker,
        tieChecker,
    }


})();
















