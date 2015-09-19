/*

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()

*/


function translate(str) {
  
  //comments below reflect my intial algorithm thoughts
  //split the str into array with regex /[aeiou]\w+/ig which will split the consonant clusters into seperate arrays
  //if str variable is longer than 1, which is to say that the word contains a consonant,
    //make a new string that takes the array[0] and moves it after array[1] 
    //adds "ay" to the end of the string
  //if str variable is just 1, which is to say that the word starts with a vowel,
    //make 'str' variable equal to string variable PLUS "way"
  
  var strArray = str.split(/[aeiou]\w+/ig).splice(0,1); 

  console.log(strArray);
  if (strArray[0] !== '') {
    str = str.substring(strArray[0].length) + strArray[0] + "ay";
  } else {
    str = str + "way";
  }
  
  return str;
}

console.log(translate("glove"));
