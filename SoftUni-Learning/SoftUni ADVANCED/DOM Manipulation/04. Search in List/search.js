function search() {
  let input = document.getElementById("searchText");
  let div = document.getElementById("result");
  let towns = document.getElementById("towns").getElementsByTagName("li");

  let elements = [];

  for (const town of towns) {
    elements.push(town.innerHTML);
  }

  let output = elements.filter((word) => word.includes(input.value));
  output.forEach((index) => {
    let indx = elements.indexOf(index);
    towns[indx].style = "font-weight: bold ;text-decoration: underline";
  });

  div.innerHTML = `${output.length} matches found`;
  input.value = "";
}
