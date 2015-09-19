function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target || ((history.length % 4) === 4))
      return null;
    else
      return find(start + 1000, history + "M") ||
             find(start + 900, history + "DM") ||
             find(start + 500, history + "D") ||
             find(start + 400, history + "CD") ||
             find(start + 100, history + "C") ||
             find(start + 90, history + "LC") ||
             find(start + 50, history + "L") ||
             find(start + 40, history + "XL") ||
             find(start + 10, history + "X") ||
             find(start + 9, history + "VX") ||
             find(start + 5, history + "V") ||
             find(start + 4, history + "IV") ||
             find(start + 1, history + "I");

  }
  return find(0, "");
}

console.log(findSolution(1984));
