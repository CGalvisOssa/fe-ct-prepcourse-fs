function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if (num < 50 && num > 20){
    return true ;
  }
  return false ;
}

console.log(estaEnRango(30))
console.log(estaEnRango(60))
console.log(estaEnRango(10))




module.exports = estaEnRango;
