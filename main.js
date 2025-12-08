// ============================
// 1. Generate the alphabet
// ============================
let letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".Theletters");

// Generate letter boxes
lettersArray.forEach(letter => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});

// ============================
// 2. Fetch a random word from API
// ============================

fetch("https://random-word-api.herokuapp.com/word?number=1")
  .then(res => res.json())
  .then(data => {
    let randomValueValue = data[0]; // Random word from API
    startGame(randomValueValue);
    console.log(data)
  })
  .catch(err => {
    console.error("Error fetching random word:", err);
    startGame("fallback"); // fallback word
  });

// ============================
// 3. Main Game Function
// ============================
function startGame(randomValueValue) {
  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML = "Random";

  // Select Letter Guess Element
  let letterGuessContainer = document.querySelector(".theletter-guess");

  // Convert Chosen Word to Array
  let lettersAndSpace = Array.from(randomValueValue);

  // Create spans for each letter
  lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if (letter === " ") {
      emptySpan.className = "with-space";
    }

    letterGuessContainer.appendChild(emptySpan);
  });

  // Select guess spans
  let guessSpans = document.querySelectorAll(".theletter-guess span");

  // Wrong tries counter
  let wrongTries = 0;
  let theDraw = document.querySelector(".hangman-draw");

  // ============================
  // 4. Handle Clicking on Letters
  // ============================
  document.addEventListener("click", e => {
    let theStatus = false;

    if (e.target.className === "letter-box") {
      e.target.classList.add("clicked");
      let clickedLetter = e.target.innerHTML.toLowerCase();
      let theChosenWord = Array.from(randomValueValue.toLowerCase());

      // Check if letter exists in word
      theChosenWord.forEach((wordLetter, wordIndex) => {
        if (clickedLetter === wordLetter) {
          theStatus = true;
          guessSpans.forEach((span, spanIndex) => {
            if (wordIndex === spanIndex) span.innerHTML = clickedLetter;
          });
        }
      });

      // If letter not found
      if (theStatus !== true) {
        wrongTries++;
        theDraw.classList.add(`wrong-${wrongTries}`);
        document.getElementById("fail").play();

        if (wrongTries === 8) {
          endGame(randomValueValue);
          lettersContainer.classList.add("finished");
        }
      } else {
        document.getElementById("success").play();
      }
    }
  });
}

// ============================
// 5. End Game Function
// ============================
function endGame(word) {
  let div = document.createElement("div");
  let text = document.createTextNode(`Game Over! The word was: ${word}`);
  div.appendChild(text);
  div.className = "popup";
  document.body.appendChild(div);
}
