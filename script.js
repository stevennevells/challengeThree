// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = ["q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m"];
const uppercase = ["Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"];
const numbers = ["1,2,3,4,5,6,7,8,9,0"];
const characters = ["!,(,),*,+,-,/,:,;,<,=,>,?,@,[,\,],^,_,`,{,|,},~"];
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
    prompt("Would you like to include uppercase letters?");
    if (true) {
      prompt("Would you like to include numbers?"); 
      if (true) {
        prompt("Would you like to include spceial characters?");
        if (true) {
          prompt("Would you like to include lowercase numbers?");
        }

  return "Your new password is " + lowercase + uppercase + numbers+ characters; 
} } }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
 
  










