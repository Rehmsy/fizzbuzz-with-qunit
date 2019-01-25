const test = QUnit.test;
import fizzBuzz from '../src/fizzBuzz.js';

test('returns input number', function(assert) {
  const inputNumber = 2;
  const result = fizzBuzz(inputNumber);
  assert.equal(result, inputNumber);
});

test('returns Fizz when divisible by 3', function(assert) {
  const inputNumber = 3;
  const result = fizzBuzz(inputNumber);
  assert.equal(result, 'Fizz');
});

test('returns Buzz if divisible by 5', function(assert) {
  const inputNumber = 5;
  const result = fizzBuzz(inputNumber);
  assert.equal(result, 'Buzz');
});

test('returns FizzBuzz when divisible by 15 (3 & 5)', function(assert) {
  const inputNumber = 15;
  const result = fizzBuzz(inputNumber);
  assert.equal(result, 'FizzBuzz');
});