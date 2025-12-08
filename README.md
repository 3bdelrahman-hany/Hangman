# Hangman Game 🎮

A simple and interactive Hangman game built using **HTML**, **CSS**, and **JavaScript**.  
The game generates a random word from multiple categories and lets the player guess the letters. Each wrong guess draws a new part of the hangman until the player either wins or loses.

---

## 🚀 Features

- ✔️ Responsive layout for all devices  
- ✔️ Dynamic word generation  
- ✔️ Interactive letter selection  
- ✔️ Smooth popup animation for win/lose  
- ✔️ Visual hangman drawing that updates with each mistake  
- ✔️ Categories to choose words from  
- ✔️ Clean and modern UI  

---

## 🛠️ Technologies Used

- **HTML5** – game structure  
- **CSS3** – styling, responsive design, and animations  
- **JavaScript (ES6)** – game logic and DOM interaction  

---
## 🎮 How to Play

1. The game chooses a random word from a random category.
2. The player clicks letters to guess the word.
3. Wrong guesses draw:
   - Base  
   - Stand  
   - Rope  
   - Head  
   - Body  
   - Hands  
   - Legs  
4. The player wins if they guess all letters before the drawing is complete.
5. A popup animation shows **Win** or **Game Over**.

---

## 🧩 Game Logic Summary

- The alphabet is generated dynamically on page load.
- The chosen word is displayed as blank boxes (`_`) or spaces.
- Each clicked letter:
  - Checks if it exists in the word  
  - Reveals correct letters  
  - Adds a wrong attempt if incorrect  
  - Triggers hangman drawing updates  
- When the attempts reach the max limit (8), the game ends.

---

## 📱 Responsive Design

The game works on all screen sizes:
- Mobile  
- Tablet  
- Desktop  

Using:
- Flexbox  
- CSS Grid  
- Media Queries  

---

## ✨ Animations

The game includes:
- Smooth popup "pop-in" animation  
- Highlight animation on correct/incorrect letters  
- Visual transitions when revealing letters  

---

## 📦 Installation & Usage

1. Download or clone this repository:
   ```sh
   git clone https://github.com/your-username/Hangman.git
