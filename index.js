// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
  console.log(currentDog)
  currentDog = getNexDog()
  document.querySelector(".image-wrapper").innerHTML = currentDog.getDogHtml()
  
}

const likeBtn = document.querySelector(".like-btn")
const passBtn = document.querySelector(".pass-btn")

likeBtn.addEventListener('click', () => {
  handleLikeBtn()
});

passBtn.addEventListener('click', () => {
  handleNopeBtn()
});

function handleLikeBtn() {
  disableButtons()

  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
}

function handleNopeBtn() {
  disableButtons()
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
}

function disableButtons() {
  likeBtn.disable = true
  passBtn.disable = true
}

let currentDog = {}
render()
