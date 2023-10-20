// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// // function countSheeps(sheep) {
//     presentes = sheep.filter(element => {
//         // console.log(element);
//         if (element === true) {
//             console.log(element);
//             return element
//         }
//     });
//     console.log(presentes.length);
//   }


function countSheeps(sheep) {
    return sheep.filter(element => element === true).length
  }
  console.log(countSheeps([undefined]));

//   [[], 0],
//   [[undefined], 0],
//   [[null], 0],
//   [[false], 0],
//   [[true], 1],
//   [[undefined,null,false,true], 1],
//   [[undefined,null,false,true,true,false,null,undefined], 2],
//   [[true,true,true,false,true,true,true,true,true,false,true,false,true,false,false,true,true,true,true,true,false,false,true,true], 17],