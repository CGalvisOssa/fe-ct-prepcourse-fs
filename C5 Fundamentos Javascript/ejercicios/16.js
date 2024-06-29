function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:

  var modulo = num % 2
  return modulo === 1
}

console.log(esImpar(2))
console.log(esImpar(5))

module.exports = esImpar;