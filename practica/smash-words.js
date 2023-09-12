// function smash (words) {
//     return words.join(' ')
// }

function smash(words) {
    let str = '';
    // tambien podemos usar ( for in )
    for ( let i = 0; i < words.length; i++) {
        str += words[i] + ' ';
    }
    return str.trim()
    
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));
// ****************************************************
// console.log(smash( ['hello', 'world', 'this', 'is', 'great'] ));

// function smash1 (words){
//     return words.length != 0 ? words.reduce((res,v) =>  res+= ` ${v}`) : ''
// };

// ****************************************************
// function smash2(words) {
// let result = '';
// for(let i = 0;i < words.length; i++) {
//     if(i == 0) {  //this is made so there is no space at start
//     result = result + words[i]
//     } else {
//     result = result + ' ' + words[i]
//     }
// }
// return result
// };

// *************************************************
// function smash3 (words) {
//     let res = '';
//     for (let i of words) {
//       res += i.concat(' ')
//     }
//      return res.trim();   
//   };


