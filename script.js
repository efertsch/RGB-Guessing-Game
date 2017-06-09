// Variable Declarations 
var colors = [];
var tiles = document.getElementsByClassName("tile");
var winningColor;
var numOfTiles = 6;

// Selectors
var winningColorDisplay = document.getElementById("winning-color");
var winningColorDisplay = document.getElementById("winning-color");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var buttons = document.querySelectorAll("button");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");


// Functions
function changeColors(color) {
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = color;
	}
};

function pickWinningColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function setContent(element, text){
	element.textContent = text;
};

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i ++) {
		arr.push(pickRandomColor());
	}
	return arr;
};

function pickRandomColor(){
	var redValue = Math.floor(Math.random() * 256);
	var greenValue = Math.floor(Math.random() * 256);
	var blueValue = Math.floor(Math.random() * 256);
	return "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
};

function addSelectedClass(btn){
	btn.classList.add("selected");
};

function removeSelectedClass(btns){
	for(var i = 0; i < btns.length; i ++){
		btns[i].classList.remove("selected");
	}
};

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

function resetButtonEvent(){
	resetButton.addEventListener("click", function(){
		resetGame();
	});
};

function initGame() {
	setUpModeButtons();
	setUpTiles();
	resetGame();
};


// Function Calls
initGame();
resetButtonEvent();








