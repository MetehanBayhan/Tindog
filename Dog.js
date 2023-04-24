// Create the Dog class here
import dogs from "./data.js"

class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const {avatar, name, age, bio} = this
    return `
    <img src="./${avatar}" alt="">
    <div class="gradient-overlay"></div>
    <div class="approve-box bg-for-nope">
      <p class="nope top-left-approve">NOPE</p>
    </div>
    <div class="image-info-wrapper">
        <h2 class="user-info">${name}, ${age}</h2>
        <p class="user-bio">${bio}</p>
    </div>
    `
  }

}


export default Dog
