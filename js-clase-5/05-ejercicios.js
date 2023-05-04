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
// Función para detener ejecución con 'Esc'
function detenerConEsc() {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      // Cancelar la ejecución de la función actual
      throw new Error('La ejecución de la función fue cancelada por el usuario.');
    }
  });
}
// -------------------------------------------------------------------------
// Función Sumatoria
function sumatoria(numeros) {
  let acu = 0;
  for (const numero of numeros) {
    acu += numero;
  }
  return acu;
}
// Función Promedio
function promedio(numeros) {
  return (numeros.length == 0 ? 0 : sumatoria(numeros) / numeros.length);
}
// --------------------------------------------------------------------------
// Función Mostrar Mayores Que...
function mostrarMayoresQue(numeros, valorASuperar) {
  let mayores = [];
  for (const numero of numeros) {
    if (numero > valorASuperar) {
      mayores.push(numero);
    }
  }
  return mayores;
}
// --------------------------------------------------------------------------
// Función Valor Máximo
function valorMaximo(numeros) {
  return Math.max(...numeros);
}
// --------------------------------------------------------------------------
// FUNCION GLOBAL cargarArray(limite, consulta)
function cargarArray(limite, consulta) {
  let miArray = [];
  for (i = 0; i < limite; i++) {
    let elementos = "";
    while (elementos.length !== 1) {
      elementos = prompt(`${consulta} ${i + 1}: `);
      if (elementos === null) {
        throw new Error("Ejecución terminada por el usuario");
      }
    }
    miArray.push(elementos);
  }
  return miArray;
}

// ---------------------------------------------------------------------------
// FUNCION MOSTRAR RESULTADOS
function mostrarResultados(resultadoN) {
  return document.getElementById(resultadoN);
}
// ---------------------------------------------------------------------------
// FUNCION ESTILOS DE SALIDA RESULTADOS
function generarEstiloResultado() {
  let estilo = `<span style='margin-top: .5rem;width: auto;border-left:5px solid rgb(94, 150, 60);border-right:5px solid rgb(49, 54, 63);font-weight: normal;padding: .3rem 0;background-color: rgb(49, 54, 63); color: white'>`;
  return estilo;
}
// ---------------------------------------------------------------------------

// Ejercicio 1
function capturar1() {
  let numeros = [];
  let suma = 0;
  let resultado = mostrarResultados("resultado1");
  let detenerPrompt = detenerConEsc();


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

  resultado.innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}El promedio de los números ingresados es: <br>'${promedio}'<br>
  Los número que superan el promedio son: <br>'${mayoresAlPromedio.join(", ")}'</span>`;
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
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numerosM.push(Number(numero));
        continuar = false;
      }
    }
  }

  let ultimoNumero = ultimoElemento(numerosM);

  let multiplos = [];

  for (let i = 0; i < numerosM.length; i++) {
    let num = numerosM[i];
    if (esMultiplo(num, ultimoNumero) && !multiplos.includes(num)) {
      multiplos.push(num);
    }
  }

  document.getElementById("resultado2").innerHTML = `[${numerosM.join(", ")}]<br>${generarEstiloResultado()}Múltiplos de ${ultimoNumero} ingresados: '${multiplos.join(", ")}'</span>`;
}

// Ejercicio 3
function capturar3() {
  let numeros = [];
  let resultado = mostrarResultados("resultado3");

  for (let i = 0; i < 10; i++) {
    let continuar = true;

    while (continuar) {
      let numero = prompt(`Ingrese el número ${i + 1}:`);

      if (numero === null) {
        return;
      }

      if (numero === "" || isNaN(numero)) {
        continuar = confirm(`"${numero}" no es un número válido. ¿Desea ingresar otro número?`);
      } else {
        numeros.push(Number(numero));
        continuar = false;
      }
    }
  }

  let maximo = valorMaximo(numeros);
  let contador = numeros.filter(num => num === maximo).length;

  resultado.innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}El valor máximo ingresado es: '${maximo}'<br>Cantidad de veces ingresado: '${contador}'</span>`;
}


// Ejercicio 4
function capturar4() {
  let sumaPares = 0;
  let numeros = [];

  for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt(`Número ${i}: `));
    while (isNaN(numero)) {
      numero = parseInt(prompt(`No ingresaste un número, por favor ingresa el número ${i + 1} nuevamente:`));
    }
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

  document.getElementById("resultado4").innerHTML = `[${numeros.join(", ")}]<br>${generarEstiloResultado()}La suma de los números en posiciones pares es: '${sumaPares}'<br>Los números que se suman son: '${numerosSumados.join(", ")}'</span>`;
}


// Ejercicio 5
function capturar5() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = (mostrarResultados("resultado5"));

  function invertirArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${arrayInvertido.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 6
function capturar6() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado6");

  function rotarArrayDerecha(rotado) {
    rotado = [...rotado]; // crea una copia del arreglo para evitar que la salida de ambas funciones sean iguales y rotadas
    let ultimoElemento = rotado[rotado.length - 1];
    for (let i = rotado.length - 1; i >= 1; i--) {
      rotado[i] = rotado[i - 1];
    }
    rotado[0] = ultimoElemento;
    return rotado;
  }

  let miArray = cargarArray(limite, consulta);
  console.log(`Original: ${miArray}`);

  let arrayRotadoDerecha = rotarArrayDerecha(miArray);
  console.log(`Rotado: ${arrayRotadoDerecha}`);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${arrayRotadoDerecha.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 7
function capturar7() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado7");

  function invertirArray(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
      arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let arrayInvertido = invertirArray(miArray);
  console.log("Array invertido:", arrayInvertido);

  let palindromo = miArray.join("") === arrayInvertido.join("") ? "Si" : "No";

  resultado.innerHTML = `${generarEstiloResultado()}'${palindromo}'</span><br>${miArray.join("").toUpperCase()}<br>${generarEstiloResultado()}${arrayInvertido.join("").toUpperCase()}</span>`;
}

// Ejercicio 8
function capturar8() {
  let limite = 9;
  let consulta = "Ingresa caracter";
  let resultado = mostrarResultados("resultado8");

  function obtenerCaracteresUnicos(array) {
    let caracteresUnicos = [];
    for (let i = 0; i < array.length; i++) {
      if (!caracteresUnicos.includes(array[i])) {
        caracteresUnicos.push(array[i]);
      }
    }
    return caracteresUnicos;
  }

  let miArray = cargarArray(limite, consulta);
  console.log("Array original:", miArray);

  let caracteresUnicos = obtenerCaracteresUnicos(miArray);
  console.log("Caracteres únicos:", caracteresUnicos);

  resultado.innerHTML = `${miArray.join(" · ").toUpperCase()}<br>${generarEstiloResultado()}${caracteresUnicos.join(" · ").toUpperCase()}</span>`;
}

// Ejercicio 9
// Union de arrays
function capturar9Union() {
  setTimeout(function () {
    document.getElementById("union").style.display = "block";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);

  setTimeout(function () {
    let resultado = mostrarResultados("resultado9");

    function unionArray(array1, array2) {
      let union = [];
      for (let i = 0; i < array1.length; i++) {
        if (!union.includes(array1[i])) {
          union.push(array1[i]);
        }
      }
      for (let i = 0; i < array2.length; i++) {
        if (!union.includes(array2[i])) {
          union.push(array2[i]);
        }
      }
      return union.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let union = unionArray(array1, array2).toUpperCase();

    resultado.innerHTML = `La UNION de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>
    ${generarEstiloResultado()}${union}</span>`;
  }, 200);
}


// Interseccion de arrays
function capturar9Interseccion() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "block";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);


  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      let miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function interseccionArray(array1, array2) {
      let interseccion = [];
      for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) && !interseccion.includes(array1[i])) {
          interseccion.push(array1[i]);
        }
      }
      return interseccion.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let interseccion = interseccionArray(array1, array2).toUpperCase();

    resultado.innerHTML = `La INTERSECCION de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${interseccion}</span>`;
  }, 200);
}

// Diferencia de arrays
function capturar9Diferencia() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "block";
    document.getElementById("diferenciaSim").style.display = "none";
  }, 10);

  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      let miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function mostrarDiferencia(array1, array2) {
      let diferencia = [];
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
          diferencia.push(array1[i]);
        }
      }
      return diferencia.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let diferencia = mostrarDiferencia(array1, array2).toUpperCase();

    resultado.innerHTML = `La DIFERENCIA de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${diferencia}</span>`;
  }, 200);
}

// Diferencia Simétrica de arrays
function capturar9DiferenciaSim() {
  setTimeout(() => {
    document.getElementById("union").style.display = "none";
    document.getElementById("interseccion").style.display = "none";
    document.getElementById("diferencia").style.display = "none";
    document.getElementById("diferenciaSim").style.display = "block";
  }, 10);

  setTimeout(() => {
    let resultado = mostrarResultados("resultado9");

    function cargarArray(limite, consulta) {
      let miArray = [];
      for (i = 0; i < limite; i++) {
        let elementos = "";
        while (elementos.length !== 1) {
          elementos = prompt(`${consulta} ${i + 1}: `);
        }
        miArray.push(elementos);
      }
      return miArray;
    }

    function mostrarDiferenciaSimetrica(array1, array2) {
      let diferenciaSimetrica = [];
      for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
          diferenciaSimetrica.push(array1[i]);
        }
      }
      for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) {
          diferenciaSimetrica.push(array2[i]);
        }
      }
      return diferenciaSimetrica.join(" · ");
    }

    let limiteArray1 = NaN;
    let limiteArray2;

    while (isNaN(parseInt(limiteArray1))) {
      limiteArray1 = parseInt(prompt("Cantidad de caracteres 1º Vector?  "));
    }

    let array1 = cargarArray(limiteArray1, "Ingrese el caracter");

    while (isNaN(parseInt(limiteArray2))) {
      limiteArray2 = parseInt(prompt("Cantidad de caracteres 2º Vector? "));
    }

    let array2 = cargarArray(limiteArray2, "Ingrese el caracter");

    let diferenciaSimetrica = mostrarDiferenciaSimetrica(array1, array2).toUpperCase();

    resultado.innerHTML = `La DIFERENCIA SIMETRICA de '${array1.join("·").toUpperCase()}' y '${array2.join("·").toUpperCase()}':<br>${generarEstiloResultado()}${diferenciaSimetrica}</span>`;
  }, 200);
}