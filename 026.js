let compra = ["galletas","churros", "galletas","galletas", "leche","galletas", "donuts","galletas",];
let galletas=0;
for (var i = 0; i < compra.length; i++) {
  if (compra[i] === "galletas") {
    galletas++;
  }
}
console.log("En la lista se repite "+galletas+" veces galletas")
console.log(22 == 2 + "2");
console.log(22 === 2 + "2");
console.log();

function chocolate(compra){
if(!compra.includes("chocolate")){
  console.log("Compra chocolate")
}else{
  console.log("Ya tengo chocolate")
}
}

chocolate(compra);
compra.push("chocolate");
chocolate(compra);

