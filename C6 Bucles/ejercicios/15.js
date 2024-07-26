function obtenerDiaSemana(numero) {
  var diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  
  // Verificar si el número está entre 1 y 7
  if (numero >= 1 && numero <= 7) {
    return diasSemana[numero - 1];
  } else {
    return "No es un dia de la semana";
  }
}

// Ejemplos de uso:
console.log(obtenerDiaSemana(1)); // "Lunes"
console.log(obtenerDiaSemana(2)); // "Martes"
console.log(obtenerDiaSemana(3)); // "Miercoles"
console.log(obtenerDiaSemana(4)); // "Jueves"
console.log(obtenerDiaSemana(5)); // "Viernes"
console.log(obtenerDiaSemana(6)); // "Sabado"
console.log(obtenerDiaSemana(7)); // "Domingo"
console.log(obtenerDiaSemana(8)); // "No es un dia de la semana"
console.log(obtenerDiaSemana(0)); // "No es un dia de la semana"

module.exports = obtenerDiaSemana;