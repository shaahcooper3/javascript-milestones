let coolArray = ['Atlanta', 'Houston', 'LosAngeles', 'Dallas', 'Charlotte']
let n = 3
console.log('There are', coolArray.length, 'elements in this array');
console.log(coolArray[0]); // first element of an array
console.log(coolArray[1]); // second element of an array
console.log(coolArray[coolArray.length - 1]); // last element of an array
console.log(coolArray[n]) // nth element of an array
// change the value of an element
coolArray[0] = 'Miami'
coolArray[1] = 'Austin'
coolArray[coolArray.length - 1] = 'Oxford'
coolArray[n] = 'Brooklyn'
console.log(coolArray)

coolArray.splice(4, 1) // remove the last element of an array
console.log(coolArray)
coolArray.splice(0, 1) // remove the first element of an array
console.log(coolArray)

coolArray.unshift('Miami') // prepend
console.log(coolArray)
coolArray.push('Oxford') // append
console.log(coolArray)
