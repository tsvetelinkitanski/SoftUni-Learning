function phoneShop(arr) {
  let phoneList = arr.shift().split(", ");
  let list = arr.shift();

  //   o	"Add - {phone}"
  let add = (arr, item) => arr.push(item);
  // o	"Remove - {phone}"
  let remove = (arr, item) => {
    let index = arr.indexOf(item);
    arr.splice(index, 1);
  };
  // o	"Bonus phone - {oldPhone}:{oldPhone}"
  let bonus = (arr, oldPhone, newPhone) => {
    let index = arr.indexOf(oldPhone);
    arr.splice(index, 0);
    arr[index + 1] = newPhone;
  };

  // o	"Last - {phone}"
  let last = (arr, item) => {
    let index = arr.indexOf(item);
    let oldPosition = arr.splice(index, 1);
    arr.push(oldPosition.join());
  };
  // o	"End"

  while (list != "End") {
    let action = list.split(" - ")[0];
    let modelOfPhone = list.split(" - ")[1];
    switch (action) {
      case "Add":
        if (phoneList.includes(modelOfPhone)) {
          break;
        } else {
          add(phoneList, modelOfPhone);
        }
        break;
      case "Remove":
        if (phoneList.includes(modelOfPhone)) {
          remove(phoneList, modelOfPhone);
        }
        break;
      case "Bonus phone":
        let currentCommand = modelOfPhone.split(":");
        let oldPhone = currentCommand[0];
        let newPhone = currentCommand[1];
        if (phoneList.includes(oldPhone)) {
          bonus(phoneList, oldPhone, newPhone);
        }
        break;
      case "Last":
        if (phoneList.includes(modelOfPhone)) {
          last(phoneList, modelOfPhone);
        }
        break;

      default:
        break;
    }
    list = arr.shift();
  }
  console.log(phoneList.join(", "));
}
phoneShop([
  "SamsungA50, MotorolaG5, IphoneSE",
  "Add - Iphone10",
  "Remove - IphoneSE",
  "End",
]);
phoneShop([
  "HuaweiP20, XiaomiNote",
  "Remove - Samsung",
  "Bonus phone - XiaomiNote:Iphone5",
  "End",
]);
phoneShop([
  "SamsungA50, MotorolaG5, HuaweiP10",
  "Last - SamsungA50",
  "Add - MotorolaG5",
  "End",
]);
