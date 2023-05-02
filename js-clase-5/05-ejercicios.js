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
// Función Sumatoria
function promedio(numeros) {
  return (numeros.length == 0 ? 0 : sumatoria(numeros) / numeros.length);
}

function sumatoria(numeros) {
  let acu = 0;
  for (const numero of numeros) {
    acu += numero;
  }
  return acu;
}

function mostrarMayoresQue(numeros, valorASuperar) {
  let mayores = [];
  for (const numero of numeros) {
    if (numero > valorASuperar) {
      mayores.push(numero);
    }
  }
  return mayores;
}

// Ejercicio 1

function capturar1() {
  let numeros = [];
  let suma = 0;

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (isNaN(numero) || numero === null) {
      numeros.push(0);
    } else {
      numeros.push(numero);
    }
  }

  // Suma, promedio y mayores al promedio
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }

  let promedio = suma / numeros.length;

  let mayoresAlPromedio = [];

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > promedio) {
      mayoresAlPromedio.push(numeros[i]);
    }
  }

  let resultado1 = document.getElementById("resultado1");
  resultado1.innerHTML = `[${numeros.join(", ")}]<br><br>
  El promedio de los números ingresados es: <br>'${promedio}'<br>
  Los número que superan el promedio son: <br>'${mayoresAlPromedio.join(", ")}'`;
  document.getElementById("form1").reset();
}

// Ejercicio 2

function capturar2() {

  function esMultiplo(num, divisor) {
    return num % divisor === 0;
  }

  function ultimoElemento(num) {
    return num[num.length - 1];
  }

  let numerosM = [];
  for (let i = 0; i < 10; i++) {
    let numM = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numerosM.push(numM);
  }

  let ultimoNumero = ultimoElemento(numerosM);

  let multiplos = [];

  for (let i = 0; i < numerosM.length; i++) {
    if (esMultiplo(numerosM[i], ultimoNumero)) {
      multiplos.push(numerosM[i]);
    }
  }

  document.getElementById("resultado2").innerHTML = `[${numerosM.join(", ")}]<br><br>Los múltiplos de ${ultimoNumero} son: '${multiplos.join(", ")}'`;
}

// Ejercicio 3
function valorMaximo(numeros) {
  return Math.max(...numeros);
}

function capturar3() {
  let numeros = [];

  for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    if (isNaN(numero) || numero === null) {
      numeros.push(0);
    } else {
      numeros.push(numero);
    }
  }

  let maximo = valorMaximo(numeros);
  let contador = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === maximo) {
      contador++;
    }
  }

  document.getElementById("resultado3").innerHTML = `El valor máximo ingresado es: '${maximo}'<br>Cantidad de veces ingresado: '${contador}'<br><br>[${numeros.join(", ")}]`;
}

// Ejercicio 4
function capturar4() {
  let sumaPares = 0;
  let numeros = [];

  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Número ${i}: `));
    numeros.push(numero);

    // Si la posición del número es par y no es 0, lo sumamos a la variable suma
    if (i % 2 === 0 && numero !== 0) {
      sumaPares += numero;
    }
  }

  let numerosSumados = [];
  for (let i = 1; i < numeros.length; i += 2) {
    let numero = numeros[i];
    if (numero !== 0) {
      numerosSumados.push(numero);
    }
  }

  document.getElementById("resultado4").innerHTML = `La suma de los números en posiciones pares es: '${sumaPares}'<br><br>
  Los números ingresados son:<br>[${numeros.join(", ")}]<br>
    Los números que se suman son: '${numerosSumados.join(", ")}'`;
}

// Ejercicio 5
function capturar5() {
  let limite = 9;
  let consulta = "Ingresa caracter";

  function cargarArray(limite) {
    let miArray = [];
    for (i = 0; i < limite; i++) {
      let elementos = prompt(`${consulta} ${i + 1}: `);
      miArray.push(elementos);
    }
    return miArray;
  }

  function invertirArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  document.getElementById("resultado5").innerHTML = `${miArray.join(" | ").toUpperCase()}<br>${arrayInvertido.join(" | ").toUpperCase()}`;
}

// Ejercicio 6
function capturar6() {
  let limite = 9;
  let consulta = "Ingresa caracter";

  function cargarArray(limite) {
    let miArray = [];
    for (i = 0; i < limite; i++) {
      let elementos = prompt(`${consulta} ${i + 1}: `);
      miArray.push(elementos);
    }
    return miArray;
  }

  function rotarArrayDerecha(rotado) {
    rotado = [...rotado]; // crea una copia del arreglo para evitar que la salida de ambas funciones sean iguales y rotadas
    let ultimoElemento = rotado[rotado.length - 1];
    for (let i = rotado.length - 1; i >= 1; i--) {
      rotado[i] = rotado[i - 1];
    }
    rotado[0] = ultimoElemento;
    return rotado;
  }

  let miArray = cargarArray(limite);
  console.log(`Original: ${miArray}`);

  let arrayRotadoDerecha = rotarArrayDerecha(miArray);
  console.log(`Rotado: ${arrayRotadoDerecha}`);

  document.getElementById("resultado6").innerHTML = `${miArray.join(" | ").toUpperCase()}<br>${arrayRotadoDerecha.join(" | ").toUpperCase()}`;
}

// Ejercicio 7
function capturar7() {
  let limite = 9;
  let consulta = "Ingresa caracter";

  function cargarArray(limite) {
    let miArray = [];
    for (i = 0; i < limite; i++) {
      let elementos = prompt(`${consulta} ${i + 1}: `);
      miArray.push(elementos);
    }
    return miArray;
  }

  function invertirArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  let palindromo = miArray.join("") === arrayInvertido.join("") ? "Si" : "No";

  document.getElementById("resultado7").innerHTML = `${miArray.join(" ").toUpperCase()}<br>${arrayInvertido.join(" ").toUpperCase()}<br>¿Es palíndromo? '${palindromo}'`;
}