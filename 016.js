var edadNino = 12;
var nota = 9;
var paga = 20;
if (edadNino >= 12) {

  if (nota >= 5 && nota <= 8) {

    console.log("Paga de " + paga);

  } else if (nota > 8 && nota < 10) {

    console.log("Paga de " + (paga + 10));

  } else if (nota == 10) {

    console.log("Paga de " + (paga + 20));

  } else {

    console.log("No tiene paga");
  }
}
