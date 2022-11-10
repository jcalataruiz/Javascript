function saludo(saludo1, saludo2) {
  for (var i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      for (var j = 0; j <= 1; j++) {
        console.log(saludo1);
      }
    } else {
      for (var j = 0; j <= 1; j++) {
        console.log(saludo2);
      }
    }
  }
}
var saludo1 = "hola";
var saludo2 = "adios";
saludo(saludo1, saludo2);
