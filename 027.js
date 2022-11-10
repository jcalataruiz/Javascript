let numeros = [32, 43, 56, 23, 19, 16, 32, 59, 30, 101, 23];
let compra = [
  "galletas",
  "churros",
  "galletas",
  "galletas",
  "leche",
  "galletas",
  "donuts",
  "galletas",
];
function edadMayor(lista) {
  var mayor = lista[0];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
  }
  console.log("El mayor es el " + mayor);
}
function edadMenor(lista) {
  var menor = lista[0];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log("El menor es el " + menor);
}
function listaOrdenada(lista) {
  lista.sort((a, b) => a - b);
  for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
function listaOrdenada1(lista) {
  lista=lista.sort();
  for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}
edadMayor(numeros);
edadMenor(numeros);
listaOrdenada(numeros);
listaOrdenada1(compra);
