function argumentInfo(...arguments) {
  let data = {};
  for (const arg of arguments) {
    let type = typeof arg;

    console.log(`${type}: ${arg}`);

    if (!data[type]) {
      data[type] = 0;
    }
    data[type]++;
  }

  Object.keys(data).forEach((el) => {
    console.log(`${el} = ${data[el]}`);
    return;
  });
}
argumentInfo("cat", 42, function () {
  console.log("Hello world!");
});
