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

  function mostrarSucesion() {


    for (i = a; i <= b; i += itera) {
      sucesion.push(i);
    }
    return sucesion.join(", ");
  }
  ejercicio5Msg.innerHTML = `Sucesión entre ${a} y ${b} => [${(mostrarSucesion())}]`;
  document.getElementById("form5").reset();
}

// Ejercicio 6 - Es múltiplo
function capturarEjercicio6() {
  let numeroM = parseInt(document.getElementById("numeroM").value);
  let multiplo = parseInt(document.getElementById("multiplo").value);

  function esMultiplo() {
    if (numeroM % multiplo === 0) {
      return `${numeroM} es múltiplo de ${multiplo}`;
    } else {
      return `${numeroM} NO es múltiplo de ${multiplo}`
    }
  }

  let ejercicio6Msg = document.getElementById("ejercicio6Msg");
  ejercicio6Msg.innerHTML = esMultiplo();
  document.getElementById("form6").reset();
}