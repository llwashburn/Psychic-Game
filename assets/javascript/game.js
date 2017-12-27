 //Psychic Game Script
 //create an array with alphabet - randomLetter
 var randomLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var wins = 0; //records wins
 var losses = 0; //records losses
 var letterGuessed = ""; //array to record the letter the player guesses
 var playerGuessesLeft = 10; // player gets 10 guesses
 //select a random letter for the computerChoice / set randomLetter to equal computerChoice
 var computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)]


 // make a reset function 
 // reset playerGuessesLeft 
 // reset computerChoice 
 function reset() {
     playerGuessesLeft = 10;
     computerChoice = randomLetter[Math.floor(Math.random() * randomLetter.length)];
 }

 // make a render function 
 // display wins
 // display losses
 // display letterGuessed

 function render() {
     document.getElementById("wins").innerHTML = "Wins: " + wins;
     document.getElementById("losses").innerHTML = "Losses: " + losses;
     document.getElementById("youGuessed").innerHTML = "You Guessed: " + letterGuessed;

 }

 //code to start game
 document.onkeypress = function(event) {
     console.log(event.key);
     letterGuessed = event.key;
     render();
     console.log("comp choice", computerChoice);
     console.log("letterGuess", letterGuessed);

     //player selects letter, the letter is saved to letterGuessed variable and "youGuessed"
     if (letterGuessed === computerChoice) {
         alert("You win")
             //counter - player wins 1 point added to wins
         wins++;
         reset();
         render();
     }

     //if the guess is incorrect 
     //then decrement guessesLeft 
     //if guessesLeft === 0
     //then they lose
     if (letterGuessed !== computerChoice) {
         playerGuessesLeft--;
         if (playerGuessesLeft === 0) {
             alert("You lose");
             losses++;
             reset();
             render();
         }

     }

 }


























 //when player wins 
 //increase wins counter 
 //start game over (without refreshing page)










 // Placing the html into the game ID
 //document.querySelector('#psychicgame').innerHTML = html;