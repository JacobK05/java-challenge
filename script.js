// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var password = '';
  // 1. need to prompt the user for the password criteria 
  //  a. password length between 8-128 
  //  b. lowercase uppercase, numbers and special characters. 
  var passwordLength = prompt('Between 8-128 how many characters would you like your password to be?');
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128){
    alert('Please enter a valid number!');
    return null;
  }
  
   var hasSpecial = confirm( 'click ok to confirm Include special characters' );
   var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
  if (hasSpecial) {
    for (var i = 0; i < 7; i++) {
    var randomIndex = Math.floor(Math.random() * specialChar.length);
    var selectedSpecialChar = specialChar[randomIndex];
    password += selectedSpecialChar;
    }
  }

  var hasNum = confirm( 'click ok to confirm Include numeric characters' );
  var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (hasNum) {
    for (var i = 0; i < 7; i++) {
    var randomIndex = Math.floor(Math.random() * numChar.length);
    var selectedNumChar = numChar[randomIndex];
    password += selectedNumChar;
    }
  }
    
  var hasLowercase= confirm( 'click ok to confirm Include lowercase characters');
  var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  if (hasLowercase) {
    for (var i = 0; i < 7; i++) {
    var randomIndex = Math.floor(Math.random() * lowercaseChar.length);
    var selectedLowercaseChar = lowercaseChar[randomIndex];
    password += selectedLowercaseChar;
    }
  }

    var hasUppercase = confirm( 'click ok to confirm Include uppercase characters');
    var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if (hasUppercase) {
      for (var i = 0; i < 7; i++) {
    var randomIndex = Math.floor(Math.random() * uppercaseChar.length);
    var selectedUppercaseChar = uppercaseChar[randomIndex];
    password += selectedUppercaseChar;
      }
    }
  // 2. Validate the input. 
  // 3. display the password on the page(return of generate password)
    return (password)
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 