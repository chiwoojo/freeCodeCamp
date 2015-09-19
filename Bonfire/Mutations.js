function mutation(arr) {

  var array1 = arr[0].toString().toLowerCase().split('');
  //take first array and put into new array
  var array2 = arr[1].toString().toLowerCase().split('');
  //take second array and put into another array
  //split each array

  var match = true;

  for (i=0; i < array2.length; i++) {
  //loop through the second array
    if (array1.indexOf(array2[i]) === -1) {
      match = false;
    }
  }
    //if there is a match, keep looping
    //if there isn't a match, return false;

  return match;
}


mutation(['hello', 'hey']);
