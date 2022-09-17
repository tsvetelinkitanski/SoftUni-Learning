function listOFNames(names) {
  let result = names.sort((a, b) => a.localeCompare(b));
  let counter = 1;
  result.forEach((el) => {
    return (`${counter}.${el}`);
    counter++;
  });
}
listOFNames(["John", "Bob", "Christina", "Ema"]);
