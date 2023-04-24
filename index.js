// Remember to import the data and Dog class!
import dogs from "./data.js"
import Dog from "./Dog.js"


function getNexDog() {
  const nextDogData = dogs.shift()
  return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
  document.querySelector(".image-wrapper").innerHTML = currentDog.getDogHtml()
}



const likeBtn = document.querySelector(".like-btn")
const passBtn = document.querySelector(".pass-btn")

likeBtn.addEventListener('click', function() {
  currentDog.hasBeenLiked = true
  currentDog.hasBeenSwiped = true
  console.log(currentDog)
  currentDog = getNexDog()
  render()
});

passBtn.addEventListener('click', function() {
  currentDog.hasBeenSwiped = true
  console.log(currentDog)
  currentDog = getNexDog()
  render()
});


let currentDog = getNexDog()
render()