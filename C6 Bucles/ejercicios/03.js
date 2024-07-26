function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if( Number.isInteger(x) && Number.isInteger(y)){
    return Math.max(x, y)
  }
  else if ( x === y ){
    return Math.random(x, y);
  }
  else{
    return "El numero ingresado no es un entero"
  }
}

console.log(obtenerMayor(5, 7));

console.log(obtenerMayor(4.5, 7));

console.log(obtenerMayor(5, 5));


module.exports = obtenerMayor;
