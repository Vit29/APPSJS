const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const parar = document.getElementById('parar')
const pElement = document.querySelector('p')
const bandera = document.getElementById('bandera')
// como es que se puede agregar el elemto ('li') a la lista si no la tengo refereciada
// const lista = document.getElementById('lista')



let interValID;
let contador = 0;
let isRuning = false;


let [minutos, segundos , miliSegundos] = [0, 0, 0];

function actualizarCronometro() {
    miliSegundos += 10;
    if (miliSegundos === 1000) {
        miliSegundos = 0;
        segundos ++;
        if (segundos === 60) {
            segundos = 0;
            minutos++
            if (minutos === 60) {
                minutos = 0;

            }   
        }
    }
  
    pElement.innerText = `${minutos} : ${segundos} : ${miliSegundos}`;
}


iniciar.addEventListener('click', () => {
    if ( isRuning) {
        // no active
        console.log('no active');
    } else {
        // active
        console.log('active');
        
        interValID = setInterval( actualizarCronometro, 10)
    }
    
})



pausar.addEventListener('click', () => {
    clearInterval(interValID);
  
    
    console.log(isRuning);
})

parar.addEventListener('click', () => {
    clearInterval(interValID)
    contador = 0;
    pElement.innerText = contador
    
    console.log(isRuning);
})


bandera.addEventListener('click' , () => {
    
    
    const valor = [pElement.innerText];
    const banderaNueva = document.createElement('li')
    banderaNueva.innerText = valor
    listo.appendChild(banderaNueva)
    
})