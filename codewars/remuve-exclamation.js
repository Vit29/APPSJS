//Remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {

        // return s.split('!').join('')
    // return s.replace(/!/g,'')

    // Creando variable string vacia para almacenar los nuevos valores.
    let sNew = '' ;
    // hacemos un ciclo for 
    for (let i = 0; i < s.length; i++) {
        console.log([i]);
        // Si el indeice de (s) es difente a (!) entonses --->
        if ( s[i] !== '!') {
            // agreagalo a (sNew) 
            sNew += s[i];
        }
    }
    // retormanos el nuevo string
    return sNew

  }

  console.log(removeExclamationMarks('hola !!!!'));
