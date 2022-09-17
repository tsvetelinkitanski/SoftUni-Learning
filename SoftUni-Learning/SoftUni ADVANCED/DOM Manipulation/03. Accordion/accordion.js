function toggle() {
  let btn = document.getElementsByClassName("button")[0];
  let div = document.getElementById("extra");

  if (btn.innerHTML === "More") {
    div.style.display = "block";
    btn.innerHTML = "Less";
  } else if (btn.innerHTML === "Less") {
    div.style.display = "none";
    btn.innerHTML = "More";
  }
}
