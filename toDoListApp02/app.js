const input = document.getElementById('ingresar-tarea');
const button = document.querySelector('button');
const listadeTarea = document.getElementById('lista-de-tareas')

// 1-. verficar si hay un valor en el immput

function agregarTarea ( ) {
    // verdadero o falso
    if (input.value) {
        // crea tarea
        let  tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');
        // agregar el texto de input al elemento p que es Item  de la lista 
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto)
        // craer y agrega contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos)
        // iconos
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');
        iconos.addEventListener('click', completarTarea)

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi','bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea);
    
        iconos.append(completar,eliminar);

        // agregar la tarea-neuva a la lista de tareas
        listadeTarea.appendChild(tareaNueva);

        input.value = ''

    } else {
        // una accion para cuando no hay texto(valor) en input.
        alert('ingresa una tarea');
    }
}

function completarTarea (e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}
//  funcion para eliminar tarea
function eliminarTarea (e) {
    
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}
// agregando tarea con tecla Enter
button.addEventListener('click', agregarTarea);
input.addEventListener('keydown' , (e) => {
    // filtramos que el vento de keydown a Enter
    if( e.key === 'Enter') {
        agregarTarea();
    }
})