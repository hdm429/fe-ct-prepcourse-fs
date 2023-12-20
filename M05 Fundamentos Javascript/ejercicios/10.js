function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
 /*var date1 = fecha.toDateString;
 console.log(date1);
  if (date1 === 'Invalid Date'){
    return true;
  } else {
    return false;
  }*/
  return fecha instanceof Date && !isNaN(fecha);
}


module.exports = esFechaValida;