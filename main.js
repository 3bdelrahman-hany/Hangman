// letters 

let letters = "abcdefghijklmnopqrstuvwxyz";

// Get array from Element 
let lettersArray =  Array.from(letters)
// let lettersArray = letters.split("")
// console.log(lettersArray);

// select letter container
let lettersContainer = document.querySelector(`.Theletters`);

// Generate Letters
lettersArray .forEach (letter => {
// create span
let span = document.createElement("sapn")
// create  letter  text node
let theletters = document.createTextNode(letter);
// append the letter to the span
span.appendChild(theletters)
// add class on span
span.className = 'letter-box'
//append span to the letters container

lettersContainer.appendChild(span);
})

// object of Words + Categories
 const words = {
    programming:["php" ,"javascript","go" ,"scala" ,"fortran","r","mysql","python"],
    movies:["Prestige","Inception","Parasite","Interstellar","Whiplash","Memento","Coco","Up"],
    people:["Albert Einstein","Cleopatra","Mohamed Salah","Ali Malool",],
    countries:["Syria","Palestine","Yemen","Egypt","Bahrain","Qatar","chad","Bangaladesh"]
 }

 // get Random Property

 let allKeys = Object.keys(words);

//  console.log(allKeys)

let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
let randomPropertyName = allKeys[randomPropertyNumber];


let randomPropertyValue = words[randomPropertyName] ;

let randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length )

let randomValueValue = randomPropertyValue[randomValueNumber];

// set Category Info
document.querySelector(".game-info .category span").innerHTML = `${randomPropertyName}`

// select Letter Guess Element

let letterGuessContainer =  document.querySelector(`.theletter-guess`);
// convert Chosen Word to Array

let lettersAndSapce = Array.from(randomValueValue);

// create spans depend on letter

lettersAndSapce.forEach(letter =>{
   // create emtpy span
   let emtpyspan = document.createElement("span")
   // if letter is space
  if(letter ===" "){

   // add class to span
   
   emtpyspan.className ="with-space"
}

   //append span to letter guess container
   letterGuessContainer.appendChild(emtpyspan);    

})

// select guess span

let guessSpans = document.querySelectorAll(".theletter-guess span");



// set Wrong tries
let wrongTries =0;
// select the draw Element
let theDraw = document.querySelector(".hangman-draw")


// Handling Clicking On Letters
document.addEventListener("click" ,e => {

   // set the chose  Status
   let theStatus = false;


   if(e.target.className === "letter-box"){

      e.target.setAttribute("class","clicked");


      // Get Clicked Letter
      let clickedLetter = e.target.innerHTML.toLowerCase();

      //the chosen word
      let theChosenWord = Array.from(randomValueValue.toLowerCase());


      // Get the chose Word Array
      theChosenWord.forEach((wordLetter , wordIndex) =>{

         // if the clikced letter is equal to one of the chosen word letter

         if(clickedLetter === wordLetter ){
            // set the status to correct
            theStatus = true;

            // loop on All Guess Spans
            guessSpans.forEach((span,spanIndex)=>{
               if(wordIndex === spanIndex)
                     span.innerHTML =  clickedLetter         
            })

         }


      })
      // oustide loop
      // if the letter is wrong
      if(theStatus !== true){
         //increase the wrong tries
         wrongTries+=1;

         // add Classworng on the drawElement
         theDraw.classList.add(`wrong-${wrongTries}`);

         // play fail sound
         document.getElementById("fail").play();

         if (wrongTries === 8 ){
            endGame();
            lettersContainer.classList.add("finished");
         }

      }else{
         // play succes sound
         document.getElementById("success").play();
         
      }
   }
})


//End Game fucntion
function endGame(){
   // create Popup Div
   let div = document.createElement(`div`);

   //create text inside Div
   let text = document.createTextNode (`Game OverThe Word is ${randomValueValue}`);
   // append text to div
   div.appendChild(text);
   // add class on div
   div.className = `popup`
   // Append to the body
   document.body.appendChild(div);
}