let animalMode = document.getElementById("animals");
let spaceMode = document.getElementById("space");
let sportMode = document.getElementById("sports")

const cards = document.querySelectorAll(".memory-card");
const cards1 = document.querySelectorAll(".space-memory-card")

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cardCorrect = 0;


// code for modal was taken from https://www.w3schools.com/howto/howto_css_modals.asp and amended to suit.
var playModal = document.getElementById("howToPlay"); // How to play Modal
var themeModal = document.getElementById("themeChoice"); // Theme Choice Modal
var winModal = document.getElementById("winText");
var play = document.getElementById("playBtn"); // Get the button that opens the modal
var theme = document.getElementById("themeBtn"); // Theme Choices
var win = document.getElementById("winModal"); // Win Modal
var spanPlay = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var spanTheme = document.getElementsByClassName("close")[1]; // Get the <span> element that closes the modal
var spanWin = document.getElementsByClassName("close")[2]; // Get the <span> element that closes the modal

function flipCard() {
  console.log("I was clicked");
  console.log(this);
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } else {

  secondCard = this;

  checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  isMatch ? disableCards() : unflipCards();
  
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  cardCorrect++;
  if (cardCorrect === 8) {
    setTimeout(function () {
      endModal();
    }, 1000);
  }
 
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
  cards1.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

// Events

cards.forEach((card) => card.addEventListener("click", flipCard));
cards1.forEach((card) => card.addEventListener("click", flipCard));

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
    console.log('you choose animals!');
    let gameAreaContents = `
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
    </div>`
    gameAreaHTML.innerHTML = gameAreaContents;
  }

  if (choice === 'space') {
    console.log('you choose space!');
    let gameAreaContents = `
    <div class="memory-game">
        <div class="memory-card" data-framework="earth">
          <img class="front-face" src="assets/images/earth.webp" alt="Planet Earth">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="earth">
          <img class="front-face" src="assets/images/earth.webp" alt="Planet earth">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="jupiter">
          <img
            class="front-face"
            src="assets/images/jupiter.webp"
            alt="Planet Jupiter">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="jupiter">
          <img
            class="front-face"
            src="assets/images/jupiter.webp"
            alt="Planet Jupiter">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="mars">
          <img class="front-face" src="assets/images/mars.webp" alt="Planet Mars">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="mars">
          <img class="front-face" src="assets/images/mars.webp" alt="Planet Mars">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="mercury">
          <img class="front-face" src="assets/images/mercury.webp" alt="Planet Mercury">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="mercury">
          <img class="front-face" src="assets/images/mercury.webp" alt="Planet Mercury">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="neptune">
          <img
            class="front-face"
            src="assets/images/neptune.webp"
            alt="Planet Neptune">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="neptune">
          <img
            class="front-face"
            src="assets/images/neptune.webp"
            alt="Planet Neptune">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="saturn">
          <img
            class="front-face"
            src="assets/images/saturn.webp"
            alt="Planet Saturn">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="saturn">
          <img
            class="front-face"
            src="assets/images/saturn.webp"
            alt="Planet Saturn">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="uranus">
          <img
            class="front-face"
            src="assets/images/uranus.webp"
            alt="Planet Uranus">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="uranus">
          <img
            class="front-face"
            src="assets/images/uranus.webp"
            alt="Planet Uranus">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="venus">
          <img
            class="front-face"
            src="assets/images/venus.webp"
            alt="Planet Venus">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="venus">
          <img
            class="front-face"
            src="assets/images/venus.webp"
            alt="Planet Venus">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>
      </div>`
      gameAreaHTML.innerHTML = gameAreaContents;
  }

  if (choice === 'sport') {
    console.log('you choose sport!');
    let gameAreaContents = `
    <div class="memory-game">
        <div class="memory-card" data-framework="american_football">
          <img class="front-face" src="assets/images/american_football.webp" alt="American Football pile-up">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="american_football">
          <img class="front-face" src="assets/images/american_football.webp" alt="American Football pile-up">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="cricket">
          <img
            class="front-face"
            src="assets/images/cricket.webp"
            alt="Batter hitting the ball in cricket">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="cricket">
          <img
            class="front-face"
            src="assets/images/cricket.webp"
            alt="Batter hitting the ball in cricket">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="field_hockey">
          <img class="front-face" src="assets/images/field_hockey.webp" alt="Girl dribbling with the ball in field hockey">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="field_hockey">
          <img class="front-face" src="assets/images/field_hockey.webp" alt="Girl dribbling with the ball in field hockey">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="ice_hockey">
          <img class="front-face" src="assets/images/ice_hockey.webp" alt="Goalie standing in ice-hockey goals">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="ice_hockey">
          <img class="front-face" src="assets/images/ice_hockey.webp" alt="Goalie standing in ice-hockey goals">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="nascar">
          <img
            class="front-face"
            src="assets/images/nascar.webp"
            alt="Nascar racing on a track">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="nascar">
          <img
            class="front-face"
            src="assets/images/nascar.webp"
            alt="Nascar racing on a track">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="pool">
          <img
            class="front-face"
            src="assets/images/pool.webp"
            alt="Pool balls set up in triangle">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="pool">
          <img
            class="front-face"
            src="assets/images/pool.webp"
            alt="Pool balls set up in triangle">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="soccer">
          <img
            class="front-face"
            src="assets/images/soccer.webp"
            alt="Man stricking ball in soccer">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="soccer">
          <img
            class="front-face"
            src="assets/images/soccer.webp"
            alt="Man sticking ball in soccer">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="tennis">
          <img
            class="front-face"
            src="assets/images/tennis.webp"
            alt="Tennis racket and ball sitting on clay court">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>

        <div class="memory-card" data-framework="tennis">
          <img
            class="front-face"
            src="assets/images/tennis.webp"
            alt="Tennis racket and ball sitting on clay course">
          <img
            class="back-face"
            src="assets/images/card-back-image.webp"
            alt="Spiral Card">
        </div>
      </div>`
      gameAreaHTML.innerHTML = gameAreaContents;
  }
}

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
  if (event.target == playModal || event.target == themeModal || event.target == winModal) {
    playModal.style.display = "none";
    themeModal.style.display = "none";
    winModal.style.display = "none";
  }
};

// Theme Chooser
theme.onclick = function () {
  themeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the themeModal
spanTheme.onclick = function () {
  themeModal.style.display = "none";
};

//Win Modal
function endModal() {
  winModal.style.display = "block";

  spanWin.onclick = function () {
    winModal.style.display = "none";
  }
}