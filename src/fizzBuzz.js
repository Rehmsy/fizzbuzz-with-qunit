function fizzBuzz(inputNumber) {
  if(inputNumber % 15 === 0) {
    return 'FizzBuzz';
  }
  else if (inputNumber % 3 === 0) {
    return 'Fizz';
  }
  else if(inputNumber % 5 === 0) {
    return 'Buzz';
  }
  else {
    return inputNumber;
  }
}

export default fizzBuzz;