function login(arr) {
  let pass = arr[0];
  let tempPass = "";
  let counter = 0;
  for (let i = pass.length - 1; i >= 0; i--) {
    tempPass += pass[i];
  }
  for (let j = 1; j <= arr.length; j++) {
    if (arr[j] == tempPass) {
      console.log(`User ${pass} logged in.`);
      break;
    } else {
      counter++;
      if (counter == 4) {
        console.log(`User ${pass} blocked!`);
        break;
      } else {
        console.log("Incorrect password. Try again.");
      }
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
login(["momo", "omom"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
