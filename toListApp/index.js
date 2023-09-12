const fecha = document.querySelector('#fecha');
const lista = document.querySelector('#lista');
const input = document.querySelector('#input');
const addBoton = document.querySelector('#addBoton');
const check = 'fa-circle-check'
const uncheck = "fa-circle"
const lineThroungh = 'line-through'
let id 
let LIST

const FECHA = new Date()
fecha.innerHTML = FECHA.toLocaleDateString('es-MX',{weekday:'long', month:'short', day:'numeric'})

// agregando el elemento li
function addTarea (tarea, id, realizado, eliminado) {
    if (eliminado){return}
    const REALIZADO = realizado ?check :uncheck
    const LINE = realizado ?lineThroungh :''
    const element = `
                    <li id=element draggable = 'true'>
                    <i id="${id}" class=" fa-regular ${REALIZADO}" data="realizado"></i>
                    <p class="text ${LINE}">${tarea}</p>
                    <i id="${id}" class="fa-solid fa-trash-can" data="eliminado"></i>
                    </li>
                    `
    lista.insertAdjacentHTML("beforeend",element)
}

//funcion tarea realizada
function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThroungh)
    LIST[element.id].realizado =  LIST[element.id].realizado ?false :true 
}
//funcion tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
    
    
}

// agregando tarea por click
addBoton.addEventListener('click', () => {
    const tarea = input.value
    if(tarea) {
        addTarea(tarea, id, false, false)
        LIST.push({
            nombre: tarea,
            id: id,
            realizado:false,
            eliminado:false
        })
    }
    localStorage.setItem('TODOLIST',JSON.stringify(LIST))
    input.value=''
    id++
})

// agregando tarea  por enter
document.addEventListener('keyup', event => {
    if(event.key =='Enter') {
        const tarea = input.value
        if(tarea){
            addTarea(tarea, id, false, false)
            LIST.push({
                nombre: tarea,
                id: id,
                realizado:false,
                eliminado:false
            })
        }
        localStorage.setItem('TODOLIST',JSON.stringify(LIST))
        input.value=''
        id++
    }
})

lista.addEventListener('click', event => {
    const element = event.target
    const elementData = element.attributes.data.value
    console.log(elementData);
    if (elementData ==='realizado') {
        tareaRealizada(element)
    }
    else if (elementData==='eliminado') {
        tareaEliminada(element)
        
    }
    localStorage.setItem('TODOLIST',JSON.stringify(LIST))
})

// guardando las tareas en el local storage
let data = localStorage.getItem('TODOLIST')
if (data){
    LIST=JSON.parse(data)
    id =  LIST.length
    cargarLista(LIST)
} else {
    LIST = []
    id = 0
}

function cargarLista(DATA) {
    DATA.forEach(function(i) {
        addTarea(i.nombre, i.id, i.realizado, i.eliminado)
    });
}

// localStorage.clear('TODOLIST')