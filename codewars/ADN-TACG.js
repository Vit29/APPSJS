// PASO UNO 

// function DNAStrand(dna){
//     return dna.split('').map(x => {
//       if (x == 'A') return 'T'
//       if (x == 'T') return 'A'
//       if (x == 'C') return 'G'
//       if (x == 'G') return 'C'
//     }).join('')
//   }

// PASO DOS
// function DNAStrand(dna){
//     return dna.split('').map(x => {
//       return x == 'A' ? 'T' : x == 'T' ? 'A' : x == 'C' ? 'G': x == 'G'? 'C': 0
//     }).join('')
//   }


// PASO TRES

// function DNAStrand(dna){
//     return dna.split('').map( x => 
//         x == 'A' ? 'T' : 
//         x == 'T' ? 'A' : 
//         x == 'C' ? 'G' : 
//         x == 'G' ? 'C' :
//         'X' ).join('')
// }

// console.log(DNAStrand('ATTGCj'));


//Paso codewars

// Función para complementar una cadena de ADN
// function DNAStrand(dna) {
//     // Utilizamos el método `replace()` con una expresión regular que coincide con cada carácter en la cadena de ADN
//     // Luego, reemplazamos cada carácter con su complemento correspondiente utilizando la función de reemplazo proporcionada.
//     return dna.replace(/./g, function(c) {
//       // Utilizamos el objeto `DNAStrand.pairs` como un diccionario para obtener el complemento de cada base de ADN.
//       return DNAStrand.pairs[c];
//     });
// }

// // Definimos un objeto `DNAStrand.pairs` que contiene las parejas complementarias de bases de ADN.
// DNAStrand.pairs = {
//     A: 'T',
//     T: 'A',
//     C: 'G',
//     G: 'C'
// };

//   // Ejemplos de uso:
//   console.log(DNAStrand("ATCG")); // Debería devolver "TAGC"
//   console.log(DNAStrand("GTAC")); // Debería devolver "CATG"

//  forma dos de codewars
var pairs = {
    'A':'T',
    'T':'A',
    'C':'G',
    'G':'C'
};

function DNAStrand(dna){
  return dna.split('').map(function(v) { 
    console.log(v);
    console.log(pairs[v]);
    return pairs[v] 
}).join('');
}

console.log(DNAStrand('CATA'));

