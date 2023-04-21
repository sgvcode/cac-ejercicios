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
  }
}

// Ejercicio 3
function capturarTablaMultiplicar() {
  let multiplicando = parseInt(document.getElementById("multiplicando").value);
  let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let tabla = [];

  if (isNaN(multiplicando) || multiplicando < 1 | multiplicando > 10) {
    alert("Ingresa un número entre 1 y 10");
    document.getElementById("multiplicando").focus();
  } else {
    multiplicadores.forEach((multiplicador) => {
      // Realizar la multiplicación y agregarla a la tabla
      let resultado = multiplicando * multiplicador;
      tabla.push(`${multiplicando} x ${multiplicador} = ${resultado}`);
    });

    let tablaMsg = document.getElementById("tablaMsg");
    tablaMsg.innerHTML = `TABLA del ${multiplicando}<br>${tabla.join(`<br>`)}`;
    document.getElementById("form3").reset();
  }
}

// Ejercicio 4
function capturarMultiplos() {
  let nNat = parseInt(document.getElementById("nNat").value);
  let multiplos = [];
  let i = 1;

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
  document.getElementById("form4").reset();
}

// Ejercicio 5 -------------------
function capturarEdades() {
  let edades = [];
  let cantEdadesOk = 0;
  const edadMinima = 18;
  const cantEdades = 5;

  for (let i = 1; i <= cantEdades; i++) {
    let inputEdad = document.getElementById("edad" + i);
    let edad = parseInt(inputEdad.value);
    edades.push(edad);

    if ((edad % 2 != 0) && (edad > edadMinima)) {
      cantEdadesOk++;
    }
  }

  const imparesSup18Msg = document.getElementById("imparesSup18Msg");
  imparesSup18Msg.textContent = `La cantidad de edades impares mayores de ${edadMinima} son ${cantEdadesOk}`;

  // Establecer los valores vacíos para realizar el programa de nuevo
  for (let i = 1; i <= cantEdades; i++) {
    document.getElementById("edad" + i).value = "";
  }
}

// Ejercicio 6 ---------------------
function calcularMonto() {
  let cant = document.getElementById("cant").value;
  let monto;
  let montoAcu = 0;
  let acumulados = [];

  for (i = 1; i <= cant; i++) {
    monto = parseInt(prompt(`Ingresar monto de la venta ${i}: `));
    montoAcu = montoAcu + monto;
    acumulados.push(monto);
  }
  let ventasMsg = document.getElementById("ventasMsg");
  ventasMsg.innerHTML = `El monto total por las ${cant} ventas es:<br> $${montoAcu}`;
  document.getElementById("form6").reset();
}

// Ejercicio 7

function calcularAlturaPromedio() {
  let cant1 = parseInt(document.getElementById("cant1").value);
  let alturas;
  let altAcu = 0;
  let alturasAcumuladas = [];

  for (i = 1; i <= cant1; i++) {
    alturas = parseFloat(prompt(`Altura de jugador ${i}: `));
    altAcu = altAcu + alturas;
    alturasAcumuladas.push(alturas);
  }

  let alturaPromedio = altAcu / cant1;
  console.log(`La estatura promedio de ${cant1} jugadores es ${alturaPromedio.toFixed(2)}m`);

  let alturaPromedioMsg = document.getElementById("alturaPromedioMsg");
  alturaPromedioMsg.innerHTML = `La estatura promedio de ${cant1} jugadores es ${alturaPromedio.toFixed(2)}m`;
  document.getElementById("form7").reset();
}

// Ejercicio 8
function capturarEnteros() {
  //declaro variables de entrada de los datos
  let cantInt = parseInt(document.getElementById("cantInt").value);
  let numeros = [];
  //resuelve el problema de recorrido de datos
  for (let i = 1; i <= cantInt; i++) {
    let num = parseInt(prompt(`Ingrese el número entero ${i}: `));
    numeros.push(num);
  }
  //declaro variables que guarden lo que necesito del recorrido
  let maxNum = numeros[0];
  let maxPos = 1;
  //especifico que resuelva otro hecho puntual
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maxNum) {
      maxNum = numeros[i];
      maxPos = i + 1;
    }
  }
  //resuelvo la respuesta por navegador
  let enterosMsg = document.getElementById("enterosMsg");
  enterosMsg.innerHTML = `El número mayor es ${maxNum} y apareció en la posición ${maxPos}.`;
  document.getElementById("form8").reset();
}

// Ejercicio 9
function capturarNatural() {
  let nNatural = parseInt(document.getElementById("nNatural").value);
  let factorial = 1;

  for (let i = 1; i <= nNatural; i++) {
    factorial *= i;
  }

  let factorialMsg = document.getElementById("factorialMsg");
  factorialMsg.innerHTML = `El factorial de ${nNatural} es ${factorial}`;
  document.getElementById("form9").reset();
}

// Ejercicio 11
function validarNotaN() {
  let notaN = -1;
  let validarNotaNMsg = document.getElementById("validarNotaNMsg");

  while (notaN <= 0 || notaN > 10 || notaN === 1 || notaN === 3) {
    notaN = parseInt(prompt("Ingresa una nota: "));
    if (notaN <= 0 || notaN > 10 || notaN === 1 || notaN === 3) {
      alert("Nota inválida, ingresa una nota: ");
    } else {
      // alert(`La nota es ${notaN}`);
      validarNotaNMsg.innerHTML = `La nota es ${notaN}`;
    }
  }
}

// Ejercicio 12
// Opción con while
function conWhile() {
  let opcion;
  let finalizarMsg = document.getElementById("finalizarMsg");

  do {
    opcion = prompt('¿Deseás continuar? [S/N]');
    if (!['S', 's', 'N', 'n'].includes(opcion)) {
      alert('Ingresaste una opción inválida. Por favor, ingresá S o N.');
    }
  } while (!['N', 'n'].includes(opcion));
  if (['S', 's'].includes(opcion)) {
    opcion = prompt('¿Deseás continuar? [S/N]');
  } else {
    finalizarMsg.innerHTML = "Operación cancelada con 'while'.";
  }
}

function conDoWhile() {
  //Opción con do-while
  let opcion;
  let finalizarMsg = document.getElementById("finalizarMsg");

  do {
    opcion = prompt('¿Deseás continuar? [S/N]');
    if (!['S', 's', 'N', 'n'].includes(opcion)) {
      alert('Ingresaste una opción inválida. Por favor, ingresá S o N.');
    }
  } while (!['N', 'n'].includes(opcion));
  if (['S', 's'].includes(opcion)) {
    opcion = prompt('¿Deseás continuar? [S/N]');
  } else {
    finalizarMsg.innerHTML = "Operación cancelada con 'do-while'.";
  }
}