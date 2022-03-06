// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Code added from here//
//promot choice password Criteria, Input collection//
//length//
var number=window.prompt ('Y or N for number in password');
//upperCase, true or false//
var upperCase=window.prompt ('Y or N for upperCase in password');
//lowerCase, true or false//
var lowerCase=window.prompt ('Y or N for lowercase in password');
//symbol, true or false//
var symbol=window.prompt ('Y or N for symbol in password, for example !@#');
//length, 8 to 125 characters//
var length=window.prompt ('enter ideal length of password between 8 to 125 characters');


console.log(number,upperCase,lowerCase,symbol, length);
//If user pressed Cancel, immediately end function//


//define for each criteria//

var keys ={
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

//Part2: function to generate output for each criteria//
//add if condition based on promot input..WIP//
 if (upperCase == "Y") {
   var getKeyupperCase =[
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
       }
   ]
 } 
 
 if (lowerCase == "Y") {
  var getKeylowerCase =[
  function lowerCase() {
   return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
     }
    ] 
 }

 if(number == "Y") {
var getKeynumber=[
function number() {
  return keys.number[Math.floor(Math.random() * keys.number.length)]; 
}
]
 }

 if (symbol == "Y") {
  var getKeySymbol = [
function symbol() {
return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
}
]
 }


//part3: function password and check length//
// function createPassword() {
// var passwordBox=document.getElementById("password");
// let password="";
// while (length.value > password.length) {
//  let keyToAdd = getKey [Math.floor(Math.random()*getKeySymbol.length)];
//  let isChecked=document.getElementById (keyToAdd.name).checked;
//  if (isChecked) {
//    password +=keyToAdd();
//  }

// passwordBox.innerHTML = password;
// }
//function createPassword() {
// var upper = document.getElementById("upperCase").checked;
// var lower = document.getElementById("lowerCase").checked;
// var number = document.getElementById("number").checked;
// var symbol = document.getElementById("symbol").checked;
//}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
