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

// Ejercicio 1

function capturar1() {
  let numeros = [];
  let suma = 0;

  for (let i = 0; i < 10; i++) {
    numeros.push(parseInt(prompt(`Ingrese el número ${i + 1}:`)));
  }

  isNaN(number)

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
  El promedio de los números ingresados es: ${promedio}<br>
  Los valores ingresados que superan el promedio son: ${mayoresAlPromedio.join(", ")}`;
}






