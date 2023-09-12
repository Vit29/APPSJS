function evenOrOdd(number) { 
    // console.log(number / 2);
    // const divi  = number / 2 
    // console.log(Math.floor(number / 2 ));    
    // const resultado =  Math.floor(number / 2) == number / 2
    // console.log(resultado);
    // if (resultado == false) {
        // return  number + ' is Odd ' 
    // } else {
        // return  number + ' is Even' 
    // }
    return number % 2 == 0 ?' Si es par' :'No es par'
}


console.log(evenOrOdd(5));