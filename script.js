let cardArray = []
let cardFirst
let cardSecond

const cardsAll = document.querySelectorAll('.a_card')

console.log(cardsAll)

function flipCard(card) {
  card.classList.toggle('flip')
}

cardsAll.forEach((card, index) =>
  card.addEventListener('click', () => {
    flipCard(card)
    // cardArray.push(card.getAttribute('value'))

    console.log(card.getAttribute('value'))
    console.log(cardArray)
    cardMatches(card)
  })
)
console.log(flipCard)

///////matching cards//////

const cardMatches = (card) => {
  if (!cardFirst) {
    console.log('first card clicked')
    cardFirst = card.getAttribute('value')
  } else {
    cardSecond = card.getAttribute('value')
    console.log('second card clicked')
    if (cardFirst === cardSecond) {
      console.log('Match')
      freezeCards(card)
      cardFirst = null // reset// we are not comparing any cards
      cardSecond = null
    } else {
      console.log(' Cards are not matched')
      //
      cardFirst = null
      cardSecond = null
    }
  }
}
const freezeCards = (card) => {
  card.removeEventListener('click', flipCard)
  // cardSecond.removeEventListener('click', flipCard)
}

/////shuffling cards////

shuffleCard = () => {
  cardsAll.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12)
    card.style.order = ramdomPos
  })
}
shuffleCard()
