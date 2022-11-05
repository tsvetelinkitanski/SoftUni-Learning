async function getInfo() {
  const inputField = document.getElementById("stopId");
  const ulElement = document.getElementById("buses");
  ulElement.innerHTML = "";
  try {
    const url = `http://localhost:3030/jsonstore/bus/businfo/${inputField.value}`;
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("stopName").textContent = data.name;

    Object.entries(data.buses).forEach(([busNum, timeArrival]) => {
      const liElement = document.createElement("li");
      liElement.textContent = `Bus ${busNum} arrives in ${timeArrival} minutes`;

      ulElement.appendChild(liElement);
    });
  } catch {
    document.getElementById("stopName").textContent = "Error";
  }
}
