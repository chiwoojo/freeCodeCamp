function largestOfFour(arr) {
  
  var bigNumArr = [];
  
  for(i=0; i < arr.length; i++) {
  
  var biggestNum = 0;
  
  bigNumArr.push(0);
  
    for (j=0; j < arr[i].length; j++) {
      
      if (arr[i][j] > biggestNum) {
        biggestNum = arr[i][j];
      }
      bigNumArr[i] = biggestNum;
    }
    
  }
  
  // You can do this!
  return bigNumArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);