var lista = [
  7, 5, 1, 2, 2, 3, 4, 8, 5, 6, 10, 5, 8, 5, 4, 5, 6, 8, 7, 5, 6, 8, 1, 7, 3, 9,
  6, 5, 4, 5,
];

function vecesRepetido(numero, lista) {
  var aprobadosJusto = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      aprobadosJusto++;
    }
  }
  console.log(
    "El numero " + numero + " esta repetido " + aprobadosJusto + " veces."
  );
}
function repetidos(lista) {
  for (var j = 0; j <= 10; j++) {
    vecesRepetido(j, lista);
  }
}
repetidos(lista);
// function diaSemana(numero){
//   switch () {
//     case value:0 
//       return "Domingo"
//       break;
//     case value:1 
//       return "Lunes"
//       break;
//     case value:2 
//       return "Martes"
//       break;
//     case value:3 
//       return "Miercoles"
//       break;
//     case value:4
//       return "Jueves"
//       break;
//     case value:5 
//       return "Viernes"
//       break;
//     case value:6
//       return "Sabado"
//       break;
//   }}
  let numero=3;
  switch (numero) {
    case value:0 
      return "Domingo"
      break;
    case value:1 
      return "Lunes"
      break;
    case value:2 
      return "Martes"
      break;
    case value:3 
      return console.log("Miercoles")
      break;
    case value:4
      return "Jueves"
      break;
    case value:5 
      return "Viernes"
      break;
    case value:6
      return "Sabado"
      break;
  }
