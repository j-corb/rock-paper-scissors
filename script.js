function computerPlay() {
    let compMove = '';
    let i = Math.floor(Math.random() * 3) +1;
    if (i === 1) {
        compMove = 'Rock';
    } else if (i === 2) {
        compMove = 'Paper';
    } else {
        compMove = 'Scissors';
    }
    return compMove.toLowerCase();
}

function playerSelection() {
    playerMove = prompt('Please make your choice').toLowerCase();
    return playerMove;
}

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
    return outcome;
}

function game () {
    let human = 0;
    let computer = 0;
    //could increase the counter to allow smt like 9 games but put an if condition to stop when human or comp = 5
    for (let i=0; i<9; i++) {
        if (human === 5 || computer === 5) {
            break
        }
        outcome = playRound(computerPlay(), playerSelection())
      if (outcome.includes("You win")) {
        human++;
      } else if (outcome.includes("You lose")) {
        computer++;
      } else {
        i--;
      }
    console.log(outcome)
    console.log(`You: ${human}\n Computer: ${computer}`)
    }
    if (human > computer) {
        console.log("Congratulations, you have beaten the machine.");
    } else if (computer > human) {
        console.log("The machines have won.")
    } else {
        console.log("Man and machine are equal.")
    }
}
