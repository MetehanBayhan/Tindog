// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"

const approveBox = document.querySelector(".approve-box")


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
  currentDog = getNexDog()
  document.querySelector(".image-wrapper").innerHTML = currentDog.getDogHtml()
  approveBox.innerHTML = ``
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
  approveBox.innerHTML = 
  approveBox.classList.add("bg-for-like")
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
}

function handleNopeBtn() {
  approveBox.innerHTML = `<p class="nope top-left-approve">NOPE</p>`
  approveBox.classList.add("bg-for-nope")
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
}


let currentDog = {}
render()