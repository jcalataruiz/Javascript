let importe = 155;
if (importe > 0 && importe <= 10) {
  console.log("Es muy barato");
} else if (importe > 10 && importe <= 20) {
  console.log("Es barato");
} else if (importe > 20 && importe <= 40) {
  console.log("Es Normal");
} else if (importe > 40 && importe <= 50) {
  console.log("Es caro");
} else {
  console.log("No lo compro");
}
