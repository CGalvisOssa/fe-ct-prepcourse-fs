function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:



  if ( Number.isInteger( Math.log2(numero))){
    return true;
  }
  else{
    return false;
  }
}

console.log(esPotenciaDeDos(8))
console.log(esPotenciaDeDos(12))

module.exports = esPotenciaDeDos;
