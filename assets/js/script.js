// Game functions - code taken from https://marina-ferreira.github.io/tutorials/js/memory-game/ and amended

const cards = document.querySelectorAll(".memory-card");
const MAX_Match = 8;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let perfectMatch = 0;

// code for modal taken from https://www.w3schools.com/howto/howto_css_modals.asp
var modal = document.getElementById("myModal"); // How to play Modal
var btn = document.getElementById("myBtn"); // Get the button that opens the modal
var span = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();

  if (isMatch) perfectMatch += 1;

  if (perfectMatch === MAX_Match) winGame();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// Events

cards.forEach((card) => card.addEventListener("click", flipCard));

// Reset button
function reset() {
  setTimeout(() => {
    window.location.reload(true);
  }, 900);
}

// code for modal taken from https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
