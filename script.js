

let result = '';




const playGame = (player) => {
    let computerChoice = Math.random();

    if(player === 'rock'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            // computerChoice = 'rock';
            console.log("tie");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            // computerChoice = 'paper';
            console.log("lose");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            // computerChoice = 'scissors';
            console.log("win");
        }
    }else if(player === 'paper'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            // computerChoice = 'rock';
            console.log("Win");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            // computerChoice = 'paper';
            console.log("tie");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            // computerChoice = 'scissors';
            console.log("lose");
        }
    }else if(player === 'scissors'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            // computerChoice = 'rock';
            console.log("lose");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            // computerChoice = 'paper';
            console.log("win");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            // computerChoice = 'scissors';
            console.log("tie");
        }
    }
}

const restartGame = () => {
    console.log("0");
}



const btnRock = document.querySelector('.btnRock').addEventListener('click', () => playGame('rock'));
const btnPaper = document.querySelector('.btnPaper').addEventListener('click', () => playGame('paper'));
const btnScissors = document.querySelector('.btnScissors').addEventListener('click', () => playGame('scissors'));
const btnRestart = document.querySelector('.btnRestart').addEventListener('click', restartGame);