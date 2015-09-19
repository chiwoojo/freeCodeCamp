function truncate(str, num) {
  // Clear out that junk in your trunk
  var newStr = str;
  if(str.length > num && num > 3) {
    newStr = str.substring(0, num - 3) + "..."; 
  }
  return newStr;
}