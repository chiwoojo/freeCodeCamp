function slasher(arr, howMany) {
  // it doesn't always pay to be first

  var removed = arr.splice(0, howMany);
  return arr;
}
