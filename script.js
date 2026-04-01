

let result = '';

// to show choice of both player and computer via emogis
const chosen = document.querySelector('.chosen');
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
            console.log("tie");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            console.log("You lose");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
            console.log("win");
        }
    }else if(player === 'paper'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            computerChoice = 'rock';
            comIcon(player, computerChoice);
            console.log("You Win");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            console.log("tie");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
            console.log("You lose");
        }
    }else if(player === 'scissors'){
        if(computerChoice < 1/3 && computerChoice > 0) {
            computerChoice = 'rock';
            comIcon(player, computerChoice);
            console.log("You lose");
        }else if(computerChoice <2/3 && computerChoice > 1/3){
            computerChoice = 'paper';
            comIcon(player, computerChoice);
            console.log("win");
        }else if(computerChoice < 1 && computerChoice > 2/3){
            computerChoice = 'scissors';
            comIcon(player, computerChoice);
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