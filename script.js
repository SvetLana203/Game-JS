const cardsAll = document.querySelectorAll('.a_card')
console.log(cardsAll)

function flipCard() {
  this.classList.toggle('flip')
}

cardsAll.forEach((card) => card.addEventListener('click', flipCard))
console.log(flipCard)

///////matching cards//////

// cardMatches = () => {
//  if()

//   }
// const cards = document.querySelectorAll('.a_card')
// console.log(cards)
// function flipCard() {
//   this.classList.toggle('flip')
// }

// cards.forEach((card) => card.addEventListener('click', flipCard))
