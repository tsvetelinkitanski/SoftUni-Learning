function division(num) {
  let divisible = 0;
  let isDivisible = true;
  if (num % 10 == 0) {
    divisible = 10;
  } else if (num % 7 == 0) {
    divisible = 7;
  } else if (num % 6 == 0) {
    divisible = 6;
  } else if (num % 3 == 0) {
    divisible = 3;
  } else if (num % 2 == 0) {
    divisible = 2;
  } else {
    isDivisible = false;
    console.log("Not divisible");
  }
  if (isDivisible) {
    console.log(`The number is divisible by ${divisible}`);
  }
}
division(30);
division(15);
division(12);
division(1643);
