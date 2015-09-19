/*

This function will take an array and chuck it into arrays that are of parameter 'size',
creating a nested array situation if size > 1. 

*/

function chunk(arr, size) {

  var masterArray = [];
  //intiate array that is going to be returned
  
  var nestedArray = [];

  var count = arr.length/size;
  //count is divided up by number of size which in this case is equal to 6/4 = 1.5
  
  
  for (i=0; i < count; i++) {
  //run this loop as many times as 1.5 times. This will run 2 times in this case. 
     for (j=0; j < size; j++) {
     //run this loop 4 times
       if(arr[j] !== undefined) {
       //if the variable arr is not undefined,
         nestedArray.push(arr[j]);
         //put the first 4 values of 'arr' array into nested Array
       }
     }
     
     masterArray.push(nestedArray);
     //push the nested array : [0, 1, 2, 3] into masterArray
    

     arr.splice(0, size);
    //cut the array, in this case : [0, 1, 2, 3, 4, 5] will turn into [4, 5]
    
     nestedArray = [];
     //reset nestedArray
    
  }

  return masterArray;
}

chunk([0, 1, 2, 3, 4, 5], 4);
