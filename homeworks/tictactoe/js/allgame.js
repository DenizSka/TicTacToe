  document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

//DOM:

let playerTurn = 0;
let box = document.querySelectorAll ('.cell')
let turnDisplay = document.getElementById('whos-turn');

//With the page load define P1 as X. And with each click to the box, change it to P2 Y.

let takeTurns = function (){
  for (let i = 0; i < box.length; i++){
    box[i].addEventListener('click', function () {
      //User shouldn't be able click on the selected box multiple times.
      //If the box is not empty stop the function.
      if (box[i].innerText != ''){
        return false;
      }
      console.log(box[i]);
      if (playerTurn % 2 === 0) {
        box[i].innerText = 'X';
        turnDisplay.innerText = 'Player X';
        playerTurn++;
      } else {
        box[i].innerHTML = 'O';
        turnDisplay.innerText = 'Player O';
        playerTurn++;
      } winningConditions();
    });
  }
}

//leader board
let p1Score = document.querySelector('span#player-one');
let p2Score = document.querySelector('span#player-two');
// We started player score with 1 because first one is a string. not a number.
let playerOneScore = 1;
let playerTwoScore = 1;


//winning conditions
let winningConditions = function (){
  if ((box[0].innerText === box[1].innerText) && (box[0].innerText === box[2].innerText) && (box[0].innerText && box[1].innerText && box[2].innerText !== '')) {
    let winner = box[0].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    }
  } else if (box[3].innerText === box[4].innerText && box[3].innerText === box[5].innerText && (box[3].innerText && box[4].innerText && box[5].innerText !== '')) {
    let winner = box[3].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    }
  } else if (box[6].innerText === box[7].innerText && box[6].innerText === box[8].innerText && (box[6].innerText && box[7].innerText && box[8].innerText !== '')) {
    let winner = box[6].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    }
  } else if (box[0].innerText === box[3].innerText && box[0].innerText === box[6].innerText && (box[0].innerText && box[3].innerText && box[6].innerText !== '')) {
    let winner = box[0].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    };
  } else if (box[1].innerText === box[4].innerText && box[1].innerText === box[7].innerText && (box[1].innerText && box[4].innerText && box[7].innerText !== '')) {
    let winner = box[1].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    };
  } else if (box[2].innerText === box[5].innerText && box[2].innerText === box[8].innerText && (box[2].innerText && box[5].innerText && box[8].innerText !== '')) {
    let winner = box[2].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    }
  } else if (box[0].innerText === box[4].innerText && box[0].innerText === box[8].innerText && (box[0].innerText && box[4].innerText && box[8].innerText !== '')) {
    let winner = box[0].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    };
  } else if (box[2].innerText === box[4].innerText && box[2].innerText === box[6].innerText && (box[4].innerText && box[2].innerText && box[6].innerText !== '')) {
    let winner = box[2].innerHTML;
    alert (`Player ${winner} Wins!`);
    if (winner === 'O'){
      p1Score.innerHTML = playerOneScore++;
    } else if (winner === 'X'){
      p2Score.innerHTML = playerTwoScore++;
    }
  } else if (box[0].innerText && box[1].innerText && box[2].innerText && box[3].innerText && box[4].innerText && box[5].innerText && box[6].innerText && box[7].innerText && box[8].innerText !== '') {
    alert (`It's a tie!`);
  }
}
takeTurns();


//reset button
let button = document.querySelector('button');
button.addEventListener('click', function(){
  for (let j = 0; j < box.length; j++){
  box[j].innerText = ' ';
};
});


});






