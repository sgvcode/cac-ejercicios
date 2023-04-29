//Copiar código
function copyToClipboard(codigo) {
  var codigoText = document.querySelector(codigo + ' code').textContent;
  navigator.clipboard.writeText(codigoText)
    .then(() => {
      var boton = document.querySelector(codigo + ' .btn');
      boton.querySelector('.fa-copy').style.display = 'none';
      boton.querySelector('.fa-check').style.display = 'inline-block';
      setTimeout(function () {
        boton.querySelector('.fa-copy').style.display = 'inline-block';
        boton.querySelector('.fa-check').style.display = 'none';
      }, 2000);
    })
    .catch((error) => {
      console.error('Error al copiar al portapapeles:', error);
    });
}
//--------------------------------------------------------------------------

// Ejercicio 1 - esPar

function capturarEjercicio1() {
  let num = parseInt(document.getElementById("num").value);
  let ejercicio1Msg = document.getElementById("ejercicio1Msg");

  function esPar(num) {
    if (num % 2 === 0 && num !== 0) {
      return `'${num}' es Par`;
    } else if (num === 0 || isNaN(num)) {
      return "Ingresa un número válido";
    } else {
      return `'${num}' No es Par`;
    }
  }
  ejercicio1Msg.innerHTML = esPar(num);
  document.getElementById("form1").reset();
}

// Ejercicio 2 - Obtener el resto
function capturarEjercicio2() {
  let dividendo = parseInt(document.getElementById("dividendo").value);
  let divisor = parseInt(document.getElementById("divisor").value);
  let ejercicio2Msg = document.getElementById("ejercicio2Msg");

  function obtenerResto(dividendo, divisor) {
    let resto = dividendo;

    while (resto >= divisor) {
      resto -= divisor;
    }

    return resto;
  }
  ejercicio2Msg.innerHTML = `Resto = ${obtenerResto(dividendo, divisor)}`;
  document.getElementById("form2").reset();
}

// Ejercicio 3 - Imprimir Símbolo n veces
function capturarEjercicio3() {
  let caracter = document.getElementById("caracter").value;
  let n = document.getElementById("n").value;

  function imprimirSimbolo(caracter, n) {
    let resultado = "";
    for (let i = 0; i < n; i++) {
      resultado += caracter + " ";
    }
    return resultado
  }
  let ejercicio3Msg = document.getElementById("ejercicio3Msg");
  ejercicio3Msg.innerHTML = `${imprimirSimbolo(caracter, n)}<br>Se imprimieron ${n} '${caracter}'`;
  document.getElementById("form3").reset();
}

// Ejercicio 4 - Validar si es Vocal
function capturarEjercicio4() {
  let caracter1 = document.getElementById("caracter1").value;
  let ejercicio4Msg = document.getElementById("ejercicio4Msg");

  function esVocal(caracter1) {
    // Convertir el caracter a mayúsculas para contemplar ambos casos
    caracter1 = caracter1.toUpperCase();

    // Definir un array con las vocales en mayúsculas
    const vocales = ["A", "E", "I", "O", "U"];

    // Verificar si el caracter se encuentra en el array de vocales
    if (vocales.includes(caracter1)) {
      return `'${caracter1}' es Vocal`;
    } else {
      return `'${caracter1}' No es Vocal`;
    }
  }

  ejercicio4Msg.innerHTML = (esVocal(caracter1));
  document.getElementById("form4").reset();
}


// Ejercicio 5 Mostrar sucesión
function capturarEjercicio5() {
  let a = parseInt(document.getElementById("a").value);
  let b = parseInt(document.getElementById("b").value);
  let itera = parseInt(document.getElementById("itera").value);
  let ejercicio5Msg = document.getElementById("ejercicio5Msg");
  let sucesion = [];

  if (isNaN(itera) || itera <= 0) {
    itera = 1;
  }

  function mostrarSucesion() {
    if (isNaN(a) || isNaN(b)) {
      return "Debe ingresar un valor para 'a' y 'b'";
    } else if (b <= a) {
      return "El valor de 'b' debe ser mayor que el valor de 'a'";
    } else if (itera > 5) {
      return "El valor de 'itera' debe estar entre 1 y 5";
    } else {
      for (i = a; i <= b; i += itera) {
        sucesion.push(i);
      }
      return sucesion.join(", ");
    }
  }

  ejercicio5Msg.innerHTML = `Sucesión entre ${a} y ${b} => [${(mostrarSucesion())}]`;
  document.getElementById("form5").reset();
}

// Ejercicio 6 - Es múltiplo
function capturarEjercicio6() {
  let numeroM = parseInt(document.getElementById("numeroM").value);
  let multiplo = parseInt(document.getElementById("multiplo").value);

  function esMultiplo() {
    let result = numeroM / multiplo;
    if (numeroM % multiplo === 0) {
      return `${numeroM} es múltiplo de ${multiplo} (${result})`;
    } else {
      return `${numeroM} NO es múltiplo de ${multiplo}`;
    }
  }

  let ejercicio6Msg = document.getElementById("ejercicio6Msg");
  ejercicio6Msg.innerHTML = esMultiplo();
  document.getElementById("form6").reset();
}

/* Ejercicio 7 - Determinar cantidada de divisores de un número
    Se convierten los negativos a positivos y se muestran en valor absoluto
    Se añade en la salida la lista de los divisores
    Declaro la función fuera de mi función capturarEjercicio7() para poder llamarla en otros ejercicios
*/
function cantDivisores(numD) {
  if (numD < 0) {
    numD = numD * -1;
  }
  let divisores = [];
  for (let i = 1; i <= numD; i++) {
    if (numD % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

function capturarEjercicio7() {
  let numeroDiv = parseInt(document.getElementById("numeroDiv").value);
  let ejercicio7Msg = document.getElementById("ejercicio7Msg");

  ejercicio7Msg.innerHTML = `'${Math.abs(numeroDiv)}' tiene '${cantDivisores(numeroDiv).length}' divisores: '${cantDivisores(numeroDiv).join(", ")}'`;
  document.getElementById("form7").reset();
}

//Ejercicio 8 - Determinar si un número es Primo
//Declaro la función fuera de mi función capturarEjercicio8() para poder llamarla en otros ejercicios
function esPrimo(numPo) {
  if (cantDivisores(numPo).length === 2) {
    return `'${numPo}' es un número primo`;
  } else {
    return `'${numPo}' No es un número primo`;
  }
}

function capturarEjercicio8() {
  let numeroP = parseInt(document.getElementById("numeroP").value);
  let ejercicio8Msg = document.getElementById("ejercicio8Msg");

  ejercicio8Msg.innerHTML = esPrimo(numeroP);
  document.getElementById("form8").reset();
}

// Ejercicio 9 - Mostrar los primeros 'n' numeros primos
function esPrimoOk(numD) {
  if (cantDivisores(numD).length === 2) {
    return true;
  } else {
    return false;
  }
}

function mostrarNPrimos(n) {
  let cont = 1;
  let x = 2;
  let numerosPrimos = [];
  while (cont <= n) {
    if (esPrimoOk(x)) {
      numerosPrimos.push(x);
      cont++;
    }
    x++;
  }
  return numerosPrimos;
}

function capturarEjercicio9() {
  let numeroNP = parseInt(document.getElementById("numeroNP").value);
  let ejercicio9Msg = document.getElementById("ejercicio9Msg");

  ejercicio9Msg.innerHTML = `Los primeros '${numeroNP}' números primos son:<br> '${mostrarNPrimos(numeroNP).join(", ")}'`;
  document.getElementById("form9").reset();
}

// Ejercicio 10 - Validar si un número es número perfecto
function esNumeroPerfecto(perfecto) {
  let divisores = cantDivisores(perfecto);
  let suma = 0;
  for (let i = 0; i < divisores.length; i++) {
    suma += divisores[i];
  }
  if (suma === perfecto * 2) {
    return `'${perfecto}' es número perfecto`
  } else {
    return `'${perfecto}' NO es número perfecto`
  }
}

console.log(esNumeroPerfecto(6));

function capturarEjercicio10() {
  let perfecto = parseInt(document.getElementById("perfecto").value);
  let ejercicio10Msg = document.getElementById("ejercicio10Msg");

  ejercicio10Msg.innerHTML = `${esNumeroPerfecto(perfecto)}`
  document.getElementById("form10").reset();
}

// Ejercicio 11 - Salario total
function capturarEjercicio11() {
  let salario = 14000;
  let comision = 0.16;

  let cantidadVentas = parseInt(document.getElementById("cantidadVentas").value);
  let precioUnitario = parseFloat(document.getElementById("precioUnitario").value);

  function salarioTotal() {
    return salarioTotal = salario + (cantidadVentas * precioUnitario * comision);
  }

  let ejercicio11Msg = document.getElementById("ejercicio11Msg");
  ejercicio11Msg.innerHTML = `Tu salario total es de: '$${salarioTotal(cantidadVentas, precioUnitario)}'`;
  document.getElementById("form11").reset();
}



// Ejercicio 12 - Validar si está en edad de jubilarse
function capturarEjercicio12() {
  let tuEdad = parseInt(document.getElementById("tuEdad").value);
  let tuGenero = document.getElementById("tuGenero").value.toUpperCase();

  // Validar que tuGenero sea "F" o "M"
  if (tuGenero !== "F" && tuGenero !== "M") {
    alert("Por favor, ingrese F o M en el campo género.");
    document.getElementById("tuGenero").value = "";
    document.getElementById("tuGenero").focus();
    return;
  }

  function puedeJubilarse(tuEdad, tuGenero) {
    let jubilable = ((tuGenero === "M" && tuEdad >= 65) || (tuGenero === "F" && tuEdad >= 60)) ? `'${tuGenero}' / '${tuEdad} años': Podés jubilarte.` : `'${tuGenero}' / '${tuEdad} años': No podés jubilarte todavía.`
    return jubilable;
  }

  let ejercicio12Msg = document.getElementById("ejercicio12Msg");
  ejercicio12Msg.innerHTML = puedeJubilarse(tuEdad, tuGenero);
  document.getElementById("form12").reset();
}


// Ejercicio 13 - Ingreso de datos y monto unitario
function capturarEjercicio13() {
  function ingresarProducto() {
    let ventas = parseInt(prompt("Ingresa la CANTIDAD de productos VENDIDOS: "));
    let precio = parseFloat(prompt("Ingresa el PRECIO UNITARIO del producto vendido: "));
    return { ventas, precio };
  }

  let listaProductos = [];
  let ingresarMas = "S";

  while (ingresarMas === "S") {
    let producto = ingresarProducto();
    listaProductos.push(producto);
    ingresarMas = prompt("¿Deseás ingresar OTRO ARTICULO? [S/N]").toUpperCase();
    while (ingresarMas !== "S" && ingresarMas !== "N") {
      alert("Por favor, ingresa S o N.");
      ingresarMas = prompt("¿Deseás ingresar otro artículo? [S/N]").toUpperCase();
    }
  }

  let total = 0;
  let cantidadTotal = 0;
  let precioPromedio = 0;

  for (let i = 0; i < listaProductos.length; i++) {
    cantidadTotal += listaProductos[i].ventas;
    total += listaProductos[i].ventas * listaProductos[i].precio;
  }

  precioPromedio = total / cantidadTotal;

  let ejercicio13Msg = document.getElementById("ejercicio13Msg");
  ejercicio13Msg.innerHTML = `El monto total del ticket es: '$${total.toFixed(2)}'<br><br>
  Cantidad total de productos vendidos: '${cantidadTotal} unidades'<br>
  Precio promedio de los productos vendidos: '$${precioPromedio.toFixed(2)}'`;
}


