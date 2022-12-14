import { morseToEnglish } from "./Morse.js";

import { translateToMorse } from "./translator.js";
import { translateToEnglish } from "./translator.js";


// grab all the html elements
const translateButton = document.querySelector(".translate__button")
const translateButtonMorse = document.querySelector(".translate__button--morse")

const inputBox = document.querySelector(".translate__input")
const inputBoxMorse = document.querySelector(".translate__input--morse")

const outputArea = document.querySelector(".output")
const outputAreaMorse = document.querySelector(".output--morse")

const revealButton = document.querySelector(".shift")

const morseArea = document.querySelector(".morse")

const closeButton = document.querySelector(".image")



translateButton.addEventListener("click", () => {
    outputArea.innerHTML = ""
        const word = inputBox.value.toLowerCase().split("")
        let morseArr = word.map(letter => translateToMorse(letter))
        outputArea.innerHTML = morseArr.join(" ")
        
    
});


revealButton.addEventListener("click", () =>{
    morseArea.classList.add("show")
})


translateButtonMorse.addEventListener("click", () => {
    outputArea.innerHTML = ""
        const word = inputBoxMorse.value.toLowerCase().split(" ")
        let morseArr = word.map(letter => translateToEnglish(letter))
        outputAreaMorse.innerHTML = morseArr.join("")

});

closeButton.addEventListener("click", () => {
    morseArea.classList.remove("show")
})
