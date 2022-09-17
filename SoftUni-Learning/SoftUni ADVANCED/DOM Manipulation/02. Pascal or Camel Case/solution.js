function solve() {
  let textField = document.getElementById("text").value;
  let textConvert = document.getElementById("naming-convention").value;
  let res = document.getElementById("result");
  textField = textField.toLowerCase().split(" ");
  let output = "";
  if (textConvert === "Pascal Case") {
    for (let i = 0; i < textField.length; i++) {
      let counter = 0;
      for (const word of textField[i]) {
        if (counter === 0) {
          output += word.toUpperCase();
          counter++;
        } else {
          output += word;
        }
      }
    }
  } else if (textConvert === "Camel Case") {
    output += textField[0];
    for (let i = 1; i < textField.length; i++) {
      let counter = 0;
      for (const word of textField[i]) {
        if (counter === 0) {
          output += word.toUpperCase();
          counter++;
        } else {
          output += word;
        }
      }
    }
  } else {
    output = "Error!";
  }
  res.innerText = output;
}
