(function() {
'use strict';

var gameState = {
  board: [['x','o',''],['','','x'],['', '', '']],
  turn: 'x',
  gameOver: false
}

var displayBoard = function(gameState) {
  for (var i = 0; i < gameState.board.length; i++) {
    var rowArr = gameState.board[i];
    var div = document.createElement('div');
    for (var j = 0; j < rowArr.length; j++) {
      var span = document.createElement('span');
      span.innerText = rowArr[j];
    }
    document.body.appendChild(div);
  }
}
displayBoard(gameState);

})();
