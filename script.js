const cardsAll = document.querySelectorAll('.cards')
console.log(cardsAll)

flipCard = () => {
  cardsAll.classList.toggle('flip') ///????
}

cardsAll.forEach((card) => card.addEventListener('click', flipCard()))

//   cardMatches = () => {
//  if()

//   }
