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


let random=['Animals','Sports','Programming Languages','Games',"Wordle","Countries","Capitals of Countries","Birds"];

let randValue=random[Math.floor(Math.random()*8)];
console.log(randValue);

switch(randValue){
  case 'Animals' :
    async function getAnimals() {
      try {
        let response = (await fetch("https://random-words-api.kushcreates.com/api?language=en&category=animals"));
        let theword = await response.json()
        let value = theword[Math.floor(Math.random()*140)].word
        startGame(value)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    getAnimals();
    break;

  case 'Sports':
    async function getSports() {
      try {
        let response = (await fetch("https://random-words-api.kushcreates.com/api?language=en&category=sports"));
        let theword = await response.json()
        let value = theword[Math.floor(Math.random()*78)].word
        
        startGame(value)
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    getSports();

    break;
  case "Games":
    async function getGames() {
      try {
        let response= (await fetch("https://random-words-api.kushcreates.com/api?language=en&category=games"))
        let theword=await response.json()
        let value=theword[Math.floor(Math.random()*88)].word;
        
        startGame(value)
      } catch (error) {
          console.log("Error fetching data:", error);
      }
    }

    getGames();
    break;

  case "Capitals of Countries":
    async function getCapitalsOfCountries() {
      try {
        let response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=capitals_of_countries");
        let theword= await response.json()
        let value=theword[Math.floor(Math.random()*201)].word
        startGame(value)
      } catch (error) {
          console.log("Error fetching data:", error);
      }
    }

    getCapitalsOfCountries();
    break;
  case "Programming Languages":
      async function getPL(){
        try {
          let response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=programming_languages")
          let Words =  await response.json();
          let value = Words[Math.floor(Math.random()*57)].word;
          startGame(value);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
      }
      getPL();
      break;

  case "Countries":
    async function getCountry(){
        try {
          let response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=countries");
          let Words =  await response.json();
          let value = Words[Math.floor(Math.random()*200)].word;
          startGame(value);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
      }
      getCountry();
      break;
  
  case"Birds":
      async function getBird(){
        try {
          let response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=birds");
          let Words =  await response.json();
          let value = Words[Math.floor(Math.random()*60)].word;
          startGame(value);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
      }
      getBird();
      break;

  case"Wordle":
      async function getWordle(){
        try {
          let response = await fetch("https://random-words-api.kushcreates.com/api?language=en&category=wordle");
          let Words =  await response.json();
          let value = Words[Math.floor(Math.random()*14855)].word;
          startGame(value);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
      }
      getWordle();
      break;

}



// ============================
// 3. Main Game Function
// ============================
function startGame(randomValueValue) {
  // Set Category Info
  document.querySelector(".game-info .category span").innerHTML = randValue;

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
