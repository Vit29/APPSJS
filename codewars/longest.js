//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
    // primero vamos a concatenar los strings 
    console.log(s1 + s2);
    // ahora vamaos a filtrar los valores repetidos
    console.log(new Set(s1 + s2));
    // usamos ahora ... una forma de conacatenar junto con []
    console.log(...new Set(s1 + s2));
    // lo colocamos dentro de una lista 
    console.log([...new Set(s1 + s2)]);
    // usamos .sort() para volverala una lista ordenada ya que Set lo deja como lista desordenada.
    console.log([...new Set(s1 + s2)].sort());
    console.log( typeof [...new Set(s1 + s2)].sort());
    // ahora vamos a usar .join() para convertir esta lista (objeto) en un string
    console.log( [...new Set(s1 + s2)].sort().join(''));
    console.log( typeof [...new Set(s1 + s2)].sort().join(''));
    // ahora solo retornamos el resultado con return
    return [...new Set(s1+s2)].sort().join('') 
    
}
console.log(longest("aretheyhere", "yestheyarehere"));

// function longest(s1, s2) { 
//     return Array.from(new Set([...s1, ...s2])).sort().join('')
//   }

