// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


// function XO(str) {
    //     let countX = 0 
    //     let countO = 0 
    //     str.split('').forEach(e => {
//         // console.log(e);
//         // console.log(e == 'x');
//         if (e.toLowerCase() == 'x') {
//             console.log(e);
//             countX++
//         } else if(e.toLowerCase() == 'o') { 
//             console.log(e);
//             countO++
//         }
//     });
//     console.log(countX);
//     console.log(countO);
//     return countX === countO
// }


function XO(str) {
    let countX = 0
    let countO = 0
    str.split('').forEach(e => e.toLowerCase() == 'x' ?  countX++ : e.toLowerCase() == 'o' ? countO++ : null )
    return countX === countO
  }

console.log(XO("xxooo"));


    // Examples input/output:
    
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false