let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const computerChoice_div = document.getElementById("comp-choice");


function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() *3))
    return choices[randomNumber];
}

getComputerChoice();

function game(userChoice){
    
    const computerChoice = getComputerChoice();

    computerChoice_div.innerHTML = "<img src=\"images/"
                    + computerChoice +
                    ".png\" height=\"70\" width=\"70\" alt=\"\"></img>"

    compare = userChoice + computerChoice
    switch(compare){
        case "rs":
        case "pr": 
        case "sp":
            result_div.innerHTML = "User scores!";
            userScore = userScore + 1;
            break;
        case "rp":
        case "ps": 
        case "sr":
            result_div.innerHTML = "Comp scores!";
            computerScore = computerScore + 1;
            break;
        case "rr":
        case "pp": 
        case "ss":
            result_div.innerHTML = "TIE!";
            break;
            
    }

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userScore == 10){
        result_div.innerHTML = "User Wins! <br><button class=\"play-again\" id=\"but\">Play Again</button>";
        userScore = 0;
        computerScore = 0;
        clear();
        return;
    }
    if (computerScore == 10){
        result_div.innerHTML = "Comp Wins! <br><button class=\"play-again\" id=\"but\">Play Again</button>";
        userScore = 0;
        computerScore = 0;
        clear();
        return;
    }
}

function clear(){
    const reset_button = document.getElementById("but");
    reset_button.addEventListener('click', function(){
        userScore_span.innerHTML = 0;
        computerScore_span.innerHTML = 0;
        result_div.innerHTML = "Lets Play!";
    })
}



function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main();
