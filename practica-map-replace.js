// function letraMayus (nombre, apellido) {
//     console.log(nombre);
//    nombre = nombre.replace(nombre[0], nombre[0].toUpperCase())
//    apellido = apellido.replace(apellido[0],apellido[0].toUpperCase()) 
//    return `${nombre} ${apellido}`
// }
// console.log(letraMayus('vanessa','licona'));

const familia = ['vitaly', 'vanessa', 'gate', 'timon']

// const listafamilia = familia.map((x, i)  => {
//     // console.log(x);
//     // console.log(i);
//     return `${i + 1} ${x}`
// })

// console.log(listafamilia);
const listaNumerada = [];
const listaPush = [];
for (let i = 0; i < familia.length; i++) {
    // familia[i] = [i + 1] + ' ' + familia[i] // mutable
    listaNumerada[i] = [i + 1] + ' ' + familia[i] // inmutavle
    listaPush.push([i + 1] + ' ' + familia[i])

}
// console.log(familia);
// console.log(listaNumerada);
// console.log(listaPush);
const letras = 13516593169831

const foo = letras.toString().split('').map(function( e, i) {
        return `${i + 1}; ${e}`
},)
// console.log(foo);


const foo2 = letras.toString().split('').map( (x , i ) => {
    // console.log(x);
    // console.log(i);
    return `${i+1}: ${x}`
})

// console.log(foo2);

const array = [34,65,76,4,6,34,77,34,53]

total = array.reduce( (suma , numero) => suma += numero ,200)

total

array.map(function( e , i) {
    console.log(e);
    console.log(i);
})


function powersOfTwo(n) {
    return [...Array(n + 1)].map((_, i) => 2 ** i)
  }
