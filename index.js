// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

let currentDog = {}
function render() {
  if(dogs.length > 0 ){
    enableSwipeButtons()
    currentDog = getNexDog()
    document.querySelector(".image-wrapper").innerHTML = currentDog.getDogHtml()
  }else{
    console.log("data is empty");
    disableSwipeButtons()
  }
}

// DECLARE BUTTONS
const likeBtn = document.querySelector(".like-btn")
const passBtn = document.querySelector(".pass-btn")

// BUTTON LISTENERS
likeBtn.addEventListener('click', () => {
  disableSwipeButtons()
  document.querySelector(".image-wrapper").innerHTML += `<img src="./images/badge-like.png" alt="green liked badge" class="badge">`
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
});

passBtn.addEventListener('click', () => {
  disableSwipeButtons()
  document.querySelector(".image-wrapper").innerHTML += `<img src="./images/badge-nope.png" alt="red nope badge" class="badge">`
  currentDog.hasBeenSwiped = true
  setTimeout(render, 2000)
});


function disableSwipeButtons() {
  likeBtn.disabled = true
  passBtn.disabled = true
}

function enableSwipeButtons() {
  likeBtn.disabled = false
  passBtn.disabled = false
}

render()
