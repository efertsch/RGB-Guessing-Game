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
	 	modeButtons 				= document.getElementsByClassName("mode"),
	 	buttons        			= document.getElementsByClassName("button"),
	 	themeColor          = "rgb(154, 205, 50)"


// Run the program
initGame();


// Helper functions
//-----------------
//Changes the background color of all tiles
function changeColors(color) {
	for(var i = 0; i < tiles.length; i ++) {
		setBackgroundColor(tiles[i], color);
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
	var colors = [];
	for(var i = 0; i < num; i ++) {
		colors.push(pickRandomColor());
	}
	return colors;
};

// Generates a single color using random rgb values 
function pickRandomColor(){
	var redValue = Math.floor(Math.random() * 256);
	var greenValue = Math.floor(Math.random() * 256);
	var blueValue = Math.floor(Math.random() * 256);
	return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
};

// Resets the game 
function resetGame(){
	colors = generateRandomColors(numOfTiles);

	winningColor = pickWinningColor();

	winningColorDisplay.textContent = winningColor;

	setContent(resetButton, "New Colors");
	setContent(message, "");
	
	for (var i = 0; i < tiles.length; i ++) {
		if (colors[i]) {
			tiles[i].style.display = "block";
			setBackgroundColor(tiles[i], colors[i]);
		} else {
			tiles[i].style.display = "none";
		}
	};
	setBackgroundColor(h1, themeColor);
	changeButtonTextColor(themeColor);
};

// Sets up easy and hard mode button functionality
function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		this.textContent === "Easy" ? numOfTiles = 3 : numOfTiles = 6;
		resetGame();
		});
	};
};

// Loops over tiles and adds an event listener to each tile
// Determines if clicked tile was of the correct color
function setUpTiles(){
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === winningColor) {
				for(var i = 0; i < tiles.length; i ++) {
					changeColors(clickedColor);

					setBackgroundColor(h1, clickedColor);

					changeButtonTextColor(clickedColor);

					setContent(message, "Correct!");
					setContent(resetButton, "Play Again?");

				}
			} else {
				for(var i = 0; i < tiles.length; i ++) {
					setBackgroundColor(this, "rgb(35, 35, 35)");
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

// Sets the color of a given element to a given value
function setTextColor(text, value){
	text.style.color = value;
}

// Sets the background color of a given element to a given value
function setBackgroundColor(elem, value){
	elem.style.backgroundColor = value;
}

// Changes text color of all buttons 
function changeButtonTextColor(color) {
	var buttons = document.getElementsByClassName("button");
	for(i=0; i < buttons.length; i++){
		setTextColor(buttons[i], color);
	}
	return buttons;
}

// Initializes the game
function initGame() {
	setUpModeButtons();
	setUpTiles();
	resetGame();
	resetButtonEvent();
};







