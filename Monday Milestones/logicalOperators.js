let num1 = 2
let num2 = 3

if (num1 % 2 === 0 && num2 % 2 !== 0) {

  console.log('Only one number is even')
}


if (num1 % 2 !== 0 && num2 % 2 === 0) {
  console.log('Only one number is even')
}

if (num1 % 2 !== 0 && num2 % 2 !== 0) {
  console.log('Both numbers are odd')
}


if (num1 % 2 === 0 && num2 % 2 === 0) {
  console.log('Both numbers are even')
}
