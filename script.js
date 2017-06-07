var colors = [
	"rgb(182, 66, 244)",
	"rgb(152, 168, 11)",
	"rgb(102, 195, 249)",
	"rgb(249, 207, 102)",
	"rgb(178, 7, 21)",
	"rgb(97, 211, 154)"
];

var tiles = document.getElementsByClassName("tile");

var winningColor = colors[1];
var winningColorDisplay = document.getElementById("winning-color");

var winningColorDisplay = document.getElementById("winning-color");
winningColorDisplay.textContent = winningColor;

var message = document.getElementById("message");

for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];

		tiles[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === winningColor) {
				for(var i = 0; i < tiles.length; i ++) {
					changeColors(clickedColor);
					message.textContent = "Correct!";
				}
			} else {
				for(var i = 0; i < tiles.length; i ++) {
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again!"
				}
			}
		});
};

var winningColorDisplay = document.getElementById("winning-color");
winningColorDisplay.textContent = winningColor;

function changeColors(color) {
	for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = color;
	}
};
