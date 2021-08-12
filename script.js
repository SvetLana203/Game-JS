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
    if (card.classList.contains('finished')) {
    } else {
      flipCard(card)
      // cardArray.push(card.getAttribute('value'))

      console.log(card.getAttribute('value'))
      console.log(cardArray)
      cardMatches(card)
    }
  })
)
console.log(flipCard)

///////matching cards//////
const freezeCards = (card) => {
  card.classList.add('finished')

  console.log('card', card)
  //cardSecond.removeEventListener('click', flipCard(card))
}
const flipBack = (card) => {}

const cardMatches = (card) => {
  if (!cardFirst) {
    console.log('first card clicked')
    cardFirst = card
  } else {
    cardSecond = card
    console.log('second card clicked')
    if (cardFirst.getAttribute('value') === cardSecond.getAttribute('value')) {
      console.log('Match')
      freezeCards(cardFirst)
      freezeCards(cardSecond)
      //freezeCards(cardSecond) // cards must stay opened if match
      cardFirst = null // reset// we are not comparing any cards
      cardSecond = null
    } else {
      console.log('Cards are not matched')
      setTimeout(flipCard(cardFirst), 3000)
      setTimeout(flipCard(cardSecond), 3000) // cards must flip back if not match
      cardFirst = null
      cardSecond = null
    }
  }
}

/////shuffling cards////

shuffleCard = () => {
  cardsAll.forEach((card) => {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random
  })
}
shuffleCard()
