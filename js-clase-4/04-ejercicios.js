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
  console.log(obtenerResto(dividendo, divisor));
  ejercicio2Msg.innerHTML = `Resto = ${obtenerResto(dividendo, divisor)}`;
  document.getElementById("form2").reset();
}