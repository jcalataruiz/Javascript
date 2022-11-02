let numero1 = parseInt(process.argv[2]);
let numero2 = parseInt(process.argv[3]);
if (numero1 > numero2) {
  console.log("El mayor en numero1");
} else if (numero1 < numero2) {
  console.log("El mayor en numero2");
} else {
  console.log("Son iguales");
}
