let playerScore = 0;
    let computerScore = 0;
 


const pickUserHand = (hand) => {
    let playerPlay = hand;
    console.log(roundPlay(playerPlay, getComputerChoice()))
    
}





// game logic


function getComputerChoice(){
let getRandom = Math.random()
    if (getRandom <=0.33){
        // console.log(getRandom)
        return 'rock';
    } else if (getRandom >= 0.34 && getRandom <= 0.66){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function roundPlay(playerPlay, getComputerChoice){
let tie = 'its a tie';
let lose = 'you lose';
let win = 'you win';
    // console.log(getComputerChoice)
    if (playerPlay === getComputerChoice){
        return tie
    } else if ((playerPlay === 'rock') && (getComputerChoice === 'paper')){
        computerScore++
        console.log(computerScore)
        return lose;
    } else if (( playerPlay === 'paper') && (getComputerChoice === 'scissors')){
        computerScore++
        console.log(computerScore)
        return lose;
    }else if (( playerPlay === 'scissors') && (getComputerChoice === 'rock')){
        computerScore++
        console.log(computerScore)
        return lose;
    }else{
        playerScore++
        console.log(playerScore)
        return win;
    }
}
    

    // console.log(roundPlay(playerPlay, getComputerChoice()))
    // endPlay()  
 
   
 
 
 // logic to play only five rounds

//  function endPlay(){
//     if (playerScore == 5){
//         console.log("kabatiha")
//     } else if (computerScore == 5)  {
//         console.log('noud 3la slamtek')
//     }
//  }