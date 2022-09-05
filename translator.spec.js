import { translateToMorse } from "./translator";
import { translateToEnglish } from "./translator.js";

// What should translateToMorse function actually be able to do?
describe('testing translateToMorse', () => {
    it("a should translate to be .-", () => {
        // Arrange
        let string;
      // Act
        string = "a";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(".-");
    });
});

describe('testing letter translation translateToMorse', () => {
    it("w should translate to a full word .--", () => {
        // Arrange
        let string;
      // Act
        string = "w";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(".--");
    });
});

describe('testing translateToMorse spaces between words', () => {
    it("a space in between a word should translate to a /", () => {
        // Arrange
        let string;
      // Act
        string = " ";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(" / ");
    });
});


describe('testing translateToMorse multiple words structure', () => {
    it("I feel happy should translate to a .. / ..-. . . .-.. / .... .- .--. .--. -.--", () => {
        // Arrange
        let string;
      // Act
        string = "i feel happy";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(".. / ..-. . . .-.. / .... .- .--. .--. -.--");
    });
});

describe('testing translateToMorse sentence structure', () => {
    it("Mary and Samantha arrived at the bus station early but waited until noon for the bus. should translate to a full sentence", () => {
        // Arrange
        let string;
      // Act
        string = "mary and samantha arrived at the bus station early but waited until noon for the bus.";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe("-- .- .-. -.-- / .- -. -.. / ... .- -- .- -. - .... .- / .- .-. .-. .. ...- . -.. / .- - / - .... . / -... ..- ... / ... - .- - .. --- -. / . .- .-. .-.. -.-- / -... ..- - / .-- .- .. - . -.. / ..- -. - .. .-.. / -. --- --- -. / ..-. --- .-. / - .... . / -... ..- ... .-.-.-");
    });
});


describe('testing translateToMorse number translation', () => {
    it("5 should translate to be .....", () => {
        // Arrange
        let string;
      // Act
        string = "5";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(".....");
    });
});

describe('testing translateToMorse special character translation', () => {
    it("@ should translate to be .--.-.", () => {
        // Arrange
        let string;
      // Act
        string = "@";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe(".--.-.");
    });
});

describe('testing translateToMorse symbol and punctuation translation', () => {
    it("? should translate to be ..--..", () => {
        // Arrange
        let string;
      // Act
        string = "?";
        let result = translateToMorse(string);
      // Assert
        expect(result).toBe("..--..");
    });
});

describe('testing translateToEnglish special characters', () => {
  it("&. Should translate to be .-...", () => {
      // Arrange
      let string;
    // Act
      string = "Mary arrived at the bus station 5 minutes early. However, Rob waited 10 minutes! for his bus.";
      let result = translateToEnglish(string);
    // Assert
      expect(result).toBe(".-...");
  });
});



// - Extension - Other languages available other than English.
// Should we have a translateToEnglish translator?

describe('testing translateToEnglish translation', () => {
    it("-.-. should translate to be c", () => {
        // Arrange
        let string;
      // Act
        string = "-.-.";
        let result = translateToEnglish(string);
      // Assert
        expect(result).toBe("c");
    });
});


describe('testing translateToEnglish symbol translation', () => {
    it("-.-.-- should translate to be !", () => {
        // Arrange
        let string;
      // Act
        string = "-.-.--";
        let result = translateToEnglish(string);
      // Assert
        expect(result).toBe("!");
    });
});



// Input box:
// - Should be able to take the value from the input box
// describe('testing input box value', () => {
//     it("input value in the typed field should be taken as a string", () => {
//         // Arrange
//         let translation 
//       // Act
//         translation = inputBox.value;
//         let result = translation(string);
//       // Assert
//         expect(result).toBe("");
//     });
// });