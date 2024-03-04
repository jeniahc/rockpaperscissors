const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelector(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach = (option => {
            option.addEventListener("click", function(){
            //computer choice
             const computerNumber = Math.floor(Math.random() * 3);   
             const computerChoice = computerOptions[computerNumber];
            //here is where we will call comparehands
            compareHands(this.textContent, computerChoice);
             //update images
             playerHand.src = `./images/${this.textContent}.png`;
             computerHand.src = `./images/${computerChoice}.png`;

             console.log(this);
            });
        }); 
    };
    const compareHands = (playerChoice, computerChoice) =>{
        const winner = document.querySelector(".winner");
        if(playerChoice === computerChoice){
            winner.textContent = "It is a Tie";
            return;
        }
        //check for rock
        if(playerChoice = "rock"){
            if(computerChoice = "scissors"){
                winner.textContent = "Player Wins";
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }
        //check for paper
        if(playerChoice = "paper"){
            if(computerChoice = "scissors"){
                winner.textContent = "Player Wins";
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }
        //check for scissors
        if(playerChoice = "scissors"){
            if(computerChoice = "paper"){
                winner.textContent = "Player Wins";
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }
    }


    //calls the inner function
    startGame();
    playMatch();
};

//start the game function
game();