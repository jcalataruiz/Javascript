var lista= [3, 7, 9];
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
for(var i=0; i<lista.length;i++){
    console.log(lista[i])
}
lista.forEach(element => {
    console.log(`${element} foreach`) 
});

lista.push("adios");
for(var i=0; i<lista.length;i++){
    console.log(lista[i])
}
lista.forEach(element => {
    console.log(`${element} foreach`) 
});
lista[0]="Hola";
for(var i=0; i<lista.length;i++){
    console.log(lista[i])
}


