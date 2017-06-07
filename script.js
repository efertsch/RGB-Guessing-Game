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

for(var i = 0; i < tiles.length; i ++) {
		tiles[i].style.backgroundColor = colors[i];
		tiles[i].addEventListener("click", function(){
			alert("clicked");
		});
};

var winningColorDisplay = document.getElementById("winning-color");
winningColorDisplay.textContent = winningColor;

