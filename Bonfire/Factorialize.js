function factorialize(num) {
  var base = 1;
  for (i=0; i < num; i++) {
    base *= (num - i)
  }
  return base;
}

console.log(factorialize(5));