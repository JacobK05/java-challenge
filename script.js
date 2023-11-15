// Assignment Code
var generateBtn = document.querySelector("#generate");

/* function generatePassword() {
var password = '';

  var passwordLength = prompt('Between 8-128 how many characters would you like your password to be?');
  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128){
    alert('Please enter a valid number!');
    return null;
  }
  
   var hasSpecial = confirm( 'click ok to confirm Include special characters' );
   var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
  if (hasSpecial) {
    for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * specialChar.length);
    var selectedSpecialChar = specialChar[randomIndex];
    password += selectedSpecialChar;
    }
  }

  var hasNum = confirm( 'click ok to confirm Include numeric characters' );
  var numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (hasNum) {
    for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * numChar.length);
    var selectedNumChar = numChar[randomIndex];
    password += selectedNumChar;
    }
  }
    
  var hasLowercase= confirm( 'click ok to confirm Include lowercase characters');
  var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  if (hasLowercase) {
    for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * lowercaseChar.length);
    var selectedLowercaseChar = lowercaseChar[randomIndex];
    password += selectedLowercaseChar;
    }
  }

    var hasUppercase = confirm( 'click ok to confirm Include uppercase characters');
    var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    if (hasUppercase) {
      for (var i = 0; i < passwordLength;  i++) {
    var randomIndex = Math.floor(Math.random() * uppercaseChar.length);
    var selectedUppercaseChar = uppercaseChar[randomIndex];
    password += selectedUppercaseChar;
      }
    }
  
    return (password)
  } */

  function generatePassword() {
    var password = '';
    var passwordLength = prompt('Between 8-128, how many characters would you like your password to be?');
    passwordLength = parseInt(passwordLength);
    
    if (passwordLength < 8 || passwordLength > 128) {
      alert('Please enter a valid number!');
      return null;
    }
  
    var hasSpecial = confirm('Click OK to confirm including special characters');
    var hasNum = confirm('Click OK to confirm including numeric characters');
    var hasLowercase = confirm('Click OK to confirm including lowercase characters');
    var hasUppercase = confirm('Click OK to confirm including uppercase characters');
  
    var characterPool = '';
  
    if (hasSpecial) {
      characterPool += '!@#$%^&*';
    }
    if (hasNum) {
      characterPool += '0123456789';
    }
    if (hasLowercase) {
      characterPool += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (hasUppercase) {
      characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
  
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * characterPool.length);
      var selectedChar = characterPool[randomIndex];
      password += selectedChar;
    }
  
    return password;
  }






  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 