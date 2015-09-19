function destroyer(arr) {
  // Remove all the values

  var arguSubstitute = arguments;

  var checkThisArray = arguments[0];

  console.log("CheckThisArray is " + checkThisArray);

  var finalArray = [];

  var withTheseNumbers = [];

  finalArray = checkThisArray.filter(filterArray);

  function filterArray(value) {
      for(i=1; i<arguSubstitute.length; i++) {
          console.log("i = " + i);
          console.log("Value is " + value);
          console.log("arguments @ 'i' is " + arguSubstitute[i]);
        if (value === arguSubstitute[i]) {
          return false;
        }
      }
      return true;
  };


  //1st arguement should be put into a new array

  //2nd - beyond arguments could be tested against the first array
  //use loops to loop through the 2nd-beyond arguments
  //2nd-beyond arguments should be used to filter the first array

  //return the array


  return finalArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2);
