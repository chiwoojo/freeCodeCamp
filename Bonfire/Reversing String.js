//Reverse a String -- the methods given from FreeCodeCamp makes this so easy!

function reverseString(str) {
  var strArray = str.split("");
  strArray.reverse();
  str = strArray.join("");
  return str;
}

console.log(reverseString('Vincent'));