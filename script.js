"use strict"

window.addEventListener("load", start)

function start() {
    console.log("js works");
    addEventListeners()
    computerNewGuess()
}

function computerNewGuess() {
    let guess = 42
    printGuess(guess);
}

function printGuess(guess) {
    const list = document.querySelector("#guess-list")
    
    const html = `<li>The computer thinks it's: ${guess}</li>`
    list.insertAdjacentHTML("beforeend", html)

}
function addEventListeners() {
    let btnTooHigh = document.querySelector("#btnTooHigh")
    let btnTooLow = document.querySelector("#btnTooLow")
    let btnCorrect = document.querySelector("#btnCorrect")

    btnTooHigh.addEventListener("click", guessTooHigh)
    btnTooLow.addEventListener("click", guessTooLow)
    btnCorrect.addEventListener("click", guessCorrect)
}

function guessTooHigh() {
    console.log("too high");
    computerNewGuess()
}
function guessTooLow() {
    console.log("too Low");
    computerNewGuess()
}
function guessCorrect() {
    console.log("Correct!");
    const list = document.querySelector("#guess-list")
    const html = `<li>Yay! i got it</li>`
    list.insertAdjacentHTML("beforeend", html)

    document.querySelector("#btnTooHigh").remove();
    document.querySelector("#btnTooLow").remove();
    document.querySelector("#btnCorrect").remove();
}
