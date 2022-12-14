"use strict";

var _Morse = require("./Morse.js");

var _translator = require("./translator.js");

// grab all the html elements
var translateButton = document.querySelector(".translate__button");
var translateButtonMorse = document.querySelector(".translate__button--morse");
var inputBox = document.querySelector(".translate__input");
var inputBoxMorse = document.querySelector(".translate__input--morse");
var outputArea = document.querySelector(".output");
var outputAreaMorse = document.querySelector(".output--morse");
var revealButton = document.querySelector(".shift");
var morseArea = document.querySelector(".morse");
var closeButton = document.querySelector(".image");
translateButton.addEventListener("click", function () {
  outputArea.innerHTML = "";
  var word = inputBox.value.toLowerCase().split("");
  var morseArr = word.map(function (letter) {
    return (0, _translator.translateToMorse)(letter);
  });
  outputArea.innerHTML = morseArr.join(" ");
});
revealButton.addEventListener("click", function () {
  morseArea.classList.add("show");
});
translateButtonMorse.addEventListener("click", function () {
  outputArea.innerHTML = "";
  var word = inputBoxMorse.value.toLowerCase().split(" ");
  var morseArr = word.map(function (letter) {
    return (0, _translator.translateToEnglish)(letter);
  });
  outputAreaMorse.innerHTML = morseArr.join("");
});
closeButton.addEventListener("click", function () {
  morseArea.classList.remove("show");
});