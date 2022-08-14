function convertToObj(jsonStr) {
  let strToObj = JSON.parse(jsonStr);
  for (const key of Object.keys(strToObj)) {
    console.log(`${key}: ${strToObj[key]}`);
  }
}
convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
