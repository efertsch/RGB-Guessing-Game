// Variable Declarations 
//----------------------
var colors 							= [],
 		tiles 							= document.getElementsByClassName("tile"),
 		winningColor,
 		numOfTiles 					= 6,
		winningColorDisplay = document.getElementById("winning-color"),
	 	message 						= document.getElementById("message"),
	 	h1 									= document.querySelector("h1"),
	 	buttons 						= document.querySelectorAll("button"),
	 	resetButton 				= document.getElementById("reset"),
	 	modeButtons 				= document.getElementsByClassName("mode")


// Helper functions
//-----------------
//Changes the background color of all tiles
function changeColors(color) {
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = color;
	}
};

//Selects a random color in the colors array to be the winning color
function pickWinningColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
};

// Sets text content of a given element
function setContent(element, text){
	element.textContent = text;
};

// Generates an array of random colors 
function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i ++) {
		arr.push(pickRandomColor());
	}
	return arr;
};

// Generates a single color using random rgb values 
function pickRandomColor(){
	var redValue = Math.floor(Math.random() * 256);
	var greenValue = Math.floor(Math.random() * 256);
	var blueValue = Math.floor(Math.random() * 256);
	return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
};

// Adds the 'selected' class to a given element
function addSelectedClass(elem){
	elem.classList.add("selected");
};

// Removes the 'selected' class from a given element
function removeSelectedClass(elems){
	for(var i = 0; i < elems.length; i ++){
		elems[i].classList.remove("selected");
	}
};

// Resets the game 
function resetGame(){
	colors = generateRandomColors(numOfTiles);
	winningColor = pickWinningColor();
	winningColorDisplay.textContent = winningColor;
	setContent(resetButton, "New Colors");
	setContent(message, "");
	
	for(var i = 0; i < tiles.length; i ++) {
		if (colors[i]) {
			tiles[i].style.display = "block";
			tiles[i].style.backgroundColor = colors[i];
		} else {
			tiles[i].style.display = "none";
		}
	};

	h1.style.background = "steelblue";
};

// Sets up easy and hard mode button functionality
function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		removeSelectedClass(modeButtons);
		addSelectedClass(this);
		this.textContent === "Easy" ? numOfTiles = 3 : numOfTiles = 6;
		resetGame();
		});
	};
};

// Loops over tiles and adds an event listener to each tile
//Determines if clicked tile was of the correct color
function setUpTiles(){
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === winningColor) {
				for(var i = 0; i < tiles.length; i ++) {
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					setContent(message, "Correct!");
					setContent(resetButton, "Play Again?");
				}
			} else {
				for(var i = 0; i < tiles.length; i ++) {
					this.style.backgroundColor = "#232323";
					setContent(message, "Try Again!");
				}
			}
		});
	};
};

// Resets game when the 'reset' button is clicked
function resetButtonEvent(){
	resetButton.addEventListener("click", function(){
		resetGame();
	});
};

// Initializes the game
function initGame() {
	setUpModeButtons();
	setUpTiles();
	resetGame();
	resetButtonEvent();
};


// Runs the program
initGame();









