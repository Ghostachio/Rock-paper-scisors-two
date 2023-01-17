    let playerScore = 0;
    let computerScore = 0;
    let theResult = document.getElementById('theResults');
    let tie = 'its a tie';
    let lose = 'you lose';
    let win = 'you win';
    let playerImage = document.getElementById('playerImg');
    let computerImage = document.getElementById('computerImg')
    let finalResult = document.getElementById('theResults')
    let cumulativePlayerScore = document.getElementById('skr')
    let endingGame = document.getElementById('finally')
    let resultOne = 'YOU WIN'
    let resultTwo = 'YOU LOSE'
    let hands = document.querySelector(".handsigns");
    let contests = document.querySelector(".contest");



    function playAgainButton(){
        //hide contest box
        
    contests.style.display = "none";
        // show handsigns box
        
    hands.style.display = "flex";
    }
 


function pickUserHand(hand) {
    let playerPlay = hand;
    let resultT= roundPlay(playerPlay, getComputerChoice());
    console.log(computerScore, playerScore)
    // hide current div
  
    hands.style.display = "none";
    // show result container
    
    contests.style.display = "flex";
    if (hand == "rock"){
        playerImage.src='/assets/Rock.png'
    } else if ( hand == 'paper'){
        playerImage.src='/assets/Paper.png'
    }else{
        playerImage.src='/assets/Scissors.png'
    }
    finalResult.innerHTML = resultT
    cumulativePlayerScore.innerHTML = playerScore

    endPlay()


}





// game logic


function getComputerChoice(){
let getRandom = Math.random()
    if (getRandom <=0.33){
        // console.log(getRandom)
        computerImage.src='/assets/Rock.png'
        return 'rock';
    } else if (getRandom >= 0.34 && getRandom <= 0.66){
        computerImage.src='/assets/Paper.png'
        return 'paper';
    } else {
        computerImage.src='/assets/Scissors.png'
        return 'scissors';
    }
}

function roundPlay(playerPlay, getComputerChoice){

    // console.log(getComputerChoice)
    if (playerPlay === getComputerChoice){
        return tie
    } else if ((playerPlay === 'rock') && (getComputerChoice === 'paper')){
        computerScore++
        // console.log(computerScore)
        return lose;
    } else if (( playerPlay === 'paper') && (getComputerChoice === 'scissors')){
        computerScore++
        // return(computerScore)
        return lose;
    }else if (( playerPlay === 'scissors') && (getComputerChoice === 'rock')){
        computerScore++
        // return(computerScore)
        return lose;
    }else{
        playerScore++
        // console.log(playerScore)
        return win;
    }
}


    // console.log(roundPlay(playerPlay, getComputerChoice()))
    // endPlay()  
 
   
 
 
 // logic to play only five rounds

 function endPlay(){
    if (playerScore == 5){
        console.log("YOU WIN")
        endingGame.innerHTML= resultOne
        endingGame.style.display='flex'
        contests.style.display='none'
        hands.style.display='none'
        
    } else if (computerScore == 5)  {
        console.log('YOU LOSE')
        endingGame.innerHTML= resultTwo
        endingGame.style.display='flex'
        contests.style.display='none'
        hands.style.display='none'
    }

 }