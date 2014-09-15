(function() {
'use strict';

var gameState = {
  board: [['_','_','_'], ['_', '_', '_'],['_', '_', '_']],
  turn: 'x',
  gameOver: false
}

var spotClickedGen = function(row, col) {
  return function() {
    if (gameState.board[row][col] !== '_') {
      return; // Do nothing.
    }
    if (gameState.turn === 'x') {
      gameState.board[row][col] = 'x';
      gameState.turn = 'o';
    } else {
      gameState.board[row][col] = 'o';
      gameState.turn = 'x';
    }
    // TODO Check if someone wins. End the game if so.
    document.body.innerHTML = ''; // Not an awesome way to clear the board,
    // but it works here...
    displayBoard(gameState);
  }
}

var displayBoard = function(gameState) {
  for (var i = 0; i < gameState.board.length; i++) {
    var rowArr = gameState.board[i];
    var div = document.createElement('div');
    for (var j = 0; j < rowArr.length; j++) {
      var span = document.createElement('span');
      span.innerText = rowArr[j];
      span.className = 'tictactoe_spot';
      span.addEventListener('click', spotClickedGen(i, j));
      div.appendChild(span);
    }
    document.body.appendChild(div);
  }
}
displayBoard(gameState);

})();
