//Función COPIAR CODIGO
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
// Función Split Cadena de caracteres
function splitCadena(inputCadena, ignorarEsp) {
  // Separar los caracteres o las palabras dependiendo de la respuesta del usuario
  let arrayCadena;
  if (ignorarEsp === "S" || ignorarEsp === "") {
    // Eliminar espacios y separar caracteres con coma
    arrayCadena = inputCadena.replace(/\s+/g, "").split("");//'\s+/g' busca cualquier conjunto de uno o más espacios en blanco
    arrayCadena = arrayCadena.join("·").toUpperCase();
  } else {
    // Separar caracteres con espacios
    arrayCadena = inputCadena.split(" ");
    arrayCadena = arrayCadena.join(" ");
  }
  return arrayCadena;
}
// --------------------------------------------------------------------------------
// Función Split
function splitCadenaNum(inputCadenaNum, limiteNum) {
  let arrayCadenaNum = inputCadenaNum.split(",");
  arrayCadenaNum = arrayCadenaNum.map(num => parseInt(num.trim()));
  if (limiteNum && arrayCadenaNum.length > limiteNum) {
    arrayCadenaNum.length = limiteNum;
  }
  return arrayCadenaNum;
}
// ----------------------------------------------------------------------------------


// EJERCICIO 1 - Crea un objeto llamado "persona" con las propiedades "nombre", "email" y "ciudad"

// function generarEstiloParrafo() {
//   let estilo = `<span style='margin-top: .5rem;
//                 width: auto;
//                 font-weight: normal;
//                 padding: 1rem 0 0;
//                 color: black;
//                 border-top:1px dotted black;
//                 border-bottom:1px dotted black'>`;
//   return estilo;
// }

// const form1 = document.getElementById("form1");
// const parrafo = document.getElementById("warnings");
// const resultadosAnteriores = [];

// form1.addEventListener("submit", e => {
//   e.preventDefault();
// });

// function capturar1() {
//   const nombre = document.getElementById("nombre");
//   const email = document.getElementById("email");
//   const ciudad = document.getElementById("ciudad");
//   let warnings = "";
//   let entrar = false;
//   let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

//   if (nombre.value.length < 3) {
//     warnings += `El nombre no es válido <br>`;
//     entrar = true;
//   }
//   if (!regexEmail.test(email.value)) {
//     warnings += `El email no es válido <br>`;
//     entrar = true;
//   }
//   if (ciudad.value.trim().length < 2) {
//     warnings += `La ciudad no es válida <br>`;
//     entrar = true;
//   }

//   if (entrar) {
//     parrafo.innerHTML += warnings;
//   } else {
//     const id = Date.now().toString(); // Identificación única para cada resultado
//     const nuevoResultado = {
//       id: id,
//       html: `${generarEstiloParrafo()}<div>Hola ${nombre.value} de '${ciudad.value}', (${email.value}) <button class="btn-icon" style="border:none; background-color: transparent; color:crimson; cursor:pointer" onclick="eliminarResultado('${id}')"><i class="fas fa-trash"></i></button></div><br>`
//     };
//     resultadosAnteriores.push(nuevoResultado);
//     mostrarResultadosForm();
//   }

//   form1.reset();
//   nombre.focus();
// }

// function mostrarResultadosForm() {
//   const resultadosHTML = resultadosAnteriores.map(resultado => resultado.html).join("");
//   parrafo.innerHTML = resultadosHTML;
// }

// function eliminarResultado(id) {
//   const index = resultadosAnteriores.findIndex(resultado => resultado.id === id);
//   if (index !== -1) {
//     resultadosAnteriores.splice(index, 1);
//     mostrarResultadosForm();
//   }
// }

// document.getElementById("btn1").addEventListener("click", capturar1);

const form1 = document.getElementById("form1");
const resultado = document.getElementById("resultado1");
const resultadosAnteriores = [];

form1.addEventListener("submit", e => {
  e.preventDefault();
});

function capturar1() {
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const ciudad = document.getElementById("ciudad");

  if (form1.checkValidity()) {
    const id = Date.now().toString(); // Identificación única para cada resultado
    const nuevoResultado = {
      id: id,
      html: `<div style='width: auto; font-weight: normal; padding: 0 0 .5rem 0; color: black; border-bottom:1px dotted black'><span style='font-weight:bold'>${nombre.value.toUpperCase()}</span> de '${ciudad.value.toUpperCase()}', (${email.value.toLowerCase()}) <button class="btn-icon" style="border:none; background-color: transparent; color:crimson; cursor:pointer" onclick="eliminarResultado('${id}')"><i class="fas fa-trash"></i></button></div><br>`
    };
    resultadosAnteriores.push(nuevoResultado);
    mostrarResultadosForm();
    form1.reset();
  } else {
    form1.reportValidity();
  }
}

function mostrarResultadosForm() {
  const resultadosHTML = resultadosAnteriores.map(resultado => resultado.html).join("");
  resultado.innerHTML = resultadosHTML;
}

function eliminarResultado(id) {
  const index = resultadosAnteriores.findIndex(resultado => resultado.id === id);
  if (index !== -1) {
    resultadosAnteriores.splice(index, 1);
    mostrarResultadosForm();
  }
}

document.getElementById("btn1").addEventListener("click", capturar1);