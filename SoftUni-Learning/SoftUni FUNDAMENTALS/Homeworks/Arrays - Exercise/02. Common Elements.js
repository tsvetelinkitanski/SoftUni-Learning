function commonEl(arr1, arr2) {
  for (char of arr1) {
    for (char1 of arr2) {
      if (char === char1) {
        console.log(char);
      }
    }
  }
}
commonEl(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
commonEl(
  ["S", "o", "f", "t", "U", "n", "i", " "],
  ["s", "o", "c", "i", "a", "l"]
);
