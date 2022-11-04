// var texto="*";
// console.log(texto);

// for(var i=0;i<=300;i++){
//     texto=" "+texto;
//     console.log(texto);
// }

// var piramide="xxxx*xxxx"  1-----8-----0
// var piramide="xxx***xxx"  3-----6-----1
// var piramide="xx*****xx"  5-----4-----2
// var piramide="x*******x"  7-----2-----3
// var piramide="*********"  9-----0-----4

var asteriscos = "*";
console.log(asteriscos);
var tope = 3; //numero maximo de espacios de espacios a la izquierda
for (var i = 1; i <= tope; i++) {
  var espacios = "";
  var totalEspacios = tope + 1 - i;
  espacios = "";
  for (var j = 1; j <= totalEspacios; j++) {
    espacios = espacios + " ";
  }
  console.log(espacios + asteriscos);
  asteriscos = "*" + asteriscos + "*";
}
