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
  var numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specialCharacterArray = ["!","@","#", "$", "%","^", "&", "*", "(", ")"];

  console.log(numberArray); 
  console.log(lowercaseArray);
  console.log(uppercaseArray); 
  console.log(specialCharacterArray);

  var lowercaseChosen = true; 
  var uppercaseChosen = true;
  var numberChosen = true; 
  var specialCharacterChosen = true; 

  var passwordLength = prompt("How many characters do you want your password to be?", "8-128 characters. Please enter only numbers.");
  console.log(passwordLength);
  passwordLength = Number(passwordLength);
  
  console.log(typeof passwordLength);
  console.log(passwordLength);
  
  //resource I used to check if passwordLength was NaN: https://www.tutorialspoint.com/How-to-check-if-a-variable-is-NaN-in-JavaScript#:~:text=Use%20the%20Number.&text=The%20isNaN()%20method%20checks,always%20returns%20a%20false%20value.
  if (isNaN(passwordLength)){
    return "Please enter only numbers!";
  }

  if (passwordLength < 8){
    return "Password is too short. Please try again."
  }

  if (passwordLength > 128){
    return "Password is too long. Please try again."
  }

  //info about using confirm() from: https://sabe.io/blog/javascript-yes-no-confirmation-box#:~:text=The%20best%20way%20to%20create,Ok%20and%20a%20Cancel%20button.

  lowercaseChosen = confirm("Do you want lowercase characters in your password? Press OK for 'Yes' and CANCEL for 'No'");
  console.log("lowercase: ", lowercaseChosen);
  uppercaseChosen = confirm("Do you want uppercase characters in your password? Press OK for 'Yes' and CANCEL for 'No'");
  console.log("uppercase: ", uppercaseChosen);
  numberChosen = confirm("Do you want numerical characters in your password? Press OK for 'Yes' and CANCEL for 'No'");
  console.log("numbers: ", numberChosen);
  specialCharacterChosen = confirm("Do you want special characters in your password? Press OK for 'Yes' and CANCEL for 'No'");
  console.log("special characters: ", specialCharacterChosen);

  if (!lowercaseChosen && !uppercaseChosen && !numberChosen && !specialCharacterChosen){
    return "Please try again. At least one condition must be set!";
  }

  //randomNumber code source: https://www.w3schools.com/js/js_random.asp
  var alphabetRandom = Math.floor(Math.random() * 26);
  var alphabetRandom2 = Math.floor(Math.random() * 26);
  var alphabetRandom3 = Math.floor(Math.random() * 26);
  var alphabetRandom4 = Math.floor(Math.random() * 26);
  var alphabetRandom5 = Math.floor(Math.random() * 26);
  var numberRandom = Math.floor(Math.random() * 10);
  var specialCharacterRandom = Math.floor(Math.random() * 10);

  var passwordArray = Array(passwordLength); 
  for (j = 0; j < passwordLength; j++){
    if (lowercaseChosen){
      passwordArray[j] = lowercaseArray[Math.floor(Math.random() *26)];
    }

    if (!lowercaseChosen){
      passwordArray[j] = uppercaseArray[Math.floor(Math.random() *26)];
    }

    if (!lowercaseChosen && !uppercaseChosen){
      passwordArray[j] = numberArray[Math.floor(Math.random() *10)];
    }

    if (!lowercaseChosen && !uppercaseChosen && !numberChosen){
      passwordArray[j] = specialCharacterArray[Math.floor(Math.random() *10)];
    }

    if (uppercaseChosen){
      passwordArray[2] = uppercaseArray[Math.floor(Math.random() *26)];
    }

    if (numberChosen){
      passwordArray[4] = numberArray[Math.floor(Math.random() *10)];
    }

    if (specialCharacterChosen){
      passwordArray[6] = specialCharacterArray[Math.floor(Math.random() *10)];
    }

  }
  console.log(passwordArray);

  //shuffle the array 
  function shuffleArray(array){
    var currentIndex = array.length, randomIndex; 

    while (currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex); 
      currentIndex--; 

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  }

  shuffleArray(passwordArray);
  console.log("shuffled password: " +passwordArray); 

  var finalPassword = passwordArray.join("");
  console.log(finalPassword);

  return finalPassword; 




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
