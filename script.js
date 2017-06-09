// variable declarations 
var colors = generateRandomColors(6);

var tiles = document.getElementsByClassName("tile");

var winningColor = pickWinningColor();
var winningColorDisplay = document.getElementById("winning-color");

var winningColorDisplay = document.getElementById("winning-color");
winningColorDisplay.textContent = winningColor;

var message = document.getElementById("message");

var h1 = document.querySelector("h1");

var buttons = document.querySelectorAll("button");

var resetButton = document.getElementById("reset");

var easyButton = document.getElementById("easy");
var hardButton = document.getElementById("hard");

var numOfTiles = 6;

// functions
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
}

function removeSelectedClass(btn){
	btn.classList.remove("selected");
}


// game logic

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numOfTiles);
	winningColor = pickWinningColor();
	winningColorDisplay.textContent = winningColor;
	setContent(this, "New Colors");
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];
	};
	message.textContent = "";
	h1.style.background = "steelblue";
});

easyButton.addEventListener("click", function(){
	removeSelectedClass(hardButton);
	addSelectedClass(this);
	numOfTiles = 3;
	colors = generateRandomColors(numOfTiles);
	winningColor = pickWinningColor();
	winningColorDisplay.textContent = winningColor;
	for(var i = 0; i < tiles.length; i ++) {
		if(colors[i]) {
			tiles[i].style.backgroundColor = colors[i];
		} else {
			tiles[i].style.display = "none";
		}
	};
});

hardButton.addEventListener("click", function(){
	removeSelectedClass(easyButton);
	addSelectedClass(this);
	numOfTiles = 6;
	colors = generateRandomColors(numOfTiles);
	winningColor = pickWinningColor();
	winningColorDisplay.textContent = winningColor;
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];
		tiles[i].style.display = "block";
	};
});


for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];

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







