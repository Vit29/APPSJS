// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//     c =  numbers.split(' ').map((element)  => {
//         return Number(element)
//     });
//     console.log(Math.max.apply(null,c));
//     console.log(Math.min.apply(null,c));
// }
// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

function highAndLow(numbers){
    // n = numbers.split(' ').map(Number)
    // return `${Math.max.apply(null,n)} ${Math.min.apply(null,n)}`
    return `${Math.max.apply(null,numbers.split(' '))} ${Math.min.apply(null,numbers.split(' '))} `
  }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));