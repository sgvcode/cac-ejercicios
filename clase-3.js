// let contador = 1;

// while (contador <= 5) {
//   //Intrucciones que se repiten mientras la condicion sea verdadera
//   console.log("estoy aprendiendo ciclos");
//   contador++;
// }
// console.log("Gracias");


// for (let contador = 0; contador <= 5; contador++) {
//   console.log(`${contador} estoy aprendiendo ciclos`);
// }
// for (let contador = 100; contador >= 95; contador--) {
//   console.log(`${contador} estoy aprendiendo ciclos`);
// }

// const EDAD_MINIMA = 18;
// let cantEdades = 5;
// let cantEdadesCumplen = 0;
// let edad;

// for (let cont = 1; cont < cantEdades; cont++) {
//   edad = parseInt(prompt(`Ingresar edad nº ${cont}`));
//   if ((edad % 2 != 0) && (edad <= EDAD_MINIMA)) {
//     cantEdadesCumplen++
//   }
// }
// console.log(`La cantidad de edades impares menores de ${EDAD_MINIMA} son ${cantEdadesCumplen}`);

// let cant = parseInt(prompt("Cantidad de ventas a ingresar: "));
// let monto;
// let acu = 0;
// let acumulados = [];

// for (let cont = 1; cont <= cant; cont++) {
//   monto = parseFloat(prompt(`Ingresar monto de ventas: ${cont}`));
//   acu = acu + monto;
//   acumulados.push(monto);
//   // console.log("Montos acumulados en " + cant + " ventas es de " + acumulados)
//   // console.log(`El monto acumulado en ${cant} ventas es de [${acumulados}]`)
//   // console.log(`Acumulado: ${acu}`);
// }
// console.log(`El monto total de las ventas es: ${acu}`);


//Ciclo por contador (mejor el for)

//Ejemplo ej 6 while por bandera (while)
// const EDAD_MINIMA = 18;
// let cantEdades = 5;
// let cantEdadesCumplen = 0;
// let edad = parseInt(prompt(`Ingresar una edad: `));

// while(edad > 0){
//   if ((edad % 2 != 0) && (edad > EDAD_MINIMA)) {
//     cantEdadesCumplen++
//   }
//   edad = parseInt(prompt(`Ingresar otra edad: `));
// }
// console.log(`La cantidad de edades impares menores de ${EDAD_MINIMA} son ${cantEdadesCumplen}`);

//Ejecicio con validacion

// let cant = parseInt(prompt("Cantidad de ventas a ingresar: "));
// let venta;
// let acu = 0;
// let acumulados = [];

// for (let cont = 1; cont <= cant; cont++) {
//   venta = parseFloat(prompt(`Ingresar monto de ventas: ${cont}`));
//   while (venta <= 0){
//     venta = parseFloat(prompt(`Error! Ingresar monto de ventas: ${cont}`));
//   }
//   acu = acu + venta;
//   acumulados.push(venta);
// }
// console.log(`El monto total de las ventas es: ${acu}`);

//Ej 14

const EDAD_MAXIMA = 120;
let nombre, edad;
let minimo = EDAD_MAXIMA;
let nombreMasJoven;

nombre = prompt("Ingrese nombre");

while (nombre != "*") {
  edad = parseInt(prompt(`Ingrese edad de ${nombre}`));
  while (edad > EDAD_MAXIMA) {
    edad = parseInt(prompt(`Ingrese edad de ${nombre}`));
  }
  if (edad <= minimo) {
    minimo = edad;
    nombreMasJoven = nombre;
  }
  nombre = prompt("Ingrese otro nombre");
}
if (nombreMasJoven != undefined) {
  console.log(`El más joven es ${nombreMasJoven} con ${minimo} años`);
} else {
  console.log("No se ingresó ningun edad");
}