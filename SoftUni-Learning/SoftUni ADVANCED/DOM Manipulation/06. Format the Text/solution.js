function solve() {
  let textArea = document.getElementById("input");
  let splitted = textArea.value.split(".").filter((s) => s !== "" && s!=='\n');
  let output = document.getElementById("output");

  while (splitted.length > 0) {
    let txt = splitted.splice(0, 3).join(". ") + ".";
    let p = document.createElement("p");
    p.textContent = txt;
    output.appendChild(p);
  }
}
