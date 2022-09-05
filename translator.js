import { morseToEnglish } from "./Morse.js";
console.log(morseToEnglish);

export const translateToMorse = (string) => {
            for (const key in morseToEnglish) {
            const morse = morseToEnglish[key];
                if (string == key) {
                    return morse.toString();
                }
            }
}

