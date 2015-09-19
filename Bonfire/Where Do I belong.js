function where(arr, num) {
  // Find my place in this sorted array.

  //sort the array using Array.sort(compareNumbers) ;

  //find the index in the array when the number is less than the num in the array
  //--> for loop

  //if that number is found, return the index

  var sortedArr = arr.sort(compareNumbers);

  function compareNumbers(a, b) {
    return a - b;
  }

  for(i=0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      return i;
    }
  }


  return 0;
}

where([40, 60], 50);
