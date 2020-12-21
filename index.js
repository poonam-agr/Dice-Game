let player1Score = 0
let player2Score = 0
let player1Turn = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const images=document.getElementById("images")
function showResetButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Hook up a click event listener to the Roll Dice Button. */
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const cow = Math.floor(Math.random() * 2)
    const cowNumber= Math.floor(Math.random() * 6) + 1;
    // if(cow)
    // {
    //    images.style.display="block";
    //    images.classList.add("cow");
    //    cowNumber= Math.floor(Math.random() * 6) + 1
    // }
    // else
    // {
    //     images.style.display="none";
    //    images.classList.remove("cow");
    // }
    if (player1Turn) {
        player1Score += randomNumber
        if(cow==1)
        {
            player1Score=Math.max(player1Score-cowNumber,0)
            images.classList.add("cow");
            images.style.display="block"; 
            let myVar = setTimeout(function(){ images.classList.remove("cow") 
            images.style.display="none";
        }, 2000);
        }
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        if(cow==1)
        {
            player2Score=Math.max(player2Score-cowNumber,0);

            images.classList.add("cow");
            images.style.display="block"; 
            let myVar = setTimeout(function(){
             images.classList.remove("cow")
             images.style.display="none"; 
             }, 2000);
        }
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }

    
    if (player1Score >= 20) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    message.textContent = "Player 1 Turn"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}
