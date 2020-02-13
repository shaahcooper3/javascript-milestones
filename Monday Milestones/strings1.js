let str1 = 'Hello'
let str2 = 'Hello World'
console.log(str1);
console.log(str2);
console.log(str1.concat(str2)); // concat joins strings together
// String.prototype.includes
console.log(`The word "${str1}" ${str2.includes(str1) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "Hello" is in the sentence "Hello World"

let waffles = 'Seattle Seahawks'
let k = 5
console.log(waffles.length); // string length
console.log(waffles.toUpperCase()); // uppercase
console.log(waffles.toLowerCase()); // lowercase
console.log(waffles[0]); // first character of a string
console.log(waffles[1]); // second character of a string
console.log(waffles[waffles.length - 1]); // last character of a string
console.log(waffles[k - 1]); // get the k index of a string (Variable set above: k)
