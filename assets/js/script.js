// Get all cards
const cards = document.querySelectorAll(".memory-card");

// flip cards, check match and end game
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cardCorrect = 0;

// Timer
let timeOn = false;
let gameStart = document.getElementById("timer");
let timer;
let countdown;

// code for modal was taken from https://www.w3schools.com/howto/howto_css_modals.asp and amended to suit.
var playModal = document.getElementById("howToPlay"); // How to play Modal
var winModal = document.getElementById("winText");
var play = document.getElementById("playBtn"); // Get the button that opens the modal
var win = document.getElementById("winModal"); // Win Modal
var spanPlay = document.getElementsByClassName("close")[0]; // Get the <span> element that closes the modal
var spanWin = document.getElementsByClassName("close")[1]; // Get the <span> element that closes the modal

function flipCard() {
  console.log("I was clicked");
  console.log(this);
  if (lockBoard) return;
  if (this === firstCard) return;
  if (!timeOn) {
    timeOn = true;
    startTimer();
  }

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } else {

  secondCard = this;

  checkForMatch();
  moves();
  }
}

// Timer
function startTimer () {
  countdown = 120;
  timer = setInterval(function () {
    countdown--;
    gameStart.innerText = countdown;
  }, 1000);
}

// Moves Counter
function moves() {
  let counter = parseInt(document.getElementById("counter-flips").innerText);
  counter = document.getElementById("counter-flips").innerText = ++counter;
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
      clearInterval(timer);
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
})();

// Events

cards.forEach((card) => card.addEventListener("click", flipCard));

// Reset button
function reset() {
  setTimeout(() => {
    window.location.reload(true);
  }, 900);
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
  if (event.target == playModal || event.target == winModal) {
    playModal.style.display = "none";
    winModal.style.display = "none";
  }
};

//Win Modal
function endModal() {
  winModal.style.display = "block";

  let showMoves = document.getElementById("showMoves");
  showMoves.innerText = document.getElementById("counter-flips").innerText;


  // When the user clicks on <span> (x), close the winmodal
  spanWin.onclick = function () {
    winModal.style.display = "none";
  };
};