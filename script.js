"use strict"
let minNum = 1
let maxNum = 100
let computerGuess;
window.addEventListener("load", start)


function start() {
    console.log("js works");
    addEventListeners()
    computerNewGuess()
}

function computerNewGuess() {
    let oldComputerGuess = computerGuess
    computerGuess = Math.floor((minNum + maxNum) / 2)
    if (oldComputerGuess === computerGuess) {
        playerIsLying()
    }else
    printGuess(computerGuess);
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
    maxNum = computerGuess - 1
    computerNewGuess()
}
function guessTooLow() {
    console.log("too Low");
    minNum = computerGuess + 1
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
function playerIsLying() {
    const list = document.querySelector("#guess-list")
    const html = `<li>I think you're lying! >:( </li>`
    list.insertAdjacentHTML("beforeend", html)

    document.querySelector("#btnTooHigh").remove();
    document.querySelector("#btnTooLow").remove();
    document.querySelector("#btnCorrect").remove();
}
