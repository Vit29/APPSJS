// comportamiento del alcance o contexto funcional.

// función global 
function funcionUno() {
    const a = 5;
    console.log(a);
    // console.log(b);
        // función local 
        funcionDOs() // Devemos de llamamar a funciónDOs dentro de funcion uno para que se tome en cuenta.
        function funcionDOs() {
            // variable local 
            const b = 10;
            // const a = a + b;
            console.log(b);
            console.log(a);
        }
}

// función global 
function funcionthree() {
    // variable local 
    const a = 7;

}

funcionUno() 
funcionthree()
// funcionDOs()

// console.log(a); //ReferenceError:

// las variables (a) son del contexto funcional local solo son disponibles dentro de cada una de las funciones donde se encuentre definida esa varieble.









