function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true){
    return 'Soy verdadero';
  }
  else (valor === false)
  {
    return 'Soy falso';
  }
}

console.log(esVerdadero(true));
console.log(esVerdadero(false));

module.exports = esVerdadero;
