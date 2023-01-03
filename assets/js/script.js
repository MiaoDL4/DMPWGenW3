// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower  = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var number = '123456790'.split('');
var special = '!@#$%^&*()-_=+/"{}[];:,<.>/?'.split('');

var genPassword;
var password;
var pwLength;
var lowerStore;
var upperStore;
var numberStore;
var specialStore;

// user input and storing of those imputs
function passwordQuestions() {
  reset();

  pwLength = prompt('Please choose a password 8 to 128 characters in length.');

  if(pwLength == null){ //allows cancel button to work
        alert('Please press Generate Password to start again')
  }else if (pwLength < 8 || pwLength > 128) {
    alert('Your selected password length has to be at least 8 characters and no more than 128.');
    passwordQuestions(); 
  } else {
    lowerStore = confirm('Would you like lowercase letters included?');
    upperStore = confirm('Would you like uppercase letters included?');
    numberStore = confirm('Would you like numbers included?');
    specialStore = confirm('Lastly would you like special case characters included?');
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
     
    }
    return check;  //has to be here or errors
} 

// take user input and makes a string of characters
function generatePassword() {
  
  var check = passwordQuestions();

  if(check.lowerStore) {
    genPassword = genPassword.concat(lower)
  }
  if(check.upperStore) {
    genPassword = genPassword.concat(upper)
  }
  if(check.numberStore) {
    genPassword = genPassword.concat(number)
  }
  if(check.specialStore) {
    genPassword = genPassword.concat(special)
  }
  
  var password = "";

  for (var i = 0; i < check.pwLength; i++) {
      var random = genPassword[Math.floor(Math.random() * genPassword.length)];
      password = password + random;
  }
  
  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function reset() {
  genPassword = [];
  pwLength;
  lowerStore;
  upperStore;
  numberStore;
  specialStore;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
