function computerPlay() {
    let compMove = '';
    let i = Math.floor(Math.random() * 3) +1;
    //generate random number between 1 and 3
    if (i === 1) {
        compMove = 'Rock';
    } else if (i === 2) {
        compMove = 'Paper';
    } else {
        compMove = 'Scissors';
    }
    return compMove.toLowerCase();
}

//function playerSelection() {
 //   playerMove = prompt('Please make your choice').toLowerCase();
 //   return playerMove;
//}

function playRound (comp, choice) {
    let outcome = '';

    if (comp === 'rock' && choice === 'paper') {
        outcome = 'Paper beats rock. You win!!!';
    } else if (comp === 'rock' && choice === 'rock') {
        outcome = "It's a tie...";
    } else if (comp === 'rock' && choice === 'scissors') {
        outcome = 'Rock beats Scissors... You lose :(';
    } else if (comp === 'paper' && choice === 'paper') {
        outcome = "It's a tie...";
    } else if (comp === 'paper' && choice === 'scissors') {
        outcome = 'Scissors beats Paper. You win!!!';
    } else if (comp === 'paper' && choice === 'rock') {
        outcome = "Paper beats Rock... You lose :(";
    } else if (comp === 'scissors' && choice === 'scissors') {
        outcome = "It's a tie...";
    } else if (comp === 'scissors' && choice === 'rock') {
        outcome = "Rock beats Scissors. You win!!!";
    } else if (comp === 'scissors' && choice === 'paper') {
        outcome = 'Scisors beats paper... You lose :(';
    }
    gameCounter(outcome);
    result.textContent = outcome;
    result.setAttribute('style', 'color: yellow; background: red;')
    container.appendChild(result);
    console.log(outcome)
}

function gameCounter(outcome) {
   
    if (outcome.includes("You win")) {
        human++
    } else if (outcome.includes("You lose")) {
        computer++
    }
    update.textContent = `You: ${human}\n Computer: ${computer}`;
    container.appendChild(update)
    if (human === 5 || computer === 5) {
        if (human > computer) {
            final.textContent = 'The human has won';
            container.appendChild(final);
            rock.disabled=true;
            paper.disabled=true;
            scissors.disabled=true;
            const refresh = document.createElement('button');
            refresh.textContent = 'Play Again';
            container.appendChild(refresh);
            refresh.addEventListener('click', reload);
        } else {
            final.textContent = 'The computer has won';
            container.appendChild(final);
            rock.disabled=true;
            paper.disabled=true;
            scissors.disabled=true;
            const refresh = document.createElement('button');
            refresh.textContent = 'Play Again';
            container.appendChild(refresh);
            refresh.addEventListener('click', reload);
            
        }
    } 
}

function reload() {
    document.location.reload();
}

let human = 0;
let computer = 0;

const update = document.createElement('div');
const final = document.createElement('div');

const container = document.querySelector('#container');
const result = document.createElement('div');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound(computerPlay(), 'rock')});
paper.addEventListener('click', () => {playRound(computerPlay(), 'paper')});
scissors.addEventListener('click', () => {playRound(computerPlay(), 'scissors')});


