// Assignment code


// Reference to the #generate tag
var generateBtn = document.querySelector("#generate");


// Function to prompt how long and what type of password
function writePassword() {
  // Local function variables
  var symbol = '!"#$%&()*+,-./:;%20<=>?@[\]\'^_`{|}~';
  var number = '0123456789';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var characters = '';
  var length = 0;

  // Prompt for password length
  length = window.prompt("Enter your password length. 8 to 128 characters please.");
  console.log(length);

  // Validate input is a number
  while (isNaN(length)) {
    length = window.prompt("Try again. Enter your password length. 8 to 128 characters please.");
  }

  // Validate number is between 8 and 128
  if (length < 8 || length > 128){
    alert("Try again.");
    writePassword();
  }

  // While loop to make sure there is a character type chosen
  while (characters === ''){
  if (window.confirm("Do you want numbers in your password? \nPlease click OK for Yes and CANCEL for no.")) {
    characters = characters += number;
  }
  if (window.confirm("Do you want uppercase letters in your password? \nPlease click OK for Yes and CANCEL for no.")) {
    characters = characters += upper;
  }
  if (window.confirm("Do you want lowercase letters in your password? \nPlease click OK for Yes and CANCEL for no.")) {
    characters = characters += lower;
  }
  if (window.confirm("Do you want symbols in your password? \nPlease click OK for Yes and CANCEL for no.")) {
    characters = characters += symbol;
  }
  // If no character selection is made then it reminds user to select at least one character type
  if (characters === '') {
    alert("Please select at least one character type!");
  }
  }

  // Runs function to create random password based upon selections above
  var password = makePass(characters, length);

  // Grabs the spot where the password is going to be displayed
  var passwordText = document.querySelector("#password");

  // Writes the password to the screen
  passwordText.value = password;
}

// Function to create random passcode
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

