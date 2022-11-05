function solve() {
  const departBtn = document.getElementById("depart");
  const arriveBtn = document.getElementById("arrive");
  const spanInfo = document.getElementsByClassName("info")[0];

  let stop = {
    next: "depot",
  };

  async function depart() {
    if (departBtn.disabled === false) {
      departBtn.disabled = true;
      arriveBtn.disabled = false;
    }

    const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;
    const response = await fetch(url);
    stop = await response.json();
    spanInfo.textContent = `Next stop ${stop.name}`;
  }

  function arrive() {
    if (arriveBtn.disabled === false) {
      arriveBtn.disabled = true;
      departBtn.disabled = false;
    }
    spanInfo.textContent = `Arriving at ${stop.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
