// Assignment Code
var generateBtn = document.querySelector("#generate");
var Lower  = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'abcdefghijklmnopqrstuvwxyz'.split('');
var number = '123456790'.split('');
var special = '!@#$%^&*()-_=+/"{}[];:,<.>/?'.split('');

var pwLength;
var lowerStore;
var upperStore;
var numberStore;
var specialStore;

// user input and storing of those imputs
function promptPassword() {
pwLength = prompt('How long would you like your password to be? Please choose a number between 8 - 128.');
lowerStore = confirm('Would you like lowercase letters included?');
upperStore = confirm('Would you like uppercase letters included?');
numberStore = confirm('Would you like numbers included?');
specialStore = confirm('Lastly would you like special case characters included?');

if (pwLength < 8 || pwLength> 128 || pwLength === null) {
  alert('Your selected password length has to be at least 8 characters and no more than 128.');
  passwordQuestions();
}

if (!lowerStore && !upperStore && !numberStore && !specialStore) {
  alert('Please select at least one character type to include in your password.');
  passwordQuestions();
}

var check = {
  pwLength: pwLength,
  lowerStore: lowerStore,
  upperStore: upperStore,
  numberStore: numberStore,
  specialStore: specialStore}

return check;

}
// take user input and makes a string of characters
function gereratePassword() {
  var check = promptPassword();

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
