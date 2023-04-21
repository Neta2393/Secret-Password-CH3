
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // added array for numbers,letters and special characters
  var uppercasearray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var lowercasearray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var numberarray = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ]
  var specialarray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  let passwordLength = prompt("Please enter a password that is between 8 and 128 characters");
  if (passwordLength <8|| passwordLength >128){
  alert("Wrong Length")
  console.log (passwordLength)
  }
  // Declared the use of uppercase,lowercase,numbers and special characters that I added to the arrays above
 let adduppercase = confirm("Would you like to add an uppercase letter?")
//  console logged each of the different criterias
 console.log (adduppercase);
 let addlowercase = confirm("Would you like to add a lowercase letter?")
 console.log (addlowercase);
 let addnumber = confirm("Would you like to add a number?")
 console.log (addnumber)
 let addspecialcharacter = confirm("Would you like to add a special character?")
console.log (addspecialcharacter);



}
// Added an event listener to generate the generate password button
generateBtn.addEventListener("click", writePassword);
