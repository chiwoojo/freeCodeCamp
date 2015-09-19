function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var end = false;
  if (str.substr(str.length - target.length) === target) {
      end = true;
  }
  return end;
}

end('Bastian', 'n');