var lista = [30, 7, 9, 4, 100, 67, 340, 87];
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log("..............");

for (var i = lista.length - 1; i >= 0; i--) {
  console.log(lista[i]);
}
console.log("..............");
i = 0;
while (i < lista.length) {
  console.log(lista[i] * 4);
  i++;
}
var masAlto = lista[0];
for (i = 0; i < lista.length; i++) {
  
  if (lista[i] >= masAlto) {
    masAlto = lista[i];
    console.log(masAlto+" temp")
  }
}
console.log(masAlto);

lista.sort(function(a, b){return a - b});
lista.forEach(element => {
    console.log(element+" ordenado");
    
});


