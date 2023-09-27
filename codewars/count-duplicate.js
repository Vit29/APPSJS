
// Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos que no distinguen entre mayúsculas y minúsculas y que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada contiene sólo alfabetos (tanto mayúsculas como minúsculas) y dígitos numéricos.


function contarDuplicados(cadena) {
    const frecuenciaCaracteres = {};
    cadena.toLowerCase().split('').forEach(caracter => {
      if ((caracter >= 'a' && caracter <= 'z') || (caracter >= '0' && caracter <= '9')) {
        frecuenciaCaracteres[caracter] = (frecuenciaCaracteres[caracter] || 0) + 1;
      }
    });
    console.log(frecuenciaCaracteres);
  
    return Object.values(frecuenciaCaracteres).filter(frecuencia => frecuencia > 1).length;
  }

  console.log(contarDuplicados('Indivisibilities'));
