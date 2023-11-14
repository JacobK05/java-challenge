// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

// 1. need to prompt the user for the password criteria 
//  a. password length between 8-128 
//  b. lowercase uppercase, numbers and special characters. 
var passwordLength = prompt('Between 8-128 how many characters would you like your password to be?');
passwordLength = parseInt(passwordLength);
if (passwordLength < 8 || passwordLength > 128){
  alert('Please enter a valid number!');
}

confirm( 'click ok to confirm Include special characters' )

confirm( 'click ok to confirm Include numeric characters' )

confirm( 'click ok to confirm Include lowercase characters' )

confirm( 'click ok to confirm Include uppercase characters' )




// 2. Validate the input. 
// 3. display the password on the page(return of generate password)






  return ('generated password goes here')
}
//function generatePassword(length, numbers, uppercase, lowercase, symbols) {
// var characters = '';

 /* var passwordAmount = prompt('Between 8-128 how many characters would you like your password to be?'); {
if(passwordAmount > '8') {
  alert('Please enter a number between 8-128')
}
}

var specialChar = confirm( 'click ok to confirm Include special characters' ); {
  
  console.log(specialChar); 
  if (symbols) {
    characters +=  '!#$%&?@~'
  }
}

var numChar = confirm( 'click ok to confirm Include numeric characters' ); {
  
  console.log(numChar); 
  if (numbers) {
    characters +=  '0123456789'
}
}

var lowercaseChar = confirm( 'click ok to confirm Include lowercase characters' ); {
  
  console.log(lowercaseChar); 
  if (lowercase) {
    characters +=  'abcdefghijklmnopqrstuvwxyz'
  }
}

var uppercaseChar = confirm( 'click ok to confirm Include uppercase characters' ); {
  
  console.log(uppercaseChar); 
  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
}
var passwordArray = [];

while(passwordArray.length < length){
  const characters = characters[Math.floor(math.random() * characters.length)]
}

return 'new password';

 } */ 