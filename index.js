// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

let currentDog = {}
function render() {
  console.log("#1");
  currentDog = getNexDog()
  document.querySelector(".image-wrapper").innerHTML = currentDog.getDogHtml()
  
}

// DECLARE BUTTONS
const likeBtn = document.querySelector(".like-btn")
const passBtn = document.querySelector(".pass-btn")


// BUTTON LISTENERS
likeBtn.addEventListener('click', () => {
  disableButtons()
  document.querySelector(".image-wrapper").innerHTML += `<img src="./images/badge-like.png" alt="green liked badge" class="badge">`
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  setTimeout(() => {
    if(dogs == {}){
      disableButtons()
    } else {
      render()
    }
  }, 2000)
});

passBtn.addEventListener('click', () => {
  disableButtons()
  document.querySelector(".image-wrapper").innerHTML += `<img src="./images/badge-nope.png" alt="red nope badge" class="badge">`
  currentDog.hasBeenSwiped = true
  setTimeout(() => {
    if(dogs == {}){
      disableButtons()
    } else {
      render()
    }
  }, 2000)
});


function disableButtons() {
  likeBtn.disable = true
  passBtn.disable = true
}


render()
