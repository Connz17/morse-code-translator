import { morseToEnglish } from "./Morse.js";
console.log(morseToEnglish);

// grab all the html elements
const translateButton = document.querySelector(".translate__button")
console.log(translateButton);

const inputBox = document.querySelector("input")
console.log(inputBox);

const outputArea = document.querySelector(".output")
console.log(outputArea);



// const wordArr = []

export const translateToMorse = (word) => {
    outputArea.innerHTML = ""
        const word = inputBox.value.split("")
        console.log(word);
        word.forEach(letter => {
            for (const key in morseToEnglish) {
            const morse = morseToEnglish[key];
                if (letter == key) {
                    console.log(morse);
                    outputArea.innerHTML += morse
                }
            }
        });
        
        
        
        
            
            
            // for (let index = 0; index < word.length; index++) {
            //     if (word[index] === key) {
            //         console.log(morse);
            //         outputArea.textContent += morse.toString()
            //         }
            // }
            
            
            
            
            
            // word.forEach(letter => {
            //     if (letter == key) {
            //         outputArea.innerHTML += code.split("");
            //     }
            // });
            

            // if (Object.hasOwnProperty.call(object, key)) {
            //     const element = object[key];
            //     for const
            // }
        
    }










translateButton.addEventListener("click", () => {

    translateToMorse()
});


// for (const key in morseToEnglish) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         for const
//     }
// }

