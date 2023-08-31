const contenedor = document.getElementById('contenedor');
// const titulo = document.getElementById('titulo');



// ME CONSIGUE EL ELEMENTO COMPLETO (VARIABLE)
// console.log(contenedor);
// ME DICE QUE TIPO DE DATO ES EL ELEMENTO (TYPEOF)
// console.log(typeof contenedor);
// ME MUESTRA CON LA ESTRUCTURA HTML QUE ESTA DENTRO DEL ELEMENTO
// console.log(contenedor.innerHTML);
// ME MUESTRA QUE TIPO DE DATO ES EL CONTENDIDO DENTRO DE LA ETIQUETA
// console.log(typeof contenedor.innerHTML);

// console.log(titulo);
// console.log(titulo.innerHTML);
// MUESTRA EL TEXTO QUE ESTA DENTRO DE EL EL ELEMENTO,EIQUETA (INNERTEXT)
// console.log(titulo.innerText);
//ME DICE QUE ETIQUETA ES 
// console.log(titulo.tagName);


// vamos a seccionar elementos por clase para poder traer mas de un elemnto al mismo tiempo

// SI TIENES VALRIOS ELEMNTOS/ETIQUETAS CON LA MISMA CLASE NOS VA ENTREGAR UNA COLECCION HTML QUE ES COMO UN ARREGLO JS
// const toppings = document.getElementsByClassName('topping')
// console.log(toppings);
// PARA TOMAR UNA EN PARTICULAR LO SELECCIONAMOS POR SU INDICE(LENGHT)
// console.log(toppings[2]);

//SELECCIONAR ELEMENTOS POR ETIQUETA HTML  
// NOS DA EL MISMO RESULTADO PERO ES UNA FORMA DE HACERLO MAS GENERAL PARA NO TENER QUE USAR CLASES SI NO ES NECESARIO 
// const listaToppings = document.getElementsByTagName('li');
// console.log(listaToppings);

// LO PODEMOS FILTRAR MAS AHORA CON BYCLASSNAME
const topppinsMarron = document.getElementsByClassName('fondo-marron')
// console.log(topppinsMarron);


// ELEMNTOS POR SELECTOR CSS ESPESIFICO (tiqueta,id,classname :not etc)
// SU PODER ESTA EN FILTAR DE NAMERA AUN MAS MINUCIOASA LOS ELEMENTOS QUE NECESITAS COMO SI ESTUBIERAS EN CSS
// SOLO TE DA EL PRIMER ELEMNTO QUE CUMPLA CON ESTAS LAS CARACTERISTICAS
// UN ELEMENTO QUE TENGA DOS CLASES 
const toppingNaranja = document.querySelector('.topping.fondo-naranja')
// console.log(toppingNaranja);
// AUN MAS ESPESIFICO
const toppingMarron = document.querySelector('ul li.topping.fondo-marron');
// console.log(toppingMarron);
const toppingNaranjaUltimo = document.querySelector('ul li:nth-child(4)')
// console.log(toppingNaranjaUltimo);

// SI QUEREMOS TRAER NO SOLO EL PRIMER ELEMENTO SI NO TODOS LOS QUE CUMPLAN CON LOS SELECTORES 

// NOS LO ENTREGA COMO UN ARREGLO JS Y SE LLAMA UNA LISTA DE NODOS ES SIMILAR UNA COLLECION HTML PERO CON UNA DIFERECIAS
// Y PODEMOS ACCEDER A ELLOS MEDIANTE SU INDICE TAMBIEN 
const toppingsNaranjas = document.querySelectorAll('.topping.fondo-naranja')
// console.log(toppingsNaranjas);


// agrega estilos con js

// asi puedes ver los estilos que puedes modificar con js
// console.log(listaToppings[2].style);


// listaToppings[2].addEventListener( 'click', () => {
//     listaToppings[0].style.color='green'
//     listaToppings[1].style.background='yellow'
//     listaToppings[2].style.fontSize='50px'
//     listaToppings[3].style.border='5px solid black '
// })


// COMO ACCEDER AL TEXTO DE UN ELEMENTO (innertext, textContent, innerHTML) 

//INNERTEXT SOLO TRAE EL TEXTO
// TEXCONTENT TRA EL TEXTO MAS LAS DENTACIONES QUE SE VEN EN EL HTML
// INNERHTML TE DA TODA TAL CUAL LA ESTRUCTURA HTML QUE HAY DENTRO DE EL ELEMENTO (TEXTO,IDENTACIONES, ETIQUETAS ) EN STTRING

//MODIFCICAR TEXTO 

const titulo = document.getElementById('titulo'); 
// ya que tenemdo el texto lo modifocamos 
// console.log(titulo.innerText);
// cambiando el valor 
titulo.innerText = ' mis toppings favoritos'

// CLASES
// VER LAS CLASES DE LOS OBJETOS 
// const primerTopping = document.querySelector('ul li.topping');
// nos regresa un DOMTOKENLIST con las lista de las clases y numero de ellas y un valor por si requieres el string
// console.log(primerTopping.classList);
// PARA AGREGAR UNA CLASE A UN ELEMENTO 
// primerTopping.classList.add('nueva-clase')
//PARA VERIFICAR SI UNA CLASE EXISTE, COMO RETORNA UN VALOR HAY QUE PASARLO POR CLG  ES TRUE O FALSE 
// console.log(primerTopping.classList.contains('nueva-clase'));
// console.log(primerTopping.classList.contains('clase-para-verifocar'));
//PARA ELIMINAR UNA CLASE 
// primerTopping.classList.remove('nueva-clase');
// console.log(primerTopping.classList.contains('nueva-clase'));

// CREAR UN ELEMNTO 

// PASO UNO ¿DONDE VAMOS A AGREGAR EL TOPPING NUEVO? HAY QUE REFERENCIAR DONDE
const listaToppings = document.getElementById('lista-toppings');
// CREAMOS EL NUEVO ELEMNTO CON  (document.createElement)
const toppingNUevo = document.createElement('li');
// AGREGANDO CLASES Y CONTENIDO PARA QUE SE VISUALICE EN LA WEB Y NO SOLO EN EL DOM.
toppingNUevo.classList.add('topping' , 'fondo-marron')
toppingNUevo.innerText = 'piña'
// PARA AGREGARLO USAMOS (.append()) que nos perminte agregar un nodo nuevo a algun elemnto por ejemplo (listaToppings)
listaToppings.append(toppingNUevo);
//NOTA TAMBIEN PUEDES USAR (appendChild()) SIRVE PARA ELEMENTOS HTML.

// NOTA: SI VAS A DOM VERAS QUE SI ESTA EL ELEMENTO PERO NO TIENE CLASES ENTONCES PRIMERO DEBERIAMOS AGREGARLE LAS CLASES y CONTENIDO AL NUEVO ELEMENTO.


// ELIMITAR ELEMENTOS
// toppingNUevo.remove()
const primerTopping = document.querySelector('ul li.topping');
// primerTopping.remove()
// listaToppings.remove()



// RECORERR EL DOM APROBEHCNADO LAS GERARQUIAS DE PADRES HE HIJOS

// ES MUY UTIL SI QUIERES QUE ALGO PASE CON EL PADRE SI ES QUE INTERACTUAN CON EL ELEMENTO HIJO
// const listaToppingsDos = document.getElementById('lista-toppings');

//MANDARA LLAMAR AL PADRE DE EL ELEMENTO.

//este solo sirve para tarer los elementos HTML 
// console.log(listaToppings.parentElement);
// este da las caracteristicas es mas amplio
// console.log(listaToppings.parentNode);

// PODEMOS ENCADENAR PARA LLEGAR MAS ARRIVA EN LA GERARQUIA
// listaToppings.parentElement.parentElement

// PARA EL RESULTADO CONTRARIO Y Y RRECORRER LOS HIJOS DE UN ELEMNTO USAMOS (children()) NOS REGRESA UNA COLECION HTML
// listaToppings.children()

// TAMBIEN EXISTE .firstChild PERO ESTA PROPIEDAD TRABAJA CON NODOS ES QUE DE LO MAS PROBABLE ES QUE POR LA IDENTACION HTML NOS REGRESE SOLO TEXTO 
const listaToppingsDos = document.getElementById('lista-toppings');
// console.log(listaToppings.firstChild);
// LO MISMO CON 
//console.log(listaToppings.lastChild);


// PARA RESOLVER ESO MEJOR ACCEDEMOS CON (.children()) CON EL INDICE DE EL HIJO
// console.log(listaToppings.children[0]);

// SUS VERCIONES PARA TRABAJAR CON OBJETOS 
// listaToppings.firstElementChild
// listaToppings.lastElementChild

// PARA CONSEGUIR A LOS HERMONOS QUE SON ELEMNTOS QUE ESTAN EN LA MISMA GERARQUIA O SEA AL MISMO NIVEL DE LA IDENTACION HTML 

// PARA EL HERMANO ANTERIOR 
// console.log(listaToppingsDos.previousElementSibling);
// PARA EL HERMANO QUE LE SIGUE 
// console.log(listaToppingsDos.nextElementSibling);
// Y CLARO PARA TRABAJAR CON SUS NODOS SOLO QUITAMOS element
// console.log(listaToppingsDos.nextSibling);






//MODIFICA ATRIBUTOS 

const enlace = document.getElementsByTagName('a');
//nos regresa un arreglo tambien el BYTagName por eso hay acceder por el indice
// enlace[0].getAttribute('href');
//PARA ELIMITAR EL ATRIBUTE
// enlace[0].removeAttribute('href');
// PARA ACTULIZAR, PERSONALIZAR, MODIFOCAR
// EL PRRIMER PARAMETRO ES EL ATRIBUTO Y EL PARAMETRO EL VALOR QUE VAS A PERSONALIZAR.
// enlace[0].setAttribute('href', 'WWW.VITALY.COM.MX');

// CONCEPTOS INPORTANTES 

// ELEMENTO TARGET (BLANCO)
// es el elemento en que se se va agenerar ese evento, el elemneto le va a decir al navegador que pasa algo, como debe reaccionar.

// TRIGGER 
// es esa accion que va desencadenar un evento como un click que, la accion de hacer un click va desencadenar el evento de click que se maje por medio de js y el dom  

// EVENT HANDLER

// el que maneja, una funcion que se ejecuta cuando ocurre un evneto aunque no sepamos en que monento pase la funcion esta en espera de que pase


//EVENT LISTENER

// evento + function



const toppings = document.querySelectorAll('.topping');


for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}




