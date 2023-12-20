function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  let texto;
  if(num=== 0){
    return false; 
  }
  if(num<0){
    texto = "Es negativo";
  }
  if(num>0){
    texto = "Es positivo";
  }
  return texto;
}

module.exports = esPositivo;