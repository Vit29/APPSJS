// traemos los elementos que necesitamos
//inputs 
const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')
// parrafos
const textRojo = document.getElementById('texto-rojo')
const textVerde = document.getElementById('texto-verde')
const textAzul = document.getElementById('texto-azul')
// pasamos el valor actual de input a una variable 
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;
// usamos la variable para colocar el valor actual en el parafo.
textRojo.innerText = rojo
textVerde.innerText = verde
textAzul.innerText = azul
// creamos la funcion que actializa el fonde de la pagina web este va recibir la informacion de un evento.
function actualizarColor ( rojo, verde ,azul) {
    // creamos una cadena de texto con los valores y los guardamos en una variable.
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    // le pasamos la variable para que modifique el color de fondo de la pagina 
    document.body.style.backgroundColor = colorRGB
}
// colocamos el evento en los inputs para que nos regrese el valor nuevo
inputRojo.addEventListener('change' , (e) => {
    // Aqui buscamos el nuevo calor de input y lo guardmos en la variable 
    rojo = e.target.value;
    // usamso es misma variable para actualizar el valor de parrafo
    textRojo.innerText = rojo
    // por ultimo  mandamos a llamar la funcion para que actualice los valores al fondo de la pagina.
    actualizarColor(rojo, verde, azul)
    
})
inputVerde.addEventListener('change' , (e) => {
    verde = e.target.value;
    textVerde.innerText = verde
    actualizarColor(rojo, verde, azul)
    
})
inputAzul.addEventListener('change' , (e) => {
    azul = e.target.value;
    textAzul.innerText = azul
    actualizarColor(rojo, verde, azul)
    
})