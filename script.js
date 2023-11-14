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

function generatePassword(length, numbers, uppercase, lowercase, symbols) {
var characters = '';

var result = prompt('How many characters would you like your password to contain?');{

console.log(result);
}

var result = confirm( 'click ok to confirm Include special characters' ); {
  
  console.log(result); 
  if (symbols) {
    characters +=  '!#$%&?@~'
  }
}

var result = confirm( 'click ok to confirm Include numeric characters' ); {
  
  console.log(result); 
  if (numbers) {
    characters +=  '0123456789'
}
}

var result = confirm( 'click ok to confirm Include lowercase characters' ); {
  
  console.log(result); 
  if (lowercase) {
    characters +=  'abcdefghijklmnopqrstuvwxyz'
  }
}

var result = confirm( 'click ok to confirm Include uppercase characters' ); {
  
  console.log(result); 
  if (uppercase) {
    characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
}
var passwordArray = [];

while(passwordArray.length < length){
  const characters = characters[Math.floor(math.random() * characters.length)]
}

return 'new password';

}