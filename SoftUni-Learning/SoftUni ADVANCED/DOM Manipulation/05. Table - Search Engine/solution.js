function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  const input = document.getElementById("searchField");
  let doc = document.querySelectorAll("tbody tr");

  function onClick() {
    for (const el of doc) {
      el.classList.remove("select");

      if (input.value !== "" && el.innerHTML.includes(input.value)) {
        el.className = "select";
      }
    }
    input.value = "";
  }
}
