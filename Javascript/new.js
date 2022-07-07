const myItems = ["before", "shoses", "cat", "glass", "computer", "java script"];
let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItem() {
    randomItem = myItems[Math.floor(Math.random() * myItems.length)];
    document.getElementById("letters").addEventListener("click", btnHandler);
    window.addEventListener("keydown", keyHandeler);
}

function setUnderScore() {
    let splitedWord = randomItem.split("");
    let mapWord = splitedWord.map(letter => (clicked.indexOf(letter) >= 0 ? letter : "_"));
    result = mapWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function win() {
    if (randomItem === result) {
        document.getElementById("gameover").querySelector("p").style.display = " block";
        document.getElementById("image").querySelector("img").src = " assets/winner.png";

    }
}

function checkIfLost() {
    if (mistakes === 6) {
        document.getElementById("gameover").querySelector("p").style.display = " block";
        document.getElementById("clue").querySelector("p").innerHTML = `<p>The word is:${randomItem}</p>`;
    }
}

function updateHangmanPicture() {
    document.getElementById("image").querySelector("img").src = `assets/hangman${mistakes}.png`;
}

function letterHandler(letter) {
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if (randomItem.indexOf(letter) >= 0) {
        setUnderScore();
        win();
    } else if (randomItem.indexOf(letter) === -1) {
        mistakes++;
        checkIfLost();
        updateHangmanPicture();
    }
}

function btnHandler(event) {
    letterHandler(event.target.id);

}

function keyHandeler(event) {
    letterHandler(event.key);
}

selectRandomItem()
setUnderScore()