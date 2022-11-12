// Game functions - code taken from https://marina-ferreira.github.io/tutorials/js/memory-game/ and amended

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// code for modal taken from https://www.w3schools.com/howto/howto_css_modals.asp
var playModal = document.getElementById("howToPlay"); // How to play Modal
var themeModal = document.getElementById("themeChoice"); // Theme Choice Modal
var play = document.getElementById("playBtn"); // Get the button that opens the modal
var theme = document.getElementById("themeBtn"); // Theme Choices
var spanPlay = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var spanTheme = document.getElementsByClassName("close")[1]; // Get the <span> element that closes the modal

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

// Set Theme
function setTheme(choice) {
  var gameAreaHTML = document.querySelector('.game-area');

  if (choice === 'animals') {
    var gameAreaContents = `
    <!-- Game Board (code taken from https://marina-ferreira.github.io/tutorials/js/memory-game/)-->
    <div class="memory-game">
      <!-- Card Images -->
      <div class="memory-card" data-framework="cat">
        <img class="front-face" src="assets/images/cat.webp" alt="Cat">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="cat">
        <img class="front-face" src="assets/images/cat.webp" alt="Cat">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="chicken">
        <img
          class="front-face"
          src="assets/images/chicken.webp"
          alt="Chicken">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="chicken">
        <img
          class="front-face"
          src="assets/images/chicken.webp"
          alt="Chicken">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="cows">
        <img class="front-face" src="assets/images/cows.webp" alt="Cows">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="cows">
        <img class="front-face" src="assets/images/cows.webp" alt="Cows">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="dogs">
        <img class="front-face" src="assets/images/dog.webp" alt="Dogs">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="dogs">
        <img class="front-face" src="assets/images/dog.webp" alt="Dogs">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="fish-pond">
        <img
          class="front-face"
          src="assets/images/fish-pond.webp"
          alt="fish-pond">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="fish-pond">
        <img
          class="front-face"
          src="assets/images/fish-pond.webp"
          alt="fish-pond">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="guinea-pig">
        <img
          class="front-face"
          src="assets/images/guinea-pig.webp"
          alt="Guinea-pig">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="guinea-pig">
        <img
          class="front-face"
          src="assets/images/guinea-pig.webp"
          alt="Guinea-pig">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="parrots">
        <img
          class="front-face"
          src="assets/images/parrots.webp"
          alt="Parrots">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="parrots">
        <img
          class="front-face"
          src="assets/images/parrots.webp"
          alt="Parrots">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="rabbits">
        <img
          class="front-face"
          src="assets/images/rabbits.webp"
          alt="Rabbits">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>

      <div class="memory-card" data-framework="rabbits">
        <img
          class="front-face"
          src="assets/images/rabbits.webp"
          alt="Rabbits">
        <img
          class="back-face"
          src="assets/images/card-back-image.webp"
          alt="Spiral Card">
      </div>
    </div>
    `
    gameAreaHTML.innerHTML = gameAreaContents;
  }

  if (choice === 'space') {
    console.log('you choose space!');
    var gameAreaContents = `
    <div class="memory-game">
    <!-- Card Images -->
          <div class="memory-card" data-framework="cat">
            <img class="front-face" src="assets/images/cat.webp" alt="Cat">
            <img
              class="back-face"
              src="assets/images/card-back-image.webp"
              alt="Spiral Card"></img>
    </div>`
    gameAreaHTML.innerHTML = gameAreaContents;
  }
}

// code for modal taken from https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on the button, open the modal
play.onclick = function () {
  playModal.style.display = "block";
};

// When the user clicks on <span> (x), close the playmodal
spanPlay.onclick = function () {
  playModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == playModal || event.target == themeModal) {
    playModal.style.display = "none";
    themeModal.style.display = "none";
  }
};

// Theme Chooser
theme.onclick = function() {
  themeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the themeModal
spanTheme.onclick = function () {
  themeModal.style.display = "none";
};