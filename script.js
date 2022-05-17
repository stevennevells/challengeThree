// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = ["qwertyuiopasdfghjklzxcvbnm"];
const uppercase = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
const numbers = ["1234567890"];
const characters = ["!()*+-/:;<=>?@[\]^_`{|}"];

var str = lowercase + uppercase + numbers + characters;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

    
}




function generatePassword() {
  console.log("click generate password");

  prompt("Choose a number between 8 and 128 for your password length");
  if (true) 
    confirm("Would you like to include uppercase letters?");
    if (true) {
      confirm("Would you like to include numbers?"); 
      if (true) {
        confirm("Would you like to include spceial characters?");
        if (true) {
          confirm("Would you like to include lowercase numbers?");
        }

  return ("Your new password is " + str); 
} } }

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



  
 
  










