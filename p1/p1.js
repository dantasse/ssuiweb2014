/* 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Title : Project 1 Sliding Block Puzzle
Author : 
Created : 
Modified : 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
*/

var _image_path = "img1.jpg";
var _image_width =  640;
var _image_height = 480;

var _num_rows = 4;
var _num_cols = 4;

var _empty_tile = {row:0, col: 0};

// Add any other global variables you may need here.

/*
 * Summary: 
 * Returns:
 */
function createTiles(){
  // figure out how wide and tall each tile should be
  
  // add all of the tiles to your page using nested for loops and
  // createDiv. Remember to leave one out for the empty tile
  
  // hint: you can use document.body.appendchild
	
  // set the empty tile location
}

/*
 * Summary: Should return a div with the specified width and height 
 * and put it at the supplied row and column
 * Parameters:
 * Returns: The div you created
 */
function createDiv(width, height, row, col){
  // create your div and set its size & position attributes
  // based on parameters
	
  // Set the div's background
  // hint: css sprites (tutorial: http://css-tricks.com/158-css-sprites/) are a really
  // nice way to show only a portion of an image on a tile. 
	

  // add an event handler that will execute some function you define that will move the 
  // clicked div to the empty tile location if the div is in a valid position
  
	// return your result
}

/*
 * Summary: Example function that could get called when a tile is clicked.
 * Parameters:
 */
function tileClicked(sender, event){
  // check if the tile can move to the empty spot
  // if the tile can move, move the tile to the empty spot
}

/*
 * Summary: Shuffle up the tiles in the beginning of the game
 */
function shuffleTiles(){

}

/*
 * Summary: Generates a random puzzle
 */
function generateRandomPuzzle(){

}

/*
 * When the page loads, create our puzzle
 */
window.onload = function () {
  // generate parameters for a random puzzle
  // create the tiles
  // shuffle the tiles
}
