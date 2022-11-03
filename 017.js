for (let index = 0; index<=10; index++) {
    console.log("Hola "+index);
    
}
//Imprimir en una sola linea
let linea="(";
for (let index = 10; index>=0; index--) {
    if(index!=0){
        linea=linea+index+", ";
    }else{
        linea=linea+index+")";
    }
    
}
console.log(linea);