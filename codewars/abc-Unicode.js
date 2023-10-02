// let res = []
// function alphabetPosition(text) {
//     [...text.toLowerCase()].forEach((e) => {
//         if ( e >= 'a' && e <= 'z' ) {
//             // position = e.charCodeAt() - 'a'.charCodeAt(0) + 1
//             res.push(e.charCodeAt() - 'a'.charCodeAt(0) + 1)
            
//         }else {
//             console.log(e);
//         }
//     })
//     return res.join(' ')
// }

let result = []
function alphabetPosition(text) {
    [...text.toLowerCase()].forEach(e => {
        e >= 'a' && e <= 'z' ? result.push(e.charCodeAt(0) - 'a'.charCodeAt(0)+1) : null
    })
    console.log(typeof result.join(' '));
    return result.join(' ').trim()
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));