const wrapper = document.querySelector(".wrapper");
const gameContainer = document.querySelector(".gameContainer");
const box = document.querySelectorAll(".box");

let firstClickedBox;
let secondClickedBox;
let canAllowClick = true;
let emojis = [
  { emoji: "😁", class: "laugh" },
  { emoji: "🌚", class: "blackface" },
  { emoji: "😍", class: "love" },
  { emoji: "👅", class: "tongue" }
];

window.onload = function() {
  changeEmojiArrangement();
};

function changeEmojiArrangement() {
  box.forEach(function(el) {
    let randomNumber = Math.round(Math.random() * 3);
    let emojiArray = emojis[randomNumber];
    el.firstChild.innerHTML = emojiArray.emoji;
    el.firstChild.className = emojiArray.class;
    el.onclick = showEmoji;
  });
}

function showEmoji() {
  if (!canAllowClick) {
    return;
  }
  if (this.firstChild.style.display == "block") {
    return alert("Click another box");
  }
  this.firstChild.style.display = "block";
  if (!firstClickedBox) {
    return (firstClickedBox = this.firstChild);
  }
  secondClickedBox = this.firstChild;

  canAllowClick = false;
  if (firstClickedBox.className !== secondClickedBox.className) {
    firstClickedBox.parentElement.style.backgroundColor = "red";
    this.style.backgroundColor = "red";
  } else {
    firstClickedBox.parentElement.style.backgroundColor = "green";
    this.style.backgroundColor = "green";
  }

  setTimeout(function() {
    firstClickedBox.parentElement.style.backgroundColor = "white";
    secondClickedBox.parentElement.style.backgroundColor = "white";
    firstClickedBox.style.display = "";
    secondClickedBox.style.display = "";
    firstClickedBox = undefined;
    secondClickedBox = undefined;
    canAllowClick = true;
    changeEmojiArrangement();
  }, 1000);
  return;
}
