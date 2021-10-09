// Assignment code here
var symbol = '!"#$%&()*+,-./:;%20<=>?@[\]\'^_`{|}~';
var number = '0123456789';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var made = "";
  var passLength = 0;
  length = 0;
  length = window.prompt("Enter your password length. 8 to 128 characters please.");
  console.log(length);
  while (isNaN(length)) {
    length = window.prompt("Try again. Enter your password length. 8 to 128 characters please.");
  }
  if (length < 8 || length > 128){
    alert("Try again.");
    writePassword();
  }
  console.log(length);
  made = '';
  while (made === ''){
  if (window.confirm("Do you want numbers in your password?")) {
    made = made += number;
  }
  if (window.confirm("Do you want uppercase letters in your password?")) {
    made = made += upper;
  }
  if (window.confirm("Do you want lowercase letters in your password?")) {
    made = made += lower;
  }
  if (window.confirm("Do you want symbols in your password?")) {
    made = made += symbol;
  }
  if (made === '') {
    alert("Please select one character type!");
  }
  }

  var password = makePass(made, length);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Function to create passcode
function makePass(type, length) {
  var result = '';
  var charactersLength = type.length;
  for ( var i = 0; i < length; i++ ) {
    result += type.charAt(Math.random() * charactersLength);
  }
return result;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

