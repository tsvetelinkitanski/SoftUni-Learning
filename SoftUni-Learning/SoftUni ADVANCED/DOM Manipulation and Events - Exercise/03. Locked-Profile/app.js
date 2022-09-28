function lockedProfile() {
  let inputBtn = document.querySelectorAll('input[type="radio"]');

  Array.from(document.querySelectorAll(".profile button")).forEach((btn) =>
    btn.addEventListener("click", onClick)
  );

  function onClick(e) {
    let profile = e.target.parentElement;
    let isActive = profile.querySelector('input[value="unlock"]').checked;
    if (isActive) {
      let div = Array.from(profile.querySelectorAll("div")).find((el) => {
        return el.id.includes("HiddenFields");
      });
      if (e.target.textContent === "Show more") {
        div.style.display = "block";
        e.target.textContent = "Hide it";
      } else if (e.target.textContent === "Hide it") {
        div.style.display = "none";
        e.target.textContent = "Show more";
      }
    }
  }
}
