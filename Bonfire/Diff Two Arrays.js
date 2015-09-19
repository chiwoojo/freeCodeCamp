
/*
  First primitive version
*/

function diff (arr, arr2) {


  var longerArray = arr2;
  var shorterArray = arr;

  if (arr.length > arr2.length) {
    longerArray = arr;
    shorterArray = arr2;
  }

  var finalArray = [];
  var finalArray2 = [];

  finalArray = longerArray.filter(filterArray);
  finalArray2 = shorterArray.filter(filterArray2);

  function filterArray(value) {
      for(i=0; i < shorterArray.length; i++) {
        if (value === shorterArray[i]) {
          return false;
        }
      }
      return true;
  }

  function filterArray2(value) {
      for(i=0; i < longerArray.length; i++) {
        if (value === longerArray[i]) {
          return false;
        }
      }
      return true;
  }


  return finalArray.concat(finalArray2);
}

diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]);



/**
 This is the second version after I got some help from the chat rooms
**/

function diff (arr, arr2) {


  var bothArray = arr.concat(arr2);
  //basically adds both Arrays into one

  finalArray = bothArray.filter(filterArray2).concat(bothArray.filter(filterArray));

  function filterArray(value) {
      return arr.indexOf(value) === -1;
  }

  function filterArray2(value) {
      return arr2.indexOf(value) === -1;
  }

  return finalArray;
}

diff([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]);
