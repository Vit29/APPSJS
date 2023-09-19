// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.


// function alternateCase (str) {
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//       result += str[i] === str[i].toLowerCase() ? str[i].toUpperCase() : str[i].toLowerCase()
//     }
//     return result
//   }
  
//   console.log(alternateCase("Hello Word ! 123"));

// algo mas moderno 

// String.prototype.toAlternatingCase = function () {
//     return this.split('').map(function (char) {
//         return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//     }).join('');
// };

// const str = "Hello Word ! 123"
// console.log(str.toAlternatingCase());




  