let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

if (sum <= 20) {
  console.log("Do you want to draw a new card?");
} else if (sum === 21) {
  console.log("Blackjack!");
  hasBlackjack = true
} else {
  console.log("Bust!");
  isAlive = false
}
