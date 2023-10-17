// This time no story, no theory. The examples below show you how to write function accum:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//     // console.log(s.split());
// 	array = s.split('').map((v,i) => {
//         // console.log(v );
//         console.log(i)
//         console.log(v.toLowerCase());
//         // console.log(v.repeat(i+1));
//         return v.repeat(i+1).toLowerCase()
//     })
    
//     console.log(array);
//     return array.map(e =>  {
//         console.log(e.replace(e[0],e[0].toUpperCase()));
//         return e.replace(e[0],e[0].toUpperCase())
        
//     }).join('-')
// }
// // .join('-')


function accum(s) {
    // array = s.split('').map((letter,indice) => letter.repeat(indice+1).toLowerCase())
    // return array.map((e)=> e.replace(e[0],e[0].toUpperCase())).join('-')

    return s.split('').map((letter,indice) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(indice)
    }).join('-')
}
console.log(accum("ZpglnRxqenU"));  