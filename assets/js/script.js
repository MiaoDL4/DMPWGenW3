// Assignment Code
var generateBtn = document.querySelector("#generate");
var Lower  = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'abcdefghijklmnopqrstuvwxyz'.split('');
var number = '123456790'.split('');
var special = '!@#$%^&*()-_=+/"'.split('');

var pwLength;
var lowerStore;
var upperStore;
var numberStore;
var specialStore;

// user input and storing of those imputs
function promptPassword() {

}
// take user input and makes a string of characters
function gereratePassword() {

}

function writePassword() {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
