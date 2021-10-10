// Assignment code here
var symbol = '!"#$%&()*+,-./:;%20<=>?@[\]\'^_`{|}~';
var number = '0123456789';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var symbolCheckbox = document.querySelector("input[name=symbols]");
var lowercaseCheckbox = document.querySelector("input[name=lowercase]");
var uppercaseCheckbox = document.querySelector("input[name=UPPERCASE]");
var numberCheckbox = document.querySelector("input[name=numbers]");

// Write password to the #password input
function writePassword() {
  var password = makePass(made, passLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to create passcode
function makePass(type, length) {
  var result = '';
  var charactersLength = type.length;
  for git ( var i = 0; i < length; i++ ) {
    result += type.charAt(Math.random() * charactersLength);
  }
return result;
}


var passLength = 128;
var made = symbol + number + upper + lower


console.log(makePass(made, passLength));
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

