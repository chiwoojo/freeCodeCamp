function replace(str, before, after) {
  
  //newArr = Cut up array into individual words, and make it lower case
  //testArr = cut up array into individual words, and use it for testing
  //search the array for a match with the word BEFORE in newArr
  //if there is a match, test if the word from the testArr is lowercase or uppercase
  //  if it is a uppercase, make the AFTER uppercase
  //  if it is lower case, do nothing.
  //replace the word 
  //return the word 
  
  var newArr = str.toLowerCase().split(" ");
  var finalArr = str.split(" "); 
  
  for (i=0; i < newArr.length; i++) {
      
    console.log(before.charAt(0));
    
    console.log(finalArr[i].charAt(0));
    
    if( ( (before.toLowerCase() === newArr[i]) && (before.charAt(0) !== finalArr[i].charAt(0)) ) || ( (before.toLowerCase() === newArr[i]) && (before.charAt(0).toLowerCase() !== finalArr[i].charAt(0)) )) {
        
      after = after.charAt(0).toUpperCase() + after.substring(1);
      finalArr[i] = after;
    } 
    
    else if (before.toLowerCase() === newArr[i]) {
        
      finalArr[i] = after; 
      
    }
  }
  
  
  return finalArr.join(' ');
}

replace("His name is Tom", "Tom", "john");


/* 
 	 Someone else's code. I think it is much efficient and good to look into. 
   website: https://gist.github.com/oab00/31f1c6cb93e91eee5958
	 P.S. he doesn't have any other solutions on there.
*/

function replace(str, before, after) {
  
  var charBefore = before.split('')[0];
  //charBefore takes on the first letter of the word that we are trying to find in 'str'
  
  var charAfter;
  //variable initiation
  
  if (charBefore == charBefore.toUpperCase()){
  //if the first character is uppercase, 
    
    charAfter = after.split('')[0].toUpperCase();
    //takes the first character of 'after' and makes it uppercase
    after = after.split('');
    //split into array
    after[0] = charAfter;
    //insert uppercase
    after = after.join('');
    //join into string
  }
  
  str = str.replace(before, after);
  //returns string that replaces the word 
  
  return str;
}

replace("He is Sleeping on the couch", "Sleeping", "sitting");








