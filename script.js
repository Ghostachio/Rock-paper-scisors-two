
    let score = 0
    let rock = 'rock';
    let paper = 'paper';
    let scisors = 'scisors';


function getComputerChoice(){
    let getRandom = Math.random()
        if (getRandom <=0.33){
            // console.log(getRandom)
            return rock;
        } else if (getRandom >= 0.34 && getRandom <= 0.66){
            return paper;
        } else {
            return scisors;
        }
}

function roundPlay(playerPlay, getComputerChoice){
    let tie = 'its a tie';
    let lose = 'you lose';
    let win = 'you win';
        if (playerPlay === getComputerChoice){
            return tie
        } else if ((playerPlay === rock) && (getComputerChoice === paper)){
            return lose;
        } else if (( playerPlay === paper) && (getComputerChoice === scisors)){
            return lose;
        }else if (( playerPlay === scisors) && (getComputerChoice === rock)){
            return lose;
        }else{
            return win;
        }
    }

    
    
    for (let i = 0; i < 5; i++) {
        let playerPlay = prompt(('enter your move here').toLowerCase());

        console.log(roundPlay(playerPlay, getComputerChoice()))  
     }

     


     

     