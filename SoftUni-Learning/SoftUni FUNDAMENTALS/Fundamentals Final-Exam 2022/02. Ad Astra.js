function adAstra(input) {
  let inputAsString = input[0];
  const pattern = /([#||])[A-Za-z ]+\1[0-9]{2}\/[0-9]{2}\/[0-9]{2}\1[0-9]+\1/g;
  const matcher = inputAsString.match(pattern);
  let item;
  let bestBefore;
  let calories;
  let result = [];
  
  if (matcher === null) {
    console.log(`You have food to last you for: 0 days!`);
    return;
  }

  let sumOfCalories = 0;
  for (let el of matcher) {
    if (el.startsWith("#")) {
      el = el.substring(1, el.length - 1);
      [item, bestBefore, calories] = el.split("#");
      sumOfCalories += Number(calories);
      result.push(
        `Item: ${item}, Best before: ${bestBefore}, Nutrition: ${calories}`
      );
    } else if (el.startsWith("|")) {
      el = el.substring(1, el.length - 1);
      [item, bestBefore, calories] = el.split("|");
      sumOfCalories += Number(calories);
      result.push(
        `Item: ${item}, Best before: ${bestBefore}, Nutrition: ${calories}`
      );
    }
  }
  let days = sumOfCalories / 2000;
  console.log(`You have food to last you for: ${Math.floor(days)} days!`);
  result.forEach((element) => console.log(element));
}

adAstra([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
console.log("-------------------");

adAstra([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
console.log("-------------------");

adAstra(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
