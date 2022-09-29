function encodeAndDecodeMessages() {
  let btn = document.querySelectorAll("button");

  btn[0].addEventListener("click", encode);
  btn[1].addEventListener("click", decode);

  function encode(ev) {
    let newMsg = "";
    let txt = ev.target.parentElement.children[1].value;

    for (let i = 0; i < txt.length; i++) {
      let ch = txt[i].charCodeAt();
      newMsg += String.fromCharCode(ch + 1);
    }

    let otherTextArea =
      ev.target.parentElement.parentElement.children[1].children[1];
    otherTextArea.value = newMsg;

    ev.target.parentElement.children[1].value = "";
  }

  function decode(ev) {
    let newMsg = "";
    let txt = ev.target.parentElement.children[1].value;

    for (let i = 0; i < txt.length; i++) {
      let ch = txt[i].charCodeAt();
      newMsg += String.fromCharCode(ch - 1);
    }

    let otherTextArea =
      ev.target.parentElement.parentElement.children[1].children[1];
    otherTextArea.value = newMsg;

    btn[1].removeEventListener("click", decode);
  }
}
