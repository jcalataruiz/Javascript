var nota= parseInt(process.argv[2]);
if (nota>=0 && nota<=3) {
    console.log("muy deficiente");
}else if (nota>3&&nota<5) {
    console.log("suspenso");
}else if (nota>=5&&nota<7) {
    console.log("aprobado");
}else if (nota>=7&&nota<9) {
    console.log("notable");
}else if(nota>=9&nota<=10){
    console.log("sobresaliente");
}else {
    console.log("La nota es erronea");
}