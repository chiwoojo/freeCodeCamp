function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  //take array
  //filter the array with a Boolean test function

  function faultyInput(x) {
    return Boolean(x);
  }


  return arr.filter(faultyInput);
}

bouncer([7, 'ate', '', false, 9]);
