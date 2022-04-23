var botScore=0,
	playerScore=0;

document.getElementById("rock").onclick=playerThrowsRock;
function playerThrowsRock(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	document.querySelector('.btn1').style.backgroundColor = "lightgreen"
	document.querySelector('.btn2').style.backgroundColor = "white"
	document.querySelector('.btn3').style.backgroundColor = "white"
}

document.getElementById("scissors").onclick=playerThrowsScissors
function playerThrowsScissors(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon, "scissors");
	document.querySelector('.btn3').style.backgroundColor = "DeepSkyBlue"
	document.querySelector('.btn2').style.backgroundColor = "white"
	document.querySelector('.btn1').style.backgroundColor = "white"
}

document.getElementById("paper").onclick=playerThrowsPaper
function playerThrowsPaper(){
	var botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon, "paper");
	document.querySelector('.btn2').style.backgroundColor = "orange"
	document.querySelector('.btn3').style.backgroundColor = "white"
	document.querySelector('.btn1').style.backgroundColor = "white"
}

function getRandomWeapon(){
	var randomNumber=Math.random();
	var botsWeapon="rock";
	document.querySelector('#botPokemon').src="images/bulba.jpg"
	if(randomNumber<.33){
		botsWeapon="scissors";
		document.querySelector('#botPokemon').src="images/squirt.jpg"
	}
	else if(randomNumber<.6666){
		botsWeapon="paper";
		document.querySelector('#botPokemon').src="images/char.jpg"
	}
	return botsWeapon;
}

function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		displayCompleteMessage("The battle was a tie!");
	}
	else if(
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="rock" && playersWeapon=="scissors")
		){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
function increaseBotScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("Oh no, your pokemon was defeated!");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("Good job! You won the battle!");
}
function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}