function sumAll(arr) {

  var sortedArr = arr.sort(compareNumbers);

  function compareNumbers(a, b) {
    return a - b;
  }

  var startNum = sortedArr[0];

  var endNum = sortedArr[1];

  var sumOfArr = 0;

  var newArr = [];

  for(i=startNum; i <= endNum; i++) {
    newArr.push(i);
  }

  for(i = 0; i < newArr.length; i++) {
    sumOfArr += newArr[i];
  }

  return sumOfArr;
}

sumAll([1, 4]);
