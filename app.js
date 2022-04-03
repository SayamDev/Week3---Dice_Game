
//declaring elements
let diceButton = document.getElementById("dice_btn");

let diceImage = document.getElementById("diceImage");

let urScore = document.getElementById("your_score");

let h1 = document.querySelector(".title")

let wrapper = document.getElementById("dice_game")

let reload = document.getElementById("restart")

const diceSound = document.getElementById("diceSound")
const loserSound = document.getElementById("loser")


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
let win = 30

diceButton.addEventListener("click", () => { //added click event to button
    let diceRoll = Math.floor(Math.random() *6 + 1); //will generate random numbers between 1-6
    diceImage.src = sixImgs[diceRoll]; //targeted "diceImage" src attribute , allowing me to return the value src attributes of the images inside the id = diceImage & then assigning diceRoll to the object sixImgs
    score += diceRoll; // adding the value of diceRoll to score variable
    urScore.innerText = score; // will show the result of score in the "your_score element int the HTML"
    urScore.style.marginLeft = "20px";//style element
    urScore.style.paddingLeft = "100px";//style element
    urScore.style.fontSize = "1.9rem";//style element
    diceSound.src = "sound/roll.wav";//dice sound



    if (score >= win) {
        urScore.innerText = `${diceRoll} You have Won`;
        urScore.style.color = "#0CF574";
        h1.style.color = "#0CF574"
        wrapper.style.borderColor = "#0CF574";
        diceButton.style.display="none"
        reload.style.display = "block";//reload
        score=0;//restart score
    } else if (diceRoll === 1 ){//strict operator
        urScore.innerText = `${diceRoll} You have Lost`;
        urScore.style.color = "red";
        h1.style.color = "red";
        wrapper.style.borderColor = "red";
        diceButton.style.display="none"
        reload.style.display = "block";
        score=0;
        loserSound.src = "sound/loser.wav";
    }
});


reload.addEventListener("click", () => {
    window.location.reload()
})





