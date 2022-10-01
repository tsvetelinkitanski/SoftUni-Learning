function sortArray(numbers, str) {
  return str === "asc"
    ? numbers.sort((a, b) => a - b)
    : numbers.sort((a, b) => b - a);
}
console.log(sortArray([14, 7, 17, 6, 8], "asc"));
console.log(sortArray([14, 7, 17, 6, 8], "desc"));
