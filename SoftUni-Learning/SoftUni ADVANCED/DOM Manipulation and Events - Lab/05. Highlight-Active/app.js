function focused() {
  Array.from(document.querySelectorAll("input")).forEach((i) => {
    i.addEventListener("focus", onFocused);
    i.addEventListener("blur", onBlur);
  });
  function onFocused(e) {
    e.target.parentElement.className = 'focused';
  }

  function onBlur(e) {
    e.target.parentElement.className = '';
  }
}
