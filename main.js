import { morseToEnglish } from "./Morse.js";

import { translateToMorse } from "./translator.js";
import { translateToEnglish } from "./translator.js";


// grab all the html elements
const translateButton = document.querySelector(".translate__button")

const inputBox = document.querySelector("input")

const outputArea = document.querySelector(".output")




translateButton.addEventListener("click", () => {
    outputArea.innerHTML = ""

    if (inputBox.value.includes("." || "-", [0]) ) {
        const word = inputBox.value.toLowerCase().split(" ")
        let morseArr = word.map(letter => translateToEnglish(letter))
        outputArea.innerHTML = morseArr.join(" ")

    } else {
        const word = inputBox.value.toLowerCase().split("")
        let morseArr = word.map(letter => translateToMorse(letter))
        outputArea.innerHTML = morseArr.join(" ")
        
    }
});


