function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  var letraMinus = letra.toLowerCase();

  if (letraMinus == "a" || letraMinus =="e" ||  letraMinus =="i" || letraMinus =="o" || letraMinus =="u" )
    {
      return ("Es vocal")
    }
    else{
      return("Dato incorrecto")
    }
}

console.log(esVocal("A"))
console.log(esVocal("n"))



module.exports = esVocal;
