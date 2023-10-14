// function getSum(a, b) {
    
//     if ( a > b) {
//         [a,b]=[b,a]
//     } 

//   let array = [];
//   if (a <= 0 && b <= 0) {
//     while (a >= b) {
//       array.push(a--);
//     }
//    } else if (a <= 0 && b >= 0) {
//         while (a <= b) {
//           array.push(a++);
//         }
//     } else if ( a >= 0 && b >= 0 ){
//         while (a <= b){
//             array.push(a++);
//         }
//     }
//     console.log(array);
//     return array.reduce((acumulador, valor) => acumulador + valor, 0);
//   }

// console.log(getSum( 5, 5));

// for(let i = a; i <= b ; i++) {
//     console.log(i);
// }

function getSum(a, b) {
    if (a > b) [a, b] = [b, a];
    let sum = 0;
  
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(getSum( - 1 , -5 ));