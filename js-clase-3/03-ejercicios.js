function capturarSecuencia() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  const seriesMsg = document.getElementById('seriesMsg');

  let serieI = [];
  let serieE = [];

  if (isNaN(n1) || isNaN(n2) || n1 < 1 || n1 > 100 || n2 < 1 || n2 > 100 || n2 < n1) {
    alert("Ingresar dos números enteros num1 y num2. num2 siempre deberá ser mayor o igual a num1.");
    if (isNaN(n1) || n1 < 1 || n1 > 100) {
      document.getElementById("n1").focus();
    } else {
      document.getElementById("n2").focus();
    }
  } else {
    for (let i = n1; i <= n2; i++) {
      serieI.push(i);
    }

    for (let i = n1 + 1; i < n2; i++) {
      serieE.push(i);
    }

    seriesMsg.innerHTML = `Inclusivo e/ ${n1} y ${n2}: "${serieI}"<br>
    Exclusivo e/ ${n1} y ${n2}: "${serieE}"`;
    document.getElementById("form2").reset();
    document.getElementById("n1").focus();
  }
}

// const form = document.querySelector('form');
// const serieMsg = document.getElementById('seriesMsg');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevenir que la página se recargue

//   let n1 = parseInt(form.elements['n1'].value);
//   let n2 = parseInt(form.elements['n2'].value);

//   let serie1 = [];
//   let serie2 = [];

//   for (let i = n1; i <= n2; i++){
//     serie1.push(i);
//   }
//   for (let i = n1+1; i <= n2-1; i++){
//     serie2.push(i);
//   }

//   seriesMsg.innerHTML = `Secuencia inclusiva entre ${n1} y ${n2}: "${serie1}"<br>
//                         Secuencia exclusiva entre ${n1} y ${n2}: "${serie2}"`;
// });

// Ejercicio 3
function capturarTablaMultiplicar() {
  let multiplicando = parseInt(document.getElementById("multiplicando").value);
  let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  isInputMult = document.getElementById("multiplicando");
  let tabla = [];

  if (isNaN(multiplicando) || multiplicando < 1 | multiplicando > 10) {
    alert("Ingresa un número entre 1 y 10");
    isInputMult.focus();
  } else {
    multiplicadores.forEach((multiplicador) => {
      // Realizar la multiplicación y agregarla a la tabla
      let resultado = multiplicando * multiplicador;
      tabla.push(`${multiplicando} x ${multiplicador} = ${resultado}`);
    });

    let tablaMsg = document.getElementById("tablaMsg");
    tablaMsg.innerHTML = `TABLA del ${multiplicando}<br>${tabla.join(`<br>`)}`;
    document.getElementById("form3").reset();
    isInputMult.focus();
  }
}

// Ejercicio 4
function capturarMultiplos() {
  let nNat = parseInt(document.getElementById("nNat").value);
  let multiplos = [];
  let i = 1;
  let form = document.getElementById("form4");

  if (isNaN(nNat) || nNat > 100 || nNat < 1) {
    alert("Ingresa un dato válido");
    form.reset();
    document.getElementById("nNat").focus();
    return;
  }

  while (multiplos.length < nNat) {
    if (i % 3 === 0 && i % 5 !== 0) {
      multiplos.push(i);
    }
    i++;
  }

  let multiplosMsg = document.getElementById("multiplosMsg");
  multiplosMsg.innerHTML = `Los primeros ${nNat} múltiplos de 3, excepto los múltiplos de 5, son:<br>${multiplos.join(", ")}`;
  form.reset();
  document.getElementById("nNat").focus();
}

// Ejercicio 5
const edadMinima = 18;
let cantEdades = 5;
let cantEdadesOk = 0;
let edad;

function capturarEdades() {
  let edades = [];

  for (let i = 1; i <= cantEdades; i++) {
    let inputEdad = document.getElementById("edad" + i);
    let edad = parseInt(inputEdad.value);
    edades.push(edad);

    if ((edad % 2 != 0) && (edad > edadMinima)) {
      cantEdadesOk++;
    } 
  }
  const imparesSup18Msg = document.getElementById("imparesSup18Msg");
  imparesSup18Msg.textContent = `La cantidad de edades impares menores de ${edadMinima} son ${cantEdadesOk}`;

  document.getElementById("form5").reset();
  document.getElementById("edad1").focus();
}