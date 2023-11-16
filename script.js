// Assignment Code
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    var password = '';
    var promptName = ['hasSpecial', 'hasNum', 'hasLowercase', 'hasUppercase']
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
    if (characterPool){
    alert('Select at least one option')
   }
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