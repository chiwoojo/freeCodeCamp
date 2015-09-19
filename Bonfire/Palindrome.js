function palindrome(str) {
	var newStr = str.replace(/[^\w]/g, '');
	var strArray = newStr.split("");
  strArray.reverse();
  str2 = strArray.join("");
  if (str2.toLowerCase() === newStr.toLowerCase()) {
  	return true;
  } else {
  	return false;
  }

}



