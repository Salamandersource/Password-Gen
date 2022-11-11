// This is a password gen
//Global Variables

// Database: numbers, special characters, lowercase letters, uppercase letters
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; //create a number array with elements (numbers) 0-9
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let UperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let allChoices = [];

let password = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

//functions

function generatePassword() {
  let passwordLength = prompt("how long would you like your password to be?");

  let hasNumbers = confirm("Do you want numbers");
  let hasSpecial = confirm("Do you want any special characters?");
  let hasLower = confirm("Do you want any lower case characters?");
  let hasUpper = confirm(" do you want any upper case characters?");

  //from given choices, call from arrays.

  if (hasNumbers === true) {
    allChoices = allChoices.concat(number);
    let maximum = number.length - 1;
    let rnd = Math.floor(Math.random() * (maximum - 0 + 1)) + 0;
    password.push(number[rnd]);
    passwordLength--;
  }
  if (hasSpecial === true) {
    allChoices = allChoices.concat(specialCharacters);
    let rnd = Math.floor(Math.random() * (number.length - 0 + 1)) + 0;
    password.push(number[rnd]);
  }
  if (hasLower === true) {
    allChoices = allChoices.concat(lowerCase);
    let rnd = Math.floor(Math.random() * (number.length - 0 + 1)) + 0;
    password.push(number[rnd]);
  }
  if (hasUpper === true) {
    allChoices = allChoices.concat(UperCase);
    let rnd = Math.floor(Math.random() * (number.length - 0 + 1)) + 0;
    password.push(number[rnd]);
  }

  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length - 1;
    let minimum = 0;
    let rnd = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    password.push(allChoices[rnd]);
  }
}

function getRandomArbitrary(max) {
  return Math.floor(Math.random() * max);
}

function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
