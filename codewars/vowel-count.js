// function getCount(str) {
//     // console.log(str.split(''));
//     // str = str.split('')
//     let contador = 0
//     for (let i = 0; i <= str.length - 1; i++) {
//         e = str[i]
//         // console.log(e);
//         if (e == 'a' || e == 'e' || e =='i' || e =='o' || e =='u') {
//             // console.log(e);
//             contador++ 
//             // console.log(contador);
//         }
//         else {
//             console.log(e);
//         }
//     }
//     // console.log(contador);
//     return contador
// }



// function getCount(str) {
//     let count = 0
//     str.split('').forEach(e => {
//         if (e == 'a' || e == 'e' || e =='i' || e =='o' || e =='u'){
//             count++
//         }
//     });
//     return count
// }
// console.log(getCount("aeioubracadabra"));


function getCount(str) {
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    // Filtrar los caracteres de la cadena que sean vocales
    const vocalesEncontradas = str.split('').filter((caracter) =>  {
        console.log(caracter);
        return vocales.includes(caracter)
        // console.log(vocales.includes(caracter));
    });
    console.log(vocalesEncontradas);
  
    // Obtener la longitud del arreglo resultante
    return vocalesEncontradas.length;
  }
  
  console.log(getCount("aeioubracadabra")); 