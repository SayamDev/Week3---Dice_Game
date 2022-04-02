






dice_btn.addEventListener("click", () => {
    let randomDiceNumber = Math.floor((Math.random() *6) + 1);
    
    let DiceImages = "images/dice" + randomDiceNumber + ".png";

    document.getElementById("roll_1").setAttribute('src', DiceImages)

})

