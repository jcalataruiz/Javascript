let notas = [4, 5, 9, 8, 1, 6, 7, 7, 6, 9];
let numAprobados=0;
let numSuspensos=0;
let aprobados=[];
let suspensos=[];
for(let i =0;i<notas.length;i++){
    if(notas[i]>=5){
        aprobados.push(notas[i]);
        numAprobados++;
    }else{
        suspensos.push(notas[i]);
        numSuspensos++;
    }
}
console.log("Numero de aprobados= "+numAprobados);
console.log("Numero de suspensos= "+numSuspensos);
console.log("..............");
console.log("Numero de aprobados= "+aprobados.length);
console.log("Numero de suspensos= "+suspensos.length);

function imprimirLista(lista){
    for (let i = 0; i<lista.length; i++){
        console.log(lista[i])
    }
}
function ordenarNotas(lista){
    lista.sort((a,b)=>(a-b));
    return lista;
}


imprimirLista(aprobados);
console.log("...........");
imprimirLista(suspensos)
console.log("...........");
imprimirLista(notas);
