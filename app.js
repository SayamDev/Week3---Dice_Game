



//declaring elements
let diceButton = document.getElementById("dice_btn");
let diceImage = document.getElementById("diceImage");
let urScore = document.getElementById("your_score");

const diceSound = document.getElementById("diceSound")



//  6 images stored inside the sixImgs object with the assgined number properties (object initializer)
const sixImgs = {
    1:"images/dice1.png",
    2:"images/dice2.png",
    3:"images/dice3.png",
    4:"images/dice4.png",
    5:"images/dice5.png",
    6:"images/dice6.png",
};



//assigning variables
let diceRoll = 0;
let score = 0;

diceButton.addEventListener("click", () => { //added click event to button
    let diceRoll = Math.floor(Math.random() *6 + 1); //will generate random numbers between 1-6
    diceImage.src = sixImgs[diceRoll]; //targeted "diceImage" src attribute , allowing me to return the value src attributes of the images inside the id = diceImage & then assigning diceRoll to the object sixImgs
    score += diceRoll; // adding the value of diceRoll to score variable
    urScore.textContent = score; // will show the result of score in the "your_score element int the HTML"
    urScore.style.marginLeft = "20px";//style element
    urScore.style.paddingLeft = "100px";//style element
    urScore.style.fontSize = "3rem";//style element
    diceSound.src = "sound/roll.wav";//dice sound
})





