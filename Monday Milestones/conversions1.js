// number to string
let num = 15
let number = num.toString(); // Expected output
console.log(number);


// string to number
console.log(parseInt(number));


// String to Characters in array | array.from()
function strToChar(string) {
  return string.split('');
}


// join string
let coolArray = ['Atlanta', 'Houston', 'LosAngeles', 'Dallas', 'Charlotte']
console.log(coolArray.join(''));
console.log(coolArray.join());
console.log(coolArray.join(', '));


if (require.main === module) {
  console.log('Running sanity checks for strToChar:');
  console.log(strToChar('Hello World!'))
}
