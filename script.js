const cardsAll = document.querySelectorAll('.card')
console.log(cardsAll)

flipCard = () => {
  cardsAll.classList.toggle('flip') ///????
}

cardsAll.forEach((card) => cardsAll.addEventListener('click', flipCard()))

//   cardMatches = () => {
//  if()

//   }
