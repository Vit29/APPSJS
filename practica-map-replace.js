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
console.log(familia);
console.log(listaNumerada);
console.log(listaPush);


