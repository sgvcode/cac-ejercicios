function capturarSecuencia() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  const seriesMsg = document.getElementById('seriesMsg');

  let serieI = [];
  let serieE = [];

  if (isNaN(n1) || isNaN(n2) || n1 < 1 || n1 > 100 || n2 < 1 || n2 > 100 || n2 < n1) {
    alert("Ingresar dos números enteros num1 y num2. num2 siempre deberá ser mayor o igual a num1.");
    if (isNaN(n1) || n1 < 1 || n1 > 100) {
      document.getElementById("n1").focus();
    } else {
      document.getElementById("n2").focus();
    }
  } else {
    for (let i = n1; i <= n2; i++) {
      serieI.push(i);
    }

    for (let i = n1 + 1; i < n2; i++) {
      serieE.push(i);
    }

    seriesMsg.innerHTML = `Inclusivo e/ ${n1} y ${n2}: "${serieI}"<br>
    Exclusivo e/ ${n1} y ${n2}: "${serieE}"`;
    document.getElementById("form2").reset();
    document.getElementById("n1").focus();
  }
}

// const form = document.querySelector('form');
// const serieMsg = document.getElementById('seriesMsg');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevenir que la página se recargue

//   let n1 = parseInt(form.elements['n1'].value);
//   let n2 = parseInt(form.elements['n2'].value);

//   let serie1 = [];
//   let serie2 = [];

//   for (let i = n1; i <= n2; i++){
//     serie1.push(i);
//   }
//   for (let i = n1+1; i <= n2-1; i++){
//     serie2.push(i);
//   }

//   seriesMsg.innerHTML = `Secuencia inclusiva entre ${n1} y ${n2}: "${serie1}"<br>
//                         Secuencia exclusiva entre ${n1} y ${n2}: "${serie2}"`;
// });