// SELECCIONAR ALEMENTOS DE EL DOM 

const button = document.querySelector('button');
const color = document.getElementById('color');

// crear funcion de crear color HexDec
function generarColor() {
    let digitos = '0123456789ABCDEF';
    let colorHEx = '#';
//  configuramos nuestro (for) a solo 6 ciclos
    for (let i = 0;  i < 6; i++) {
        // creamos una variable que guarde numeros random
        let indiceAleatorio = Math.floor(Math.random() *16);
        // actualizamos la variable (colorHex) agredando a digitos los indices aleatorios 
        colorHEx += digitos[indiceAleatorio];
        colorHEx
    }
    // ahora solo retornamos el valor 
    return colorHEx;
}


button.addEventListener('click' , () => {
    // obeter color aleatorio
    let colorAleatorio = generarColor();
    // actializar el texto de el color al nuevo color aleatorio
    color.innerText = colorAleatorio; 
    // actualizar el fondo de (body)
    document.body.style.backgroundColor = colorAleatorio
})