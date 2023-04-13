//ejercicio 1
function capturarName() {
  let name = document.getElementById("name").value;
  let welcomeMsg = document.getElementById("welcome");
  let nameInput = document.getElementById("name");

  let regex = /^[a-zA-Z]+$/;

  if (name == "" || !regex.test(name)) {
    alert("Por favor, ingresa un nombre válido");
    document.getElementById("name").value="";
    nameInput.focus();
  } else {
    welcomeMsg.textContent = `Te damos la Bienvenida, ${name}`;
    nameInput.value = "";
  }
}

//ejercicio 2
function capturarInt() {
  let int = document.getElementById('int').value;
  let numberInt = document.getElementById("entero");
  numberInt.textContent = `El opuesto de ${int} es ${int * -1} y el inverso es ${(1 / int).toFixed(3)}`;
  document.getElementById("int").value = "";
}

//ejercicio 3
function capturarNotas() {
  let trim1 = parseFloat(document.getElementById("trim1").value);
  let trim2 = parseFloat(document.getElementById("trim2").value);
  let trim3 = parseFloat(document.getElementById("trim3").value);
  let promedioNota = document.getElementById("promedioNota");

  if (isNaN(trim1) || trim1 < 0 || trim1 > 10) {
    alert("Ingresa una nota valida para el 1º Trim");
    document.getElementById("trim1").focus();
  } else if (isNaN(trim2) || trim2 < 0 || trim2 > 10) {
    alert("Ingresa una nota valida para el 2º Trim");
    document.getElementById("trim2").focus();
  } else if (isNaN(trim3) || trim3 < 0 || trim3 > 10) {
    alert("Ingresa una nota valida para el 3º Trim");
    document.getElementById("trim3").focus();
  } else {
    let promedio = (trim1 + trim2 + trim3) / 3;
    promedioNota.textContent = `El promedio anual de tus notas es: ${promedio.toFixed(2)}`;

    document.getElementById("trim1").value = "";
    document.getElementById("trim2").value = "";
    document.getElementById("trim3").value = "";
    document.getElementById("trim1").focus = "";
  }
}

//Ejercicio 4
function capturarWeeklySalary() {
  let hourSalary = parseInt(document.getElementById("hourSalary").value);
  let daylyWorkedHours = parseInt(document.getElementById("daylyWorkedHours").value);
  let weeklySalaryMsg = document.getElementById("weeklySalaryMsg");

  if (isNaN(hourSalary) || hourSalary <= 0) {
    alert("Ingresa tu salario por hora válido");
    document.getElementById("hourSalary").focus();
  } else if (isNaN(daylyWorkedHours) || daylyWorkedHours <= 0) {
    alert("Ingresa cantidad de horas trabajadas por semana");
    document.getElementById("daylyWorkedHours").focus();
  } else {
    let weeklySalary = hourSalary * daylyWorkedHours * 5.5;
    weeklySalaryMsg.textContent = `Tu salario semanal es de $${weeklySalary}`;
    document.getElementById("hourSalary").value = "";
    document.getElementById("daylyWorkedHours").value = "";
    document.getElementById("hourSalary").focus();
  }
}

//Ejercicio 5
function capturarInverted() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let resultadoMsg = document.getElementById("resultadoMsg");
  let invertedMsg = document.getElementById("invertedMsg");

  if (a === "") {
    alert("Ingresa un valor numérico para a");
    document.getElementById("a").focus();
  } else if (b === "" || typeof (a) !== typeof (b)) {
    alert("Ingresa un valor numérico para b");
    document.getElementById("b").focus();
  } else {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("a").focus();
  }

  resultadoMsg.textContent = `Ingresaste los valores '${a}' y '${b}'`;
  [a, b] = [b, a];
  invertedMsg.textContent = `Los valores invertidos son '${a}' y '${b}'`;
}

//Ejercicio 6

let salary = 14000;
let commision = 0.16;

function capturarSalary() {
  let itemPrice = parseFloat(document.getElementById("itemPrice").value);
  let soldItems = parseFloat(document.getElementById("soldItems").value);
  let totalSalaryMsg = document.getElementById("totalSalaryMsg");

  if (itemPrice === "") {
    alert("Debes ingresar el precio del Artículo");
    document.getElementById("itemPrice").focus();
  } else if (soldItems === "" || soldItems < 0) {
    alert("Debes ingresar cantidad de artículos vendidos");
    document.getElementById("soldItems").focus();
  } else {
    let totalSalary = salary + (itemPrice * soldItems * commision);
    totalSalaryMsg.textContent = `Tu salario, sumadas las comisiones es de $ ${totalSalary.toFixed(3)}`;
    document.getElementById("itemPrice").value = "";
    document.getElementById("soldItems").value = "";
    document.getElementById("itemPrice").focus();
  }


}

//Ejercicio 7
function capturarTerreno() {
  let ancho = document.getElementById("ancho").value;
  let largo = document.getElementById("largo").value;
  let valorPorM2 = document.getElementById("valorPorM2").value;
  let terrenoMsg = document.getElementById("terrenoMsg");

  if (ancho === "" || ancho < 1) {
    alert("Debes ingresar el ancho del terreno");
    document.getElementById(ancho).focus();
  } else if (largo === "" || largo < 1) {
    alert("Debes ingresar el largo del terreno");
    document.getElementById(largo).focus();
  } else if (valorPorM2 === "" || valorPorM2 < 0) {
    alert("Debes ingresar el precio x m2 del terreno");
    document.getElementById(valorPorM2).focus();
  } else {
    let sup = largo * ancho;
    let valorTotal = ancho * largo * valorPorM2;
    let metrosAlambreX3 = (2 * ancho + 2 * largo) * 3;
    terrenoMsg.textContent = `Valor del terreno de ${sup}m (${ancho}m x ${largo}m) = $${valorTotal}\nSe necesitan ${metrosAlambreX3}m de alambre para 3 pasadas de cerco`;
    document.getElementById("ancho").value = "";
    document.getElementById("largo").value = "";
    document.getElementById("valorPorM2").value = "";
    document.getElementById("ancho").focus();
  }
}

//Ejercicio 8
function capturarNumeros() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let operacionesMsg = document.getElementById("operacionesMsg");

  if (isNaN(n1) || isNaN(n2)) {
    alert("Ingresa un número entero");
    if (isNaN(n1)) {
      document.getElementById("n1").focus();
    } else {
      document.getElementById("n2").focus();
    }
  } else {
    let suma = n1 + n2;
    let resta = n1 - n2;
    let mult = n1 * n2;
    let div;

    if (n2 === 0) {
      div = "No se puede dividir entre cero";
    } else {
      div = (n1 / n2).toFixed(2);
    }
    operacionesMsg.textContent = `Dados los números ${n1} y ${n2}, el resultado de la\nSuma = ${suma}\nResta = ${resta}\nProducto = ${mult}\nDivisión = ${div}`;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
    document.getElementById("n1").focus();
  }
}

//Ejercicio 9
function capturarAngulo() {
  let ang1 = parseInt(document.getElementById("ang1").value);
  let ang2 = parseInt(document.getElementById("ang2").value);
  let anguloMsg = document.getElementById("anguloMsg");

  if (isNaN(ang1) || isNaN(ang2)) {
    alert("Ingresa un valor para el campo");
    if (isNaN(ang1)) {
      document.getElementById("ang1").focus();
    } else {
      document.getElementById("ang2").focus();
    }
  } else if (ang1 + ang2 > 180) {
    alert("La suma de los ángulos no puede ser superior a 180 grados");
    document.getElementById("ang1").value = "";
    document.getElementById("ang2").value = "";
    document.getElementById("ang1").focus();
  } else {
    let ang3 = 180 - (ang1 + ang2);
    anguloMsg.textContent = `Dado un triángulo de Ang1=${ang1}º y Ang2=${ang2}º, el Ang3=${ang3}º`;
    document.getElementById("ang1").value = "";
    document.getElementById("ang2").value = "";
    document.getElementById("ang1").focus();
  }
}

//Ejercicio 10
// function calcularAportes(event) {
//   event.preventDefault(); // Evita que el formulario se envíe

//   let form = event.target;
//   let inv1 = form.elements["inv1"].value;
//   let monto1 = parseInt(form.elements["monto1"].value);
//   let inv2 = form.elements["inv2"].value;
//   let monto2 = parseInt(form.elements["monto2"].value);
//   let inv3 = form.elements["inv3"].value;
//   let monto3 = parseInt(form.elements["monto3"].value);

//   let total = monto1 + monto2 + monto3;
//   let porcentaje1 = ((monto1 / total) * 100).toFixed(2);
//   let porcentaje2 = ((monto2 / total) * 100).toFixed(2);
//   let porcentaje3 = ((monto3 / total) * 100).toFixed(2);

//   let aportesMsg = document.getElementById("aportesMsg");
//   aportesMsg.textContent = `El monto total invertido es $${total}\n${inv1}: ${porcentaje1}%\n${inv2}: ${porcentaje2}%\n${inv3}: ${porcentaje3}%`;
// }

// let aportesForm = document.getElementById("aportesForm");
// aportesForm.addEventListener("submit", calcularAportes);

function capturarAportes() {
  let inv1 = document.getElementById("inv1").value;
  let monto1 = parseInt(document.getElementById("monto1").value);
  let inv2 = document.getElementById("inv2").value;
  let monto2 = parseInt(document.getElementById("monto2").value);
  let inv3 = document.getElementById("inv3").value;
  let monto3 = parseInt(document.getElementById("monto3").value);

  if (!inv1 || !inv2 || !inv3 || !monto1 || !monto2 || !monto3) {
    alert("Debes ingresar datos en el campo");
    if (!inv1) {
      document.getElementById("inv1").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    } else if (!inv2) {
      document.getElementById("inv2").focus();
    }
  } else {
    //Calcular total y porcentajes
    let total = monto1 + monto2 + monto3;
    let porcentaje1 = ((monto1 / total) * 100).toFixed(2);
    let porcentaje2 = ((monto2 / total) * 100).toFixed(2);
    let porcentaje3 = ((monto3 / total) * 100).toFixed(2);
    let aportesMsg = document.getElementById("aportesMsg");
    aportesMsg.textContent = `El monto total invertido es $${total}\n${inv1} ($${monto1}): ${porcentaje1}%\n${inv2} ($${monto2}): ${porcentaje2}%\n${inv3} ($${monto3}): ${porcentaje3}%`;

    //Limpiar datos
    document.getElementById("inv1").value = "";
    document.getElementById("inv2").value = "";
    document.getElementById("inv3").value = "";
    document.getElementById("monto1").value = "";
    document.getElementById("monto2").value = "";
    document.getElementById("monto3").value = "";
    document.getElementById("inv1").focus();
  }
}

// /* 1) Realizá un programa que permita al usuario ingresar su nombre. La computadora debe emitir una
// salida con un mensaje de bienvenida que incluya el nombre ingresado. */
// let name = prompt("Ingresa tu nombre: ");
// console.log(`Te damos la bienvenida, ${name}`);

// /* 2) Realizá un programa que permita al usuario ingresar un número entero. La computadora debe
// informar el número opuesto1 y el número inverso2 del ingresado. */
// let int = parseInt(prompt("Ingresa un número entero: "));
// console.log(`El opuesto de ${int} es ${int * -1} y el inverso es ${1 / int}`);

// /* 3) Realizá un programa que permita al usuario ingresar 3 notas pertenecientes a tres trimestres
// distintos para cierto alumno. La computadora debe mostrar la nota promedio. */
// let trim1 = parseInt(prompt("Ingresa la nota del 1º Trimestre: "));
// let trim2 = parseInt(prompt("Ingresa la nota del 2º Trimestre: "));
// let trim3 = parseInt(prompt("Ingresa la nota del 3º Trimestre: "));
// console.log(`El promedio es ${parseFloat((trim1 + trim2 + trim3) / 3).toFixed(2)}`)

// /* 4) Realizá un programa que permita al usuario ingresar el valor salarial de una hora de trabajo y la
// cantidad de horas trabajadas por día. La computadora debe mostrar el valor del salario semanal,
// asumiendo que trabaja todos los días hábiles y media jornada los sábados. */
// let hourSalary = parseInt(prompt("Ingresa tu salario x hora: "));
// let daylyWorkedHours = parseFloat(prompt("Ingresa la cantidad de horas trabajadas x día: "));
// let weeklySalary = hourSalary * daylyWorkedHours * 5.5;
// console.log(`Tu salario semanal es de ${weeklySalary}`);

// /* 5) Realizá un programa que permita al usuario ingresar valores del mismo tipo para las variables a
// y b. Una vez cargadas, la computadora debe mostrar ambas variables por pantalla, intercambiar
// entre sí sus valores (que lo cargado en a quede en b, y viceversa), y volver a mostrarlas. */
// let a = parseInt(prompt("Ingresa el valor de 'a': "));
// let b = parseInt(prompt("Ingresa el valor de 'b': "));
// console.log(`Valor de a = ${a} / valor de b = ${b}`);
// [a, b] = [b, a];
// console.log(`Valor de a = ${a} / valor de b = ${b}`);

// /* 6) Realizá un programa que permita al usuario ingresar el valor unitario de cierto artículo y la
// cantidad de artículos vendidos por un vendedor, del cual se sabe que gana un sueldo fijo de $14000
// más el 16% del monto total vendido. Con tales datos, la computadora debe calcular el sueldo
// mensual del vendedor y mostrarlo. */
// let salary = 14000;
// let commision = 16;
// let itemPrice = parseFloat(prompt("Ingresa el precio del art. vendido: "));
// let soldItems = parseInt(prompt("Ingresa la cantidad de artículos vendidos: "));
// let totalSalary = salary + (itemPrice * soldItems) * (commision*0.01);
// console.log(`El salario total con la comisión de venta es de ${parseFloat((totalSalary).toFixed(3))}`);

// /* 7) Realizá un programa que permita al usuario ingresar el ancho y el largo de un terreno en metros
// y el valor del metro cuadrado de tierra. La computadora debe mostrar el valor total del terreno y la
// cantidad de metros de alambre que serían necesarios para cercarlo completamente en tres pasadas. */
// let width = parseInt(prompt("Ingresar ancho del terreno (m): "));
// let height = parseInt(prompt("Ingresar largo del terreno (m): "));
// let m2Price = parseInt(prompt("Ingresar precio x m2 de terreno ($): "));
// let totalPrice = width * height * m2Price;
// let wireAmount = (width + height) * 2 * 3;
// console.log(`El precio total del Terreno es de $ ${totalPrice} y se necesitan ${wireAmount} m de alambre para 3 pasadas de cerco`);

// /* 8) Realizá un programa que permita al usuario ingresar dos números enteros. La computadora debe
// mostrar los resultados de las 4 operaciones matemáticas básicas con tales números. */
// let n1 = parseInt(prompt("Ingresa un valor entero para n1: "));
// let n2 = parseInt(prompt("Ingresa un valor entero para n2: "));
// console.log(`a + b = ${n1 + n2}`);
// console.log(`a - b = ${n1 - n2}`);
// console.log(`a - b = ${n1 * n2}`);
// console.log(`a - b = ${n1 / n2}`);

// /* 9) Realizá un programa que permita al usuario ingresar dos números enteros, que representan las
// medidas en grados de dos ángulos interiores de cierto triángulo. La computadora debe mostrar el
// valor en grados del ángulo restante. */
// let angA = parseInt(prompt("Ingresa 1º Angulo de un tríángulo: "));
// let angB = parseInt(prompt("Ingresa 2º Angulo de un tríángulo: "));
// let angC = 180 - (angA + angB);
// console.log(`El angulo restante del triángulo mide ${angC}º`);

// /* 10) Realizá un programa que permita al usuario ingresar los nombres de tres inversores junto al
// capital invertido por cada uno. La computadora debe informar qué porcentaje del total aportó cada
// uno y cuál es el monto del total aportado entre los tres. */
// let inversor1 = prompt("Ingresar nombre 1º inversor: ");
// let monto1 = parseInt(prompt(`Ingresar monto invertido por ${inversor1}`));
// let inversor2 = prompt("Ingresar nombre 2º inversor: ");
// let monto2 = parseInt(prompt(`Ingresar monto invertido por ${inversor2}`));
// let inversor3 = prompt("Ingresar nombre 3º inversor: ");
// let monto3 = parseInt(prompt(`Ingresar monto invertido por ${inversor3}`));

// let inversionTotal = monto1 + monto2 + monto3;
// let perc1 = parseFloat(monto1/inversionTotal*100).toFixed(2);
// let perc2 = parseFloat(monto2/inversionTotal*100).toFixed(2);
// let perc3 = parseFloat(monto3/inversionTotal*100).toFixed(2);

// console.log(`El monto total invertido por ${inversor1}, ${inversor2} y ${inversor3} es de ${inversionTotal}`);
// console.log(`${inversor1} aportó el ${perc1}% del capital total`);
// console.log(`${inversor2} aportó el ${perc2}% del capital total`);
// console.log(`${inversor3} aportó el ${perc3}% del capital total`);