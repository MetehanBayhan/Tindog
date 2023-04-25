// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
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
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  document.querySelector(".image-wrapper").innerHTML += `
  <div class="approve-box-wrapper bg-for-liked">
    <p class="approve-box liked">LIKE</p>
  </div>`
  setTimeout(render, 2000)
}

function handleNopeBtn() {
  document.querySelector(".image-wrapper").innerHTML += `
  <div class="approve-box-wrapper bg-for-nope">
    <p class="approve-box nope">NOPE</p>
  </div>`
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
}


let currentDog = {}
render()