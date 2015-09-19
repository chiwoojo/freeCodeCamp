/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Resources:

Arguments object
Array.reduce()

*/

function unite(arr1, arr2, arr3) {

  /*
    First attemp at this function.
  */

  /*
  //create an empty master array
  var master_array = [];

  //make the master array out of other arrays
  for (var i = 0; i < arguments.length; i++) {
    master_array.push(arguments[i]);
  }

  //reduce array down into 1 array with arguments object
  master_array.reduce(function(accumulation, item) {
    return accumulation.concat(item);
  });

  //for each elements in the master array
  for (var i=0; i<master_array.length; i++) {
    //make the element at index equal to a variable
    var current_value = i;
    //filter element of the master array. This line basically delete all duplicates in the array
    master_array.filter(function(item) {
      if (item === i) {
        return false;
      } else {
        return true;
      }
    });

    //put the 1 element into place that was deleted by filter at the right index
    master_array.unshift(current_value);

    }

    return master_array;

    */

    /*
      Second Attempt after thinking about it some inside of a bus coming home from a dentist appointment 
    */

    //merge all the arrays into one huge array by using reduce ::

    //create an empty master array
    var master_array = [];

    //take all the array that were passed as parameters and add them all into one single array
    for (var i = 0; i < arguments.length; i++) {
      master_array.push(arguments[i]);
    }

    //concatenate all the arrays into 1 array.
    master_array = master_array.reduce(function(accumulation, item) {
      return accumulation.concat(item);
    });

    console.log("Master Array is : " + master_array);

    //for each inside of for each loop to go through and 
/*    master_array.forEach(function(i_val, i_index) {
      master_array.forEach(function(j_val, j_index) {
        if (i_val === j_val) {
          console.log("i_val is : "+ i_val + " j_val is : " + j_val);
          console.log("First element slice is : "+master_array.slice(0,j_index));
          console.log("Second element slice is : "+master_array.slice(j_index+1));
          master_array = master_array.slice(0,j_index).concat(master_array.slice(j_index+1));
        }
      });
    });
*/
    
   var results_array = [];
   var temp = [];
   for (var i = 0; i < master_array.length; i++) {

      for (var j = 0; j < master_array.length; j++) {
        temp = master_array.filter(function(val) {
          if (val === master_array[i]) {
          //if val doesn't equal master_array @ index i, don't put into master_array
            return true;
          } else {
            return false;
          }
        });
      

        console.log(results_array);

        console.log("new master array is : " + master_array);

      };

    };


    return master_array;

}

console.log(unite([1,2,3],[1,2,3,4]));


//unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
