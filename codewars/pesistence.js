
function persistencia(num) {
    // Inicializa un contador para llevar un registro de los pasos multiplicativos
    let pasos = 0;
  
    // Convierte num en una cadena para trabajar con sus dígitos
    num = num.toString();
  
    // Continúa en un bucle hasta que num sea un número de un solo dígito
    while (num.length > 1) {
      // Multiplica los dígitos de num
      num = num.split('').reduce((producto, dígito) => producto * parseInt(dígito), 1).toString();
      pasos++;
    }
  
    return pasos;
  }

  console.log(persistencia(39));