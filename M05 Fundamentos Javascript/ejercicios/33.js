function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  for(let k = 2;k<=numero/2;k++){
    if(numero % k==0){
      return false;
    }
  }
  return true;
}

module.exports = esNumeroPrimo;
