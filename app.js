/* Numeros PAR e IMPARES */

function ParOImpar(Number) {
  if (Number % 2 === 0) return "El numero es Par";
  else {return "El numero es Impar";}
}
console.log(ParOImpar(5));
console.log(ParOImpar(10));


/* Mayor, Menor o Igual */

function IgualdadDeNumeros(NumberA, NumberB) {
  if (NumberA > NumberB) return `${NumberA} es mayor que ${NumberB}`;
  else if (NumberA < NumberB) return `${NumberA} es menor que ${NumberB}`;
  else {return "Los dos numeros tienen el mismo valor";}
}
console.log(IgualdadDeNumeros(2, 3));
console.log(IgualdadDeNumeros(3, 2));
console.log(IgualdadDeNumeros(2, 2));


/* Multiplos de 5 */

function MultiploDe5(MultiploFive) {
  if (MultiploFive % 5 === 0) return `Enhorabuena! ${MultiploFive} es multiplo de 5`;
  else {return `${MultiploFive} No es multiplo de 5 :(`;}
}
console.log(MultiploDe5(225));
console.log(MultiploDe5(223));


/* Escalera de Numeros */

let i=0
function Escalera(n) {
  while (i < n) {console.log(i++);}
  if (i === n){return `Has llegado a ${n}`}
}
console.log(Escalera(8));


/* Palabras Repetidas */

function imprimirPalabra(palabra, cantidad) {
  let resultado = ``;
  for (let i = 0; i < cantidad; i++) {resultado += palabra + '\n';}
  console.log(resultado);
}
imprimirPalabra("Hola", 7);


/* Imprimir Array */

var primerArray = [0,1,2,3,4,5,6]

function imprimirArray(arr) {
  arr.forEach(function(primerArray) {
    console.log(primerArray);
  });
}
imprimirArray(primerArray)


/* Array Omitir 5to Numero */

console.log("Hago un break para no confundir los numeros de un array con los siguientes");

var segundoArray = [0,1,2,3,4,5,6,7,8,9]

function omitirNumero5(arrayOmitir) {
  arrayOmitir.forEach(function(segundoArray) {
    if (segundoArray !== 4) {console.log(segundoArray);}
  });
}
omitirNumero5(segundoArray)


/* Multiplicar Array */

console.log("Otro Break");

var tercerArray = [0,1,2,3]

function MultiplicarArray(array,cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(array);
  }
}
MultiplicarArray(tercerArray,3);