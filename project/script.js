
//    Different variable of the game
   
   let playerScore = 0;
    let computerScore = 0;
    let rock = 'rock';
    let paper = 'paper';
    let scisors = 'scisors';

    // game buttons








    // game logic


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
            computerScore++
            console.log(computerScore)
            return lose;
        } else if (( playerPlay === paper) && (getComputerChoice === scisors)){
            computerScore++
            console.log(computerScore)
            return lose;
        }else if (( playerPlay === scisors) && (getComputerChoice === rock)){
            computerScore++
            console.log(computerScore)
            return lose;
        }else{
            playerScore++
            console.log(playerScore)
            return win;
        }
    }

    
    
    for (let i = 0; playerScore < 5 && computerScore < 5; i++) {
        let playerPlay = prompt(('enter your move here').toLowerCase());

        console.log(roundPlay(playerPlay, getComputerChoice()))
        endPlay()  
     }
       
     
     
     // logic to play only five rounds

    //  function endPlay(){
    //     if (playerScore == 5){
    //         console.log("kabatiha")
    //     } else if (computerScore == 5)  {
    //         console.log('noud 3la slamtek')
    //     }
    //  }



     


     

     