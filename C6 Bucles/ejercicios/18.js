function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let c = 1;
  if (a < b) {
    while (a <= b) {  
    console.log(c)
      c = c * a;
      a = a + 1;
    }
 
  } 
  else {
    while (b <= a) {  
    console.log(c)
      c = c * b;
      b = b + 1;
  }
   
  }
if( c === -0){
 c = 0;
}
return(c);
}


console.log(productoEntreNúmeros(2,7));
console.log(productoEntreNúmeros(7,2));
console.log(productoEntreNúmeros(-2,2));


module.exports = productoEntreNúmeros; 