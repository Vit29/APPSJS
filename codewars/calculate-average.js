// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
//     if (array.length === 0 ) return 0
//    suma = array.reduce((a,b) => {
//         return a + b 
//     },0);
//     return suma / array.length 

    // return array.length !== 0 ? array.reduce((a,b) => a + b, 0) / array.length : 0
    // console.log(array.length );
    return array.reduce((a,b) => a + b, 0) / array.length || 0
}

  console.log(findAverage([]));


//   La expresión array.length || 0 se utiliza para manejar el caso en el que la longitud (length) de un array es igual a 0. Veamos en detalle cómo funciona esto:

// Primero, se evalúa array.length. Esto devuelve la longitud del array, que es un número entero que representa la cantidad de elementos en el array. Si el array tiene elementos, array.length será un número positivo mayor que cero.

// Luego, se evalúa la expresión array.length || 0. Esto es una operación lógica "o" (OR). En JavaScript, el operador "o" (||) devuelve el primer valor verdadero que encuentra en una secuencia de expresiones. Si array.length es mayor que 0, se considera verdadero, y esa es la parte que se devuelve. Si array.length es igual a 0, se considera falso, y en ese caso, la expresión || devuelve 0.

// Entonces, cuando array.length es igual a 0 (lo que significa que el array está vacío), la expresión array.length || 0 evaluará a 0. Esto es útil en situaciones en las que deseas proporcionar un valor predeterminado (en este caso, 0) en lugar de un valor vacío cuando el array no contiene elementos. Esto se utiliza comúnmente para manejar casos especiales y evitar errores o comportamientos inesperados.