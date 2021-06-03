var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var randomButton = document.getElementById("random");

function initializeBackground(){

	if(localStorage.getItem("firstColor") && localStorage.getItem("secondColor")){
		color1.value = localStorage.getItem("firstColor");
		color2.value = localStorage.getItem("secondColor");
	}
	else {
		localStorage.setItem("firstColor", color1.value);
		localStorage.setItem("secondColor", color2.value);
	}
	
	body.style.background = "linear-gradient(to right, " + localStorage.getItem("firstColor") + ", " + localStorage.getItem("secondColor") + ")";
	css.textContent = body.style.background + ";";
}

function setGradient(){

	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";

	localStorage.setItem("firstColor", color1.value);
	localStorage.setItem("secondColor", color2.value);
}

function getRandomColor(){
	var letters = "0123456789ABCDEF";
	var color = "#";
	for(var i = 0 ; i < 6 ; i++){
		color += letters[Math.floor(Math.random()*16)];
	}
	return color;
}

function setRandomColor(){

	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

initializeBackground();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor);

