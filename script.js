// Assignment Code
/* 
function generatePassword(){
  Alphabet Array (Can set it as uppercase and lowercase later)
  Numbers Array (Random Number generator?)
  Special Characters Array 
  ----DONE----
  lowerCaseChosen boolean
  upperCaseChosen boolean
  numberChosen boolean 
  specialCharacterChosen boolean
  
  prompt user for password length 

  if (passwordLength < 8){
    return "Please  try again with a longer password."
  }

  if (passwordLength > 128){
    return "Please try again with a shorter password."
  }

  prompt user for conditions:
  Do you want lowercase characters?
  if yes, lowercaseChosen = TRUE; if no, lowercaseChosen = FALSE; 
  Do you want uppercase characters?
  Do you want numbers in your password?
  Do you want special characters in your password?


  for()

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
  ^^^ that article talks about how to make an empty array of a certain length ^^^
  VVV                                                                         VVV
  var passwordArray = Array(passwordLength);

  for (i = 0; i < passwordLength; i++){
    ----FILL IN ALL OF THE CONDITIONS AND ACTUALLY BUILD OUT THE PASSWORD ARRAY-----
    if (lowercaseChosen === TRUE){
      passwordArray[i] = lowercaseArray(i*3 OR randomNumberVariable);
    }
    if (uppercaseChosen === TRUE){
      passwordArray[i+1] = uppercaseArray(i+1 OR secondRandomNumberVariable);
    }

    if (numberChosen === TRUE){
      passwordArray[i+2] = numberArray(...);
    }

    if (specialCharacterChosen === TRUE){
      passwordArray[i+3] = specialCharacterArray(...);
    }


  }
  
  after passwordArray is fully filled out, then scramble it up somehow. 
  This link has an interesting shuffle based on the Fisher-Yates Shuffle:
  https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  Next, I need to turn my array into one string 


  This link provides how to turn an array into a string with no separating commas: 
  https://herewecode.io/blog/array-to-string-without-commas-javascript/#:~:text=In%20JavaScript%2C%20all%20arrays%20have,all%20the%20array%20elements%20concatenated.
  .join("");

  print the string to the screen.

  ////Eh....backup idea if the for loop is a total bust 
  create a new array out of exisiting arrays with that one command from the activities...
  New array = lowercaseArray(0) + specialCharactersArray(0) + whatever else was selected...

}

*/

function generatePassword(){
  var lowercaseArray = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
  "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
  "T", "U", "V", "W", "X", "Y", "Z"]; 
  var numberArray = Array(129); 
  for (i = 0; i < 129; i++){
    numberArray[i] = i; 
  }
  var specialCharacterArray = ["!","@","#", "$", "%","^", "&", "*", "(", ")"];

  console.log(numberArray); 
  console.log(lowercaseArray);
  console.log(uppercaseArray); 
  console.log(specialCharacterArray);

  var lowercaseChosen = true; 
  var uppercaseChosen = true;
  var numberChosen = true; 
  var specialCharacterChosen = true; 



}
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
