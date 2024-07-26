function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  var par = a % 2;
  var tres = a % 3;
    
  if ( par === 0  &&  tres === 0){
    return true;
  }
  return false;
}

console.log(esParYDivisiblePorTres(18))
console.log(esParYDivisiblePorTres(3))
console.log(esParYDivisiblePorTres(8))
module.exports = esParYDivisiblePorTres;