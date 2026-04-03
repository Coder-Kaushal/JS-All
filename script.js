
const chosen = document.querySelector('.chosen');
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const tie = document.querySelector('.tie');
const yourScore = document.querySelector('.yourScore');
const computerScore = document.querySelector('.computerScore');
let result = '';let wincount = 0; let losecount = 0; let tiecount = 0;

const score = JSON.parse(localStorage.getItem('score'))||{
    playercount : 0,
    compcount : 0
};
win.innerText = `Wins: ${wincount}`;
lose.innerText = `Loses: ${losecount}`;
tie.innerText = `Ties: ${tiecount}`;
yourScore.innerText = `Your Score: ${score.playercount}`;
computerScore.innerText = `Computer Score: ${score.compcount}`;

// to show choice of both player and computer via emogis
const comIcon = (player, computerChoice) => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    div1.style.backgroundImage = `url('images/${player}-emoji.png')`;
    div1.style.width = "50px";
    div1.style.height = "50px";
    div1.style.backgroundSize = "cover";
    div1.style.alignContent = "end";
    div1.style.borderRadius = "50%";
    const p1 = document.createElement('h5');
    p1.textContent = "You";
    p1.style.opacity = "0.3";
    div1.appendChild(p1);

    div2.style.backgroundImage = `url('images/${computerChoice}-emoji.png')`;
    div2.style.width = "50px";
    div2.style.height = "50px";
    div2.style.backgroundSize = "cover";   
    div2.style.borderRadius = "50%";
    div2.style.alignContent = "end";
    const p2 = document.createElement('h5');
    p2.textContent = "Com";
    p2.style.opacity = "0.3";
    div2.appendChild(p2);
    
    chosen.innerHTML = '';
    chosen.appendChild(div1);
    chosen.appendChild(div2);     
}



// algorithm to find winner and compare choices of player and computer
const playGame = (player) => {
    let computerChoice = Math.random();

    if(player === 'rock'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            computerChoice = 'rock';
            comIcon(player, computerChoice);
            tie.innerText = `Ties: ${++tiecount}`;
            console.log("tie");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            lose.innerText = `Loses: ${++losecount}`;
            computerScore.innerText = `Computer Score: ${score.compcount += 1}`;  
            localStorage.setItem('score', JSON.stringify(score));
            console.log("You lose");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
            win.innerText = `Wins: ${++wincount}`;
            yourScore.innerText = `Your Score: ${score.playercount += 1}`;
            localStorage.setItem('score', JSON.stringify(score));
            console.log("win");
        }
    }else if(player === 'paper'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            computerChoice = 'rock';
            comIcon(player, computerChoice);
            win.innerText = `Wins: ${++wincount}`;
            yourScore.innerText = `Your Score: ${score.playercount += 1}`;
            localStorage.setItem('score', JSON.stringify(score));
            console.log("You Win");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            tie.innerText = `Ties: ${++tiecount}`;
            console.log("tie");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
            lose.innerText = `Loses: ${++losecount}`;
            computerScore.innerText = `Computer Score: ${score.compcount += 1}`;
            localStorage.setItem('score', JSON.stringify(score));
            console.log("You lose");
        }
    }else if(player === 'scissors'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            computerChoice = 'rock';
            comIcon(player, computerChoice);
            lose.innerText = `Loses: ${++losecount}`;
            computerScore.innerText = `Computer Score: ${score.compcount += 1}`;
            localStorage.setItem('score', JSON.stringify(score));
            console.log("You lose");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            win.innerText = `Wins: ${++wincount}`;
            yourScore.innerText = `Your Score: ${score.playercount += 1}`;
            localStorage.setItem('score', JSON.stringify(score));
            console.log("win");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
            tie.innerText = `Ties: ${++tiecount}`;
            console.log("tie");
        }
    }
    
}



const restartGame = (val) => {
    if(val){
        wincount = 0; losecount = 0; tiecount = 0;
        win.innerText = `Wins: ${wincount}`;
        lose.innerText = `Loses: ${losecount}`;
        tie.innerText = `Ties: ${tiecount}`;
        chosen.innerHTML = '';
    }
    if(!val){
        wincount = 0; losecount = 0; tiecount = 0;
        win.innerText = `Wins: ${wincount}`;
        lose.innerText = `Loses: ${losecount}`;
        tie.innerText = `Ties: ${tiecount}`;
        yourScore.innerText = `Your Score: ${score.playercount = 0}`;
        computerScore.innerText = `Computer Score: ${score.compcount = 0}`;
        localStorage.removeItem('score');
        chosen.innerHTML = '';
        
    }
    console.log("0");
}



document.querySelector('.btnRock').addEventListener('click', () => playGame('rock'));
document.querySelector('.btnPaper').addEventListener('click', () => playGame('paper'));
document.querySelector('.btnScissors').addEventListener('click', () => playGame('scissors'));
document.querySelector('.btnRestart').addEventListener('click', () => restartGame(true));
document.querySelector('.btnReset').addEventListener('click', () => restartGame(false));