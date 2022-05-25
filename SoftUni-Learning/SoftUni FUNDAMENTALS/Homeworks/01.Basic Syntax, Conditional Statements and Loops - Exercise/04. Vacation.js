function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
  totalSum = 0;
  if (groupOfPeople >= 100 && typeOfTheGroup === "Business") {
    groupOfPeople -= 10;
  }
  if (dayOfTheWeek === "Friday") {
    switch (typeOfTheGroup) {
      case "Students":
        totalSum = groupOfPeople * 8.45;
        break;
      case "Business":
        totalSum = groupOfPeople * 10.9;
        break;
      case "Regular":
        totalSum = groupOfPeople * 15;
        break;
    }
  } else if (dayOfTheWeek === "Saturday") {
    switch (typeOfTheGroup) {
      case "Students":
        totalSum = groupOfPeople * 9.8;
        break;
      case "Business":
        totalSum = groupOfPeople * 15.6;
        break;
      case "Regular":
        totalSum = groupOfPeople * 20;
        break;
    }
  } else if (dayOfTheWeek === "Sunday") {
    switch (typeOfTheGroup) {
      case "Students":
        totalSum = groupOfPeople * 10.46;
        break;
      case "Business":
        totalSum = groupOfPeople * 16;
        break;
      case "Regular":
        totalSum = groupOfPeople * 22.5;
        break;
    }
  }
  if (groupOfPeople >= 30 && typeOfTheGroup === "Students") {
    totalSum *= 0.85;
  } else if (
    groupOfPeople >= 10 &&
    groupOfPeople <= 20 &&
    typeOfTheGroup === "Regular"
  ) {
    totalSum *= 0.95;
  }
  console.log(`Total price: ${totalSum.toFixed(2)}`);
}
// vacation(30, "Students", "Sunday");
// vacation(40, "Regular", "Saturday");
vacation(100, "Business", "Saturday");
