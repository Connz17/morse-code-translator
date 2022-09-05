import { englishToMorse, morseToEnglish } from "./Morse.js";



export const translateToMorse = (string) => {
            for (const key in morseToEnglish) {
            const morse = morseToEnglish[key];
                if (string == key) {
                    return morse;
                }
            }
}

export const translateToEnglish = (string) => {
    for (const key in englishToMorse) {
    const english = englishToMorse[key];
        if (string == key) {
            console.log(english);
            return english;
        }
    }
}
