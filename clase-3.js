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

let cant = parseInt(prompt("Cantidad de ventas a ingresar: "));
let monto;
let acu = 0;
let acumulados = [];

for (let cont = 1; cont <= cant; cont++) {
  monto = parseFloat(prompt(`Ingresar monto de ventas: ${cont}`));
  acu = acu + monto;
  acumulados.push(monto);
  // console.log("Montos acumulados en " + cant + " ventas es de " + acumulados)
  // console.log(`El monto acumulado en ${cant} ventas es de [${acumulados}]`)
  // console.log(`Acumulado: ${acu}`);
}
console.log(`El monto total de las ventas es: ${acu}`);