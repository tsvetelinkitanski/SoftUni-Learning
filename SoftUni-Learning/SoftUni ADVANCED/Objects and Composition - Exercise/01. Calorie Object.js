function calorieObj(arr) {
  let res = {};
  for (let index = 0; index < arr.length; index += 2) {
    let el = arr[index];
    let calories = arr[index + 1];
    res[el] = Number(calories);
  }
  console.log(res);
}
calorieObj(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
