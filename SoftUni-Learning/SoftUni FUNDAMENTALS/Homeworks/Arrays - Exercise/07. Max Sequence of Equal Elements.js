function maxSequenceOfEqualElements(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
      let tempNumbers = [];
      for (let j = i; j < numbers.length; j++) {
        if (numbers[i] == numbers[j]) {
          tempNumbers.push(numbers[i]);
        } else {
          break;
        }
        if (tempNumbers.length > result.length) {
          result = tempNumbers;
        }
      }
    }
    console.log(result.join(" "));
  }