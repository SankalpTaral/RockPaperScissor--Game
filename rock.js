

let userPoints=0;
let compPoints=0;

let userDisplay=document.querySelector(".user-score");
let compDisplay=document.querySelector(".computer-score");

let msgBtn=document.querySelector(".pickmovebtn");

function gencompChoice(){
    // rock paper scissors
const options=["rock","paper","scissors"];
    // why stored in an array because no straight forward approach to pick random string so
 const randIdx=Math.floor(Math.random()*3);
 return options[randIdx]; // here i get computer Choice
}

function drawGame(){
console.log("Game Was Draw");
msgBtn.innerText="Game Draw,Please Try Again";
msgBtn.style.backgroundColor="blue";
}

function showWinner(userWin){
    if(userWin){
        console.log("You Won");
        msgBtn.innerText="You Win";
        msgBtn.style.backgroundColor="green";
        userPoints+=1;
        userDisplay.innerText=userPoints;


    }
    else{
        console.log("You Lost");
        msgBtn.innerText="You Lost";
        msgBtn.style.backgroundColor="red";
        // 
        compPoints+=1;
        compDisplay.innerText=compPoints;
    }

}
function playGame(userChoice){
    console.log("User Choice = ",userChoice);
    // generate Computer Choice
    let compChoice=gencompChoice();
    console.log("Computer Choice =",compChoice);

    if(userChoice===compChoice){
        // then game draw;
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // if computer would be rock it would be draw
            // scissors,papper
         userWin=  compChoice==="paper" ? false:true // here computer wins

        }
        else if(userChoice==="paper"){
            // scissor or rock
          userWin=compChoice==="scissors"?false: true;
        }
        else{ // userChoice is Scissor
            // comp has rock paper
           userWin= compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

let choices=document.querySelectorAll(".buttons");
choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})






