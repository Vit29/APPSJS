// Haz una funcion que invierta el 'string'

function reverse(str){
    // console.log(str.length);
    let resultado = ''
    for ( let i =  str.length - 1 ; i >= 0; i-- ) {
        // console.log([i]);
        resultado += str[i];
    }
    return resultado
}

console.log( 'Asi se escribe javascript alreves: ' + reverse('Javascript'));
console.log('mensaje alreves: ' + reverse(' hola a todos hoy vamos a aprender a hacer una función que reescriva nuestro texto alreves '));
