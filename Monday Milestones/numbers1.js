let num1 = 5;
let num2 = 3;
console.log(num1 + num2); //sum
console.log(num1 - num2); //difference
console.log(num1 * num2); //multiple
console.log(num1 / num2); //divide
console.log(num1 % num2); //remainder (isMultiple)
console.log(num1 ** num2); //power
console.log(Math.floor(num1 / num2)) //Floor returns the input, rounded-down


// tells if number is even or odd
function isEven(num) {
  let blah = Math.abs(num);
  if (blah % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
// tests the number in the function given (isEven)
console.log(isEven(190))
