function getComputerChoice(){
    const computerOption =  ['rock', 'paper', 'scissors'];

    let computerChoice = Math.floor(Math.random( ) * 3);
    return computerOption[computerChoice];
}



const playRound = (playerSelectionChoice, computerChoice) =>{
    let playerSelection = playerSelectionChoice.toLowerCase();

    if(playerSelection === computerChoice) return "Run It Back, It's a tie";

    else if(playerSelection === 'paper' && computerChoice === 'rock') return'Paper wraps rock! User Wins';
    
    else if(playerSelection === 'paper' && computerChoice ==='scissors') return 'Scissors cuts paper! Computer wins';
    
    else if(playerSelection === 'rock' && computerChoice === 'paper') return 'Paper wraps rock! Computer Wins';

    else if(playerSelection === 'rock' && computerChoice === 'scissors') return 'rock smashes scissors! User Wins';

    else if(playerSelection ==='scissors' && computerChoice === 'paper') return 'Scissors cuts paper! User wins';

    else if(playerSelection ==='scissors' && computerChoice === 'rock') return 'rock smashes scissors! Computer Wins';

    else return 'Please Enter either rock, paper or scissor ';

}

// const player = "Rock";
// const computer = getComputerChoice();

// console.log(playRound(player, computer));


function game(){
    let userScore= 0, computerScore =0;

    while((userScore + computerScore) !== 5){
        let userChoice = prompt("Enter your weaopn");
        const winner = playRound(userChoice, getComputerChoice());

        if(winner.includes('User')){
            userScore++;
            console.log(` Player1:${userScore} \nComputer:${computerScore} `);
        }

        else if(winner.includes('Computer')){
            computerScore++;
            console.log(` Player1:${userScore} \nComputer:${computerScore} `);
        }
        else{
            console.log(winner);
        }
    }

    userScore > computerScore ? console.log('User Wins') : console.log('Computer Wins');


}

game();