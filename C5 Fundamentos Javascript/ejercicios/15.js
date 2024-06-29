function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:

  var modulo = num % 2

  return modulo === 0
}

console.log(esPar(2))
console.log(esPar(5))


module.exports = esPar;
