// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var uppercasearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var lowercasearray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var numberarray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]
  var specialarray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  let passwordLegnth = prompt("Please enter a password that is between 8 and 128 characters");
  console.log (passwordLegnth)
  if (passwordLegnth <8|| passwordLegnth >128){
  alert("Wrong Legnth")
  }
 let adduppercase = confirm("Would you like to add an uppercase letter?");
 let addlowercase = confirm("Would you like to add a lowercase letter?")
 let addnumber = confirm("Would you like to add a number?")
 let addspecialcharacter = confirm("Would you like to add a special character?")
console.log (adduppercase)
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
