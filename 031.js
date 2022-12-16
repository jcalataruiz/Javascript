
let factura1={
    numero:1,
    concepto:"ordenador",
    importe:800,
}
let factura2={
    numero:2,
    concepto:"tablet",
    importe:450,
}
let factura3={
    numero:3,
    concepto:"raton",
    importe: 60,
}

console.log("Total facturas= "+(factura1.importe+factura2.importe+factura3.importe))

let facturas=[factura1,factura2,factura3];
let totalFacturas=0;
for(var i =0;i<facturas.length;i++){
    totalFacturas+=facturas[i].importe
}
console.log(totalFacturas);