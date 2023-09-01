
const botomElem = document.getElementById('button-cambiar-cita');
const citaElem = document.getElementById('cita');
const autorElem = document.getElementById('autor')


function aleatorioEntero(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceAleatorio = aleatorioEntero(0, citas.length);
    console.log(citas[indiceAleatorio]);
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor; 
}

cambiarCita();
botomElem.addEventListener('click', cambiarCita);

