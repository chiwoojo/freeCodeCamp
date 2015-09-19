function findLongestWord(str) {

  var newStrArray = str.split(" ");

  var longStr = "";

  for (i=0; i < newStrArray.length; i++) {

      if (newStrArray[i].length > longStr.length) {
          longStr = newStrArray[i];
      }
      
  } 
console.log(longStr);
return longStr.length;

}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
