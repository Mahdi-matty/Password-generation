// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//  when button is cliked series of prompt should be shown for password criteria
// we add onclick atribute to button

// first step password length
// function getPassLength(){
//   let length = prompt ("Enter password lenth? ")
//   while (!length || isNaN(length) || length<8 || length > 125) {
//     length = prompt("please enter a valid number between 8 and 125")
//   }
//   return parseInt(length);
// }
// const passwordLength= getPassLength();

// second type of charachter 
function charType() {
  const characterTypes = [
    { name: 'Numbers', characters: '0123456789', selected: false },
    { name: 'Uppercase Letters', characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', selected: false },
    { name: 'Lowercase Letters', characters: 'abcdefghijklmnopqrstuvwxyz', selected: false },
    { name: 'Special Characters', characters: '!@#$%^&*()_+{}[]|:;"<>,.?/~', selected: false }
  ];
  const selectedTypes = [];
  for (const type of characterTypes) {
    const userInput = prompt(`Include ${type.name} in the password? (yes/no)`);

    if (userInput && userInput.toLowerCase() === 'yes') {
      selectedTypes.push(type);
    }

  }
}

// third password should be generated

//  last password hsould be shown in alert or windoes.


 document.getElementById("generate").onclick= function passwordGenerate() {
  function getPassLength(){
    let length = prompt ("Enter password lenth? ")
  while (!length || isNaN(length) || length<8 || length > 125) {
    length = prompt("please enter a valid number between 8 and 125")
  }
  return parseInt(length);
}
const passwordLength= getPassLength();
function charType(){
  const characterTypes = [
    { name: 'Numbers', characters: '0123456789', selected: false },
    { name: 'Uppercase Letters', characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', selected: false },
    { name: 'Lowercase Letters', characters: 'abcdefghijklmnopqrstuvwxyz', selected: false },
    { name: 'Special Characters', characters: '!@#$%^&*()_+{}[]|:;"<>,.?/~', selected: false }
  ];
  const selectedTypes = [];
  for (const type of characterTypes) {
    const userInput = prompt(`Include ${type.name} in the password? (yes/no)`);

    if (userInput && userInput.toLowerCase() === 'yes') {
      selectedTypes.push(type);
    }
  }
  return selectedTypes;
}
const selectedCharacterTypes = charType();
  }

 





