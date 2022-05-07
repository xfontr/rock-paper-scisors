
var wins = [0, 0, 0] // Player, Computer, Draws
var playerWon


function userPlays() {

    let userSelection = prompt("Please, chose between Rock, Paper or Scisors: ")
    userSelection = userSelection.toLowerCase()

if (userSelection ==! "rock" || userSelection ==! "paper" || userSelection ==! "scisors") {
    alert("Please, enter a valid value")
    userPlays()
}

return userSelection
}

function computerPlays() {

let randomNumber = Math.floor(Math.random() * 3)

if (randomNumber == 0) {
return "rock"
} else if (randomNumber == 1) {
    return "paper"
} else {
    return "scisors"
}

}

function playRound(playerSelection, computerSelection) { 

if (computerSelection === playerSelection) {
    playerWon = 0
    return "It's a draw!"
} else if (computerSelection === "rock" && playerSelection === "paper") {
    playerWon = true
    return "Your paper beats computer's rock! You won."
} else if (computerSelection === "rock" && playerSelection === "scisors") {
    playerWon = false
    return "Your scisors got destroyed by computer's rock! You lost."
} else if (computerSelection === "paper" && playerSelection === "rock") {
    playerWon = false
    return "Your rock couldn't resist the power of computer's paper. You lost!"
} else if (computerSelection === "paper" && playerSelection === "scisors") {
    playerWon = true
    return "Your scisors obliterated computer's paper! You won."
} else if (computerSelection === "scisors" && playerSelection === "rock") {
    playerWon = true
    return "Your rock beats computer's scisors. You won!"
} else if (computerSelection === "scisors" && playerSelection === "paper") {
    playerWon = false
    return "Your paper got cut real bad by computer's scisors. You lost!"
}

}

function winCount() {
    if (playerWon == true) {
        wins[0] += 1
        } else if (playerWon == false) {
            wins[1] += 1
        } else if (playerWon == 0) {
            wins[2] += 1
        }
}

function play() {

    for (let i = 0; i < 6; i++) {
    
        alert(playRound(userPlays(), computerPlays()))
        
        winCount()

    if (wins[0] == 3) {
    alert("User wins!")
    break

    } else if (wins[1] == 3) {
    alert("Computer wins!")
    break

    } else if (wins[2] == 6) {
    alert("You did 6 rounds yet it's a draw!")
    break
    }
    }

    //Restart the game
    wins = [0, 0, 0] // Player, Computer, Draws
    playerWon = 0

    }

    play()