let mChoice = [ 
				"rock",
				"paper",
				"scissors"
				];

function ai() {
let i= Math.round( (mChoice.length - 1 ) * Math.random());
return mChoice[i];
}
let comp = ai();
console.log(comp);
let user = prompt("choose Rock, Paper or Scissors?")
console.log(user);
// console.log(comp);
// function userInput(){
// 	let x = document.getElementById("play").addEventListener("click", function(){
// 		document.getElementById("user").value;
// 		console.log("bye");
// 	})
	
// } 

function checkR() {
  let result;
  if((user === "paper" && comp === "rock") || (user === "rock" && comp === "scissors") || (user === "scissors" && comp === "paper")){
  	result = "You win";
  	console.log(result);

  }else if ((user === "rock" && comp === "paper") || (user === "scissors" && comp === "rock") || (user === "paper" && comp === "scissors")){
  	result = "Computer win";
  	console.log(result);

  } else if((user === "paper" && comp === "paper") || (user === "rock" && comp === "rock") || (user === "scissors" && comp === "scissors")){
  	result = "It's a draw";
  	console.log(result);

  }else {
  	console.log("lets play");

  }
}
checkR();



