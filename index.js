let firstCard = 6
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
    sumEl.textContent = "Sum: " + sum
  } else if (sum === 21) {
    message = "Blackjack!"
    sumEl.textContent = "Sum: " + sum
    hasBlackjack = true
  } else {
    message = "Bust!"
    sumEl.textContent = "Sum: " + sum
    isAlive = false
  }
  messageEl.textContent = message
}
