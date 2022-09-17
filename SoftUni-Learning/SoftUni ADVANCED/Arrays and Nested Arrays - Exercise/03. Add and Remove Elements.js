function addAndRemove(arr) {
  let counter = 1;
  let result = [];
  let boolean = true;
  arr.forEach((command) => {
    if (command === "add") {
      result.push(counter);
    } else {
      result.pop();
    }
    counter++;
  });
  if (result.length == 0) {
    boolean = false;
    console.log("Empty");
  }
  if (boolean) {
    console.log(result.join('\n'));
  }
}
addAndRemove(["add", "add", "add", "add"]);
addAndRemove(["add", "add", "remove", "add", "add"]);
addAndRemove(["remove", "remove", "remove"]);
