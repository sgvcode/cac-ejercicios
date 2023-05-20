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

// EJERCICIO 1 - Crea un objeto llamado "persona" con las propiedades "nombre", "email" y "ciudad"
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


// Ejercicio 2 - Comprar ticket

document.getElementById("formTicket").addEventListener("submit", e => {
  e.preventDefault();

  let cantidadTicket = parseInt(document.getElementById("cantidadTicket").value);
  let categoriaTicket = document.getElementById("categoriaTicket").value;
  let descuento = 0;

  // Descuento
  if (categoriaTicket === "Estudiante") {
    descuento = 0.8;
  } else if (categoriaTicket === "Trainee") {
    descuento = 0.5;
  } else {
    descuento = 0.15;
  }

  let valorTicket = 200;
  let total = cantidadTicket * valorTicket * (1 - descuento);

  let totalPagar = document.getElementById("totalPagar");
  totalPagar.innerHTML = `Total a pagar $${total.toFixed(0)}`
});

document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('formTicket').reset(); // Restablece los campos del formulario
  document.getElementById('totalPagar').innerHTML = 'Total a pagar: $'; // Limpia el párrafo de salida de resultados
});