let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userSc=document.querySelector("#user-score");
const compSc=document.querySelector("#comp-score");

const genCompChoice=()=>{
	const options=["rock","paper","scissors"];
	const ranIdx=Math.floor(Math.random()*3);
	return options[ranIdx];
}
const drawGame=()=>{
	
	msg.innerText="Game was draw,Play Again";
	msg.style.backgroundColor="yellow";
	msg.style.color="black";
}
const showWinner=(userWin,choiceID,compChoice)=>{
	if(userWin){
		useScore++;
		userSc.innerHTML=useScore;
		msg.innerText=`You win! Your ${choiceID} beats ${compChoice}`;
		msg.style.backgroundColor="green";
		msg.style.color="yellow";
	}else{
		compScore++;
		compSc.innerText=compScore;
		msg.innerText=`You lose ${compChoice} beats your ${choiceID}`;
		msg.style.backgroundColor="red";
	}
}
const playGame = (choiceID) => {
	console.log("user choice = ", choiceID);
	const compChoice=genCompChoice();
	console.log("comp choice = ", compChoice);
	if(choiceID===compChoice){
		drawGame();
	}else{
		let userWin=true;
		if(choiceID==="rock"){
			userWin=compChoice==="paper"?false:true;
		}else if(choiceID==="paper"){
			userWin=compChoice==="scissors"?false:true;
		}else{
			userWin=compChoice==="rock"?false:true;
		}
		showWinner(userWin,choiceID,compChoice);
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const choiceID = choice.getAttribute("id");
		console.log("choice was clicked", choiceID);
		playGame(choiceID);
	});
});
