function coffeeLover(array) {
  let modelsCoffee = array.shift().split(" ");
  let number = array.shift();

  let include = (arr, item) => arr.push(item);
  let remove = (arr, action, item) => {
    if (action === "first") {
      arr.splice(0, item);
    } else if (action === "last") {
      arr.splice(-item);
    }
  };
  let prefer = (arr, item1, item2) => {
    let oldItem = arr[item1];
    arr[item1] = arr[item2];
    arr[item2] = oldItem;
  };
  let command = array.shift();

  for (let i = 0; i < number; i++) {
    let action = command.split(" ")[0];
    let item = command.split(" ")[1];
    switch (action) {
      case "Include":
        include(modelsCoffee, item);
        break;
      case "Remove":
        let numberOfCoffees = command.split(" ")[2];
        if (Number(numberOfCoffees) > modelsCoffee.length) {
          continue;
        } else {
          remove(modelsCoffee, item, numberOfCoffees);
        }
        break;
      case "Prefer":
        let indexCoffe = command.split(" ")[2];
        if (
          Number(item) <= modelsCoffee.length &&
          Number(indexCoffe) <= modelsCoffee.length
        ) {
          prefer(modelsCoffee, item, indexCoffe);
        }
        break;
      case "Reverse":
        modelsCoffee.reverse();
        break;
    }
    command = array.shift();
  }
  console.log(`Coffees:`);
  console.log(modelsCoffee.join(" "));
}
coffeeLover([
  "Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
  "5",
  "Include TurkishCoffee",
  "Remove first 2",
  "Remove last 1",
  "Prefer 3 1",
  "Reverse",
]);
