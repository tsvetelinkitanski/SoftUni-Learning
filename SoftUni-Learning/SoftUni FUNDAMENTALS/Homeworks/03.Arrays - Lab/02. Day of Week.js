function dayOfWeek(numOfWeek) {
  let nameOfDay = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (numOfWeek >= 1 && numOfWeek < 8) {
    console.log(nameOfDay[numOfWeek - 1]);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
