function attachEvents() {
  const url = `http://localhost:3030/jsonstore/messenger`;
  const textArea = document.getElementById("messages");
  const submitBtn = document.getElementById("submit");
  const refreshBtn = document.getElementById("refresh");

  const nameField = document.getElementsByName("author")[0];
  const contentField = document.getElementsByName("content")[0];

  refreshBtn.addEventListener("click", loadMsgs);
  submitBtn.addEventListener("click", sendData);

  async function loadMsgs() {
    const response = await fetch(url);
    const data = await response.json();

    textArea.value = Object.values(data)
      .map((el) => `${el.author}: ${el.content}`)
      .join("\n");
  }

  async function sendData() {
    if (nameField.value === "" || contentField.value === "") {
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: nameField.value,
        content: contentField.value,
      }),
    });

    nameField.value = "";
    contentField.value = "";
  }
}

attachEvents();
