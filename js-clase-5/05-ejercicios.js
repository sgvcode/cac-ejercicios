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
  resultado1.innerHTML = `[${numeros.join(", ")}]<br>
  El promedio de los números ingresados es: <br>'${promedio}'<br>
  Los número que superan el promedio son: <br>${mayoresAlPromedio.join(", ")}`;
  document.getElementById("form1").reset();
}

// Ejercicio 2

function capturar2() {
  let numerosM = [];

  for (let i = 0; i < 10; i++) {
    let numM = prompt(`Ingrese el número ${i + 1}:`);
    if (numM === '') {
      numM = 0;
    }
    numerosM.push(parseInt(numM));
  }

  let ultimoNumero = numerosM[numerosM.length - 1];
  let multiplos = [];

  if (ultimoNumero === 0) {
    multiplos = ['-'];
  } else {
    numerosM.forEach(numM => {
      if (numM % ultimoNumero === 0) {
        multiplos.push(numM);
      }
    });
  }

  let resultado2 = document.getElementById("resultado2");
  resultado2.innerHTML = `[${numerosM}]<br>Los múltiplos de ${ultimoNumero} son: ${multiplos.join(", ")}`;
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

  let resultado3 = document.getElementById("resultado3");
  resultado3.innerHTML = `El valor máximo ingresado es: ${maximo}.<br>El número máximo aparece ${contador} veces en el array<br>[${numeros.join(", ")}]`;
}