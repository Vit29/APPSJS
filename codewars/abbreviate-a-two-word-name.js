// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

// function abbrevName(name){
//     array = [...name].filter((e) => {
//         if (e === e.toUpperCase()) {
//             return e
//         }
//     })
//     return array.join('').replace(' ','.')
// }

// function abbrevName(name){
//     console.log(name);
//     console.log(name.split(' ') );
//     array = name.split(' ').map((e) => {
//         console.log(e);
//         console.log(e[0]);
//         console.log(e[0].toUpperCase());
//         return e[0].toUpperCase()
//     })
//     return array[0]+'.'+array[1]
// }


// function abbrevName(name){
//     array = name.split(' ').map((e) => {
//         return e[0].toUpperCase()
//     })
//     return array[0]+'.'+array[1]
// }

function abbrevName(name){
    // array = 
    return name.split(' ').map(e => e[0].toUpperCase()).join('.')
    // console.log(array);
    // return array[0]+'.'+array[1]
}

console.log(abbrevName("nrPsvXCGyjHKT LUVhIrg")); //'N.L'