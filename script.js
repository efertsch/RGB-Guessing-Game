// variable declarations 
var colors = generateRandomColors(6);

var tiles = document.getElementsByClassName("tile");

var winningColor = pickWinningColor();
var winningColorDisplay = document.getElementById("winning-color");

var winningColorDisplay = document.getElementById("winning-color");
winningColorDisplay.textContent = winningColor;

var message = document.getElementById("message");

var h1 = document.querySelector("h1");

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

function setContent(text){
	message.textContent = text;
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


// game logic 
for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];

		tiles[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === winningColor) {
				for(var i = 0; i < tiles.length; i ++) {
					changeColors(clickedColor);
					h1.style.backgroundColor = clickedColor;
					setContent("Correct!");
				}
			} else {
				for(var i = 0; i < tiles.length; i ++) {
					this.style.backgroundColor = "#232323";
					setContent("Try Again!");
				}
			}
		});
};


