// // function letraMayus (nombre, apellido) {
// //     console.log(nombre);
// //    nombre = nombre.replace(nombre[0], nombre[0].toUpperCase())
// //    apellido = apellido.replace(apellido[0],apellido[0].toUpperCase()) 
// //    return `${nombre} ${apellido}`
// // }
// // console.log(letraMayus('vanessa','licona'));

// const familia = ['vitaly', 'vanessa', 'gate', 'timon']

// // const listafamilia = familia.map((x, i)  => {
// //     // console.log(x);
// //     // console.log(i);
// //     return `${i + 1} ${x}`
// // })

// // console.log(listafamilia);
// const listaNumerada = [];
// const listaPush = [];
// for (let i = 0; i < familia.length; i++) {
//     // familia[i] = [i + 1] + ' ' + familia[i] // mutable
//     listaNumerada[i] = [i + 1] + ' ' + familia[i] // inmutavle
//     listaPush.push([i + 1] + ' ' + familia[i])

// }
// // console.log(familia);
// // console.log(listaNumerada);
// // console.log(listaPush);
// const letras = 13516593169831

// const foo = letras.toString().split('').map(function( e, i) {
//         return `${i + 1}; ${e}`
// },)
// // console.log(foo);


// const foo2 = letras.toString().split('').map( (x , i ) => {
//     // console.log(x);
//     // console.log(i);
//     return `${i+1}: ${x}`
// })

// // console.log(foo2);

// const array = [34,65,76,4,6,34,77,34,53]

// total = array.reduce( (suma , numero) => suma += numero ,200)


// function powersOfTwo(n) {
//     return [...Array(n + 1)].map((_, i) => 2 ** i)
// }

// const array = '5v55s1s4h67AsvYH454'
// const frecuenciaCaracteres = {};
// array.toLocaleLowerCase().split('').forEach(e => {
// if ((e >= 'a' &&  e <= 'z') || (e >= '0' && e <= '9')) {
//     frecuenciaCaracteres[e] = (frecuenciaCaracteres[e] || 0) + 1;
// } 
// console.log(frecuenciaCaracteres);

// let contador = 0
// for (const key in frecuenciaCaracteres) {
//     console.log(key)
//     if (frecuenciaCaracteres[key] > 1) {
//         contador++
//     } 
// }
// });

function towerBuilder(nFloors) {
    let space , star ,tower = [];
    for (i = 1 ;i <= nFloors; i++) {
        space = ' '.repeat(nFloors - i)
        star = '*'.repeat(2 * i - 1)
        tower.push(`${space}${star}${space}`)
    }
    return tower
}

console.log(towerBuilder(10));

// expected        [ ' * ', ' *** ' ] 
// to deeply equal [ ' * ', '***' ]
