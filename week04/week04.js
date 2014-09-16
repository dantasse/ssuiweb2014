(function() {
'use strict';
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

context.strokeStyle = '#ff0000';
context.lineWidth = 5;
context.fillStyle = '#0000ff';

context.beginPath();
context.moveTo(0, 50); // Left, top
context.lineTo(90, 60);
context.translate(100, 100); // just for kicks
context.lineTo(-100, 50);

context.stroke();
context.fill();


context.fillRect(0,0,20,20);

context.translate(-100,-100); // back to the start

var imageObj = new Image();

imageObj.onload = function() {
  context.drawImage(imageObj, 200, 100);
  context.fillStyle = 'Black';
  context.font = '30pt Comic Sans MS';
  context.fillText('such canvas', 100, 450);

  context.font = '16pt Comic Sans MS';
  context.fillText('very html5', 300, 250);
  context.font = '28pt Comic Sans MS';
  context.fillText('wow', 600, 400);
};
imageObj.src = 'week04-doge.png';

})();
