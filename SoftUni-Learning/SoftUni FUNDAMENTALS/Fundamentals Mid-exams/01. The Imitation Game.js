function imitationGame(input) {
  let message = input.shift();
  index = 0;
  let operation = input[index++].split("|");
  let firstEl = operation[1];
  let secondEl = operation[2];

  for (let i = 0; i < input.length; i++) {
    if (operation[0] === "ChangeAll") {
      message = changeAll(message, firstEl, secondEl);
    }
    let newOperation = input[index++].split('|')
    operation = newOperation;
  }

  console.log(operation);
}
function changeAll(message, substring, replacement) {
  let newMessage = message.replaceAll(substring, replacement);
  return newMessage;
function insertValue(message, index, value) {
  let newMessage = message.insert(index, value);
  return newMessage
}
console.log(insertValue(message, firstEl, secondEl));
}
imitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
