//  1-writing a function that make the charachter length
// function setLength () {
//     let length = prompt ("what is the password length should be?");
//     while (!length || isNaN(length) || length < 8 || length > 125) {
//         length = prompt("please enter a valid number between 8 and 125")
//     }
// return parseInt(length);
// }
// const passLength = setLength();

//  2-making a function that prompt the available charachter
// const numbers = {charachters :"0123456789" , selected : false}
// const upperCase = { charachters :"ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected : flase }
// const lowerCase = {charachters : "abcdefghijklmnopqrstuvwxyz", selected : false}
// const specialChar = { charachters : "!@#$%^&*()_+{}[]|:;<>,.?/~", selected : false}
// function charachterInclude() {
// numbers.selected = confirm("include numbers??");
// upperCase.selected = confirm("include uppercanse??");
// lowerCase.selected = confirm("include lowercase??");
// specialChar.selected = confirm("inclide specialcharachters?");
// const selectedItems = []
// if (numbers.selected)   charachterSets.push(numbers.charachters)
// if (upperCase.selected) charachterSets.push(upperCase.charachters)
// if (lowerCase.selected) charachterSets.push(lowerCase.charachters)
// if (specialChar.selected) charachterSets.push(specialChar.charachters)
// }

// 3-generating password using above methods.

document.getElementById("generate").onclick= function passwordGenerate() {
  function setLength () {
      let length = prompt ("what is the password length should be?");
      while (!length || isNaN(length) || length < 8 || length > 125) {
          length = prompt("please enter a valid number between 8 and 125")
      }
  return parseInt(length);
  }
  const passLength = setLength();
  const numbers = {charachters :"0123456789" , selected : false}
  const upperCase = { charachters :"ABCDEFGHIJKLMNOPQRSTUVWXYZ", selected : false }
  const lowerCase = {charachters : "abcdefghijklmnopqrstuvwxyz", selected : false}
  const specialChar = { charachters : "!@#$%^&*()_+{}[]|:;<>,.?/~", selected : false}
  function charachterInclude() {
  numbers.selected = confirm("include numbers??");
  upperCase.selected = confirm("include uppercanse??");
  lowerCase.selected = confirm("include lowercase??");
  specialChar.selected = confirm("inclide specialcharachters?");
  }
  charachterInclude();
  const charachterSets = []
  if (numbers.selected)   charachterSets.push(numbers.charachters);
  if (upperCase.selected) charachterSets.push(upperCase.charachters);
  if (lowerCase.selected) charachterSets.push(lowerCase.charachters);
  if (specialChar.selected) charachterSets.push(specialChar.charachters);

  function generatePassword (){
      let password= "";
  const allInclusion = charachterSets.length

  for (var i=0; i<passLength; i++) {
      const everyIncluded =Math.floor(Math.random() * allInclusion);
      const allType = charachterSets[ everyIncluded];
      const whatBe = Math.floor(Math.random() *allType.length);
      password += allType.charAt(whatBe);

  }
  return password;
  }
  const generateedPassword = generatePassword();
  document.getElementById("password1").value= generateedPassword;

  }

 





