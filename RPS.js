const computer = document.querySelector('.score-computer'); 
const player = document.querySelector('.score-player');

const winner = document.querySelector('.winner');
const play = document.querySelector('.playAgain');

let userScore= 0, computerScore =0;

function getComputerChoice(){
    const computerOption =  ['rock', 'paper', 'scissors'];

    let computerChoice = Math.floor(Math.random( ) * 3);
    return computerOption[computerChoice];
}



const playRound = (playerSelection, computerChoice) =>{
    console.log(playerSelection);
    console.log(computerChoice);
    //let playerSelection = playerSelectionChoice.toLowerCase();

    if(playerSelection === computerChoice) return "Run It Back, It's a tie";

    else if(playerSelection === 'paper' && computerChoice === 'rock') return'Paper wraps rock! User Wins';
    
    else if(playerSelection === 'paper' && computerChoice ==='scissors') return 'Scissors cuts paper! Computer wins';
    
    else if(playerSelection === 'rock' && computerChoice === 'paper') return 'Paper wraps rock! Computer Wins';

    else if(playerSelection === 'rock' && computerChoice === 'scissors') return 'rock smashes scissors! User Wins';

    else if(playerSelection ==='scissors' && computerChoice === 'paper') return 'Scissors cuts paper! User wins';

    else if(playerSelection ==='scissors' && computerChoice === 'rock') return 'rock smashes scissors! Computer Wins';

    else return 'Please Enter either rock, paper or scissor ';

}

const buttons = document.querySelectorAll('.player-choices button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        

        const output = playRound(button.className, getComputerChoice());
        game(output);
        // console.log(button);
    });
});


function game(output){
    

    if(output.includes('User')){
        userScore++;
        player.textContent = userScore;
        console.log(` Player1:${userScore} \nComputer:${computerScore} `);
    }

    else if(output.includes('Computer')){
        computerScore++;
        computer.textContent =computerScore
        console.log(` Player1:${userScore} \nComputer:${computerScore} `);
    }
    else{
        console.log(output);
    }

    checkCount(computerScore, userScore);

}

function checkCount(computerPoints, userPoints){
    if((computerPoints === 5) || (userPoints ===5)){
        
        buttons.forEach(button =>{
            button.disabled = true;
            button.classList.add('noHover');

        })
        
        if(computerPoints > userPoints ){
            winner.textContent = 'Computer Wins';
        }

        else{
            winner.textContent = 'Player Wins';
        }
        play.style.visibility = 'visible';

        
    }

}



play.addEventListener('click', () => {

    console.log('Hello');
    startAgain();
});

function startAgain(){
    
    buttons.forEach(button =>{
        button.disabled = false;
        button.classList.remove('noHover');
    })

    userScore = 0, computerScore = 0;

    computer.textContent = computerScore;
    player.textContent = userScore;
    winner.textContent='';
    play.style.visibility= 'hidden';


   
}

// game();