// Assignment code


// Reference to the #generate tag
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var characters = '';
  var length = 0;

  //runs function to get password length
  passwordLength();

  //runs function to get character types
  getCharacters();

  // Runs function to create random password based upon selections above
  var password = makePass(characters, length);


  // Grabs the spot where the password is going to be displayed
  var passwordText = document.querySelector("#password");
  console.log(password);
  // Writes the password to the screen
  passwordText.value = password;


  // function to get password length  
  function passwordLength() {
    // Prompt for password length
    length = window.prompt("Enter your password length. 8 to 128 characters please.");

    // Validate input is a number
    while (isNaN(length)) {
      alert("Try Again.")
      length = window.prompt("Enter your password length. 8 to 128 characters please.");
    }

    // Validate number is between 8 and 128
    if (length >= 8 && length <= 128) {
      return;
    } else {
      length = 0;
      alert("Try Again.");
      passwordLength();
    }
    return length;
  }

  //function to get Chacters
  function getCharacters() {
    // Local function variables
    var symbol = '!"#$%&()*+,-./:;<=>?@[\]\'^_`{|}~';
    var number = '0123456789';
    var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lower = 'abcdefghijklmnopqrstuvwxyz';

    // While loop to make sure there is a character type chosen
    while (characters === "") {
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
      if (characters === "") {
        alert("Please select at least one character type!");
      }
      return characters;
    }
  }


  // Function to create random passcode
  function makePass(type, length) {
    var result = '';
    var charactersLength = type.length;
    for (var i = 0; i < length; i++) {
      result += type.charAt(Math.random() * charactersLength);
    }
    return result;
  }

  // Function to write password
  function writePassword() {
    // Grabs the spot where the password is going to be displayed
    var passwordText = document.querySelector("#password");

    // Writes the password to the screen
    passwordText.value = password;
  }
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

