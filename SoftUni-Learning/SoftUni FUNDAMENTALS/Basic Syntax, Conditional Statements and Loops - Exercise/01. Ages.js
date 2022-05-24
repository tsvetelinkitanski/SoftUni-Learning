function determined(age) {
  let human = "";
  if (age < 0) {
    console.log("out of bounds");
  } else {
    if (age >= 0 && age < 3) {
      human = "baby";
    } else if (age < 14) {
      human = "child";
    } else if (age < 20) {
      human = "teenager";
    } else if (age < 66) {
      human = "adult";
    } else if (age >= 66) {
      human = "elder";
    }
  }

  console.log(human);
}
determined(20);
determined(1);
determined(100);
determined(-1);
determined();
