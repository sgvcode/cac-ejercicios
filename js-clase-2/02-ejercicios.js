//Ejercicio 1
function capturarEsPar() {
    const numero = parseInt(document.getElementById("numerosTipo").value);
    if (isNaN(numero)) {
        alert("Debes ingresar un número entero");
        document.getElementById("numerosTipo").focus();
        return;
    }
    const mensaje = (numero === 0) ? "Cero es un número Neutro" : ((numero % 2 === 0) ? `${numero} es un número PAR` : `${numero} es un número IMPAR`);
    document.getElementById("numeroEsParMsg").textContent = mensaje;
    document.getElementById("numerosTipo").value = "";
}

//Ejercicio 2
function capturarAsientos() {
    const asientos = parseInt(document.getElementById("asientos").value);
    const inscriptos = parseInt(document.getElementById("inscriptos").value);

    if (isNaN(asientos) || isNaN(inscriptos)) {
        alert("Debes ingresar un dato válido");
        if (isNaN(asientos)) {
            document.getElementById("asientos").focus();
        } else {
            document.getElementById("inscriptos").focus();
        }
        return;
    }

    const mensajeAsiento = (asientos >= inscriptos) ? `Hay ${asientos - inscriptos} asientos disponibles` : `Para ${inscriptos} inscriptos, faltan ${inscriptos - asientos} asientos`;
    document.getElementById("asientosMsg").textContent = mensajeAsiento;
    document.getElementById("form2").reset();
    document.getElementById("asientos").focus();
}

//Ejercicio 3
function capturarMayor() {
    const n1 = parseInt(document.getElementById("n1").value);
    const n2 = parseInt(document.getElementById("n2").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Debes ingresar un número válido");
        if (isNaN(n1)) {
            document.getElementById("n1").focus();
        } else {
            document.getElementById("n2").focus();
        }
        return;
    }
    const mayorN = (n1 > n2) ? `${n1} es mayor que ${n2}` : ((n1 < n2) ? `${n2} es mayor que ${n1}` : "Ambos números son iguales");
    document.getElementById("mayorMsg").textContent = mayorN;
    document.getElementById("form3").reset();
}

//Ejercicio 4
function capturarMayor3() {
    const n1 = parseInt(document.getElementById("n11").value);
    const n2 = parseInt(document.getElementById("n22").value);
    const n3 = parseInt(document.getElementById("n33").value);
    let mayorN = n1;

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Ingresar un número entero válido");
        if (isNaN(n1)) {
            document.getElementById("n11").focus();
        } else if (isNaN(n2)) {
            document.getElementById("n22").focus();
        } else {
            document.getElementById("n33").focus();
        }
        return;
    }
    const mayorN3 = (n2 > mayorN) ? ((n3 > n2) ? `El mayor es ${n3}` : `El mayor es ${n2}`) : ((n3 > mayorN) ? `El mayor es ${n3}` : (n1 === n2 && n2 === n3) ? "Los tres números son iguales" : `El mayor es ${n1}`);
    document.getElementById("mayor3Msg").textContent = `${mayorN3} (entre ${n1}, ${n2} y ${n3})`;
    document.getElementById("form4").reset()
    document.getElementById("n11").focus();
}

//Ejercicio 5
function capturarJubilacion() {
    const edad = parseInt(document.getElementById("edad").value);
    const genero = document.getElementById("genero").value.toUpperCase();

    if (edad < 1 || edad > 120 || isNaN(edad)) {
        alert("Ingresa tu edad dentro del rango [1 - 120]");
        document.getElementById("edad").focus();
        return;
    }

    if (genero !== "M" && genero !== "F") {
        alert("Género inexistente");
        document.getElementById("genero").focus();
        return;
    }

    const jubilados = ((genero === "M" && edad >= 65) || (genero === "F" && edad >= 60)) ? `Puedes jubilarte.` : `No puedes jubilarte.`

    document.getElementById("jubilacionMsg").textContent = `[${genero}/${edad} años] ${jubilados}`;
    document.getElementById("form5").reset();
    document.getElementById("edad").focus();
}

//Ejercicio 6
function capturarSindicato() {
    const edadEmpleado = parseInt(document.getElementById("edadEmpleado").value);
    const sueldoEmpleado = parseInt(document.getElementById("sueldoEmpleado").value);
    const descuento = [0.007, 0.014, 0.021, 0.028];

    if (isNaN(edadEmpleado) || isNaN(sueldoEmpleado) || !isFinite(edadEmpleado)) {
        alert("Ingresar un dato válido")
        if (isNaN(edadEmpleado)) {
            document.getElementById("edadEmpleado").focus();
        } else {
            document.getElementById("sueldoEmpleado").focus();
        }
        return;
    }

    if (sueldoEmpleado < 20000) {
        aporte = sueldoEmpleado * descuento[0];
    } else if (sueldoEmpleado >= 20000 && sueldoEmpleado <= 29999) {
        aporte = sueldoEmpleado * descuento[1];
    } else if (sueldoEmpleado >= 30000 && sueldoEmpleado <= 39999) {
        aporte = sueldoEmpleado * descuento[2];
    } else {
        aporte = sueldoEmpleado * descuento[3];
    }

    const incrementoEdad = aporte * 0.3;
    const aporteSindicato = (edadEmpleado > 30) ? aporte : (aporte += incrementoEdad);

    document.getElementById("sindicatoMsg").innerHTML = `Con ${edadEmpleado} años y un sueldo de $${sueldoEmpleado}<br>aportas al sindicato $${aporteSindicato.toFixed(2)}`;
    document.getElementById("form6").reset();
    document.getElementById("edadEmpleado").value = "";
}

//Ejercicio 7
function capturarOrden() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const num3 = parseInt(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || !isFinite(num1)) {
        alert("Debes ingresar datos válidos");
        if (isNaN(num1)) {
            document.getElementById("num1").focus();
        } else if (isNaN(num2)) {
            document.getElementById("num2").focus();
        } else {
            document.getElementById("num3").focus();
        }
        return;
    }

    const numerosOrdenados = [num1, num2, num3].sort(function (a, b) {
        return a - b;
    });

    ordenadosMsg.innerHTML = `[${num1},${num2},${num3}] en orden ascendente: [${numerosOrdenados}]`;
    document.getElementById("form7").reset();
    document.getElementById("num1").focus();
}

//Ejercicio 8
function capturarMayorDivisible() {
    const div1 = parseInt(document.getElementById("div1").value);
    const div2 = parseInt(document.getElementById("div2").value);

    if (isNaN(div1) || isNaN(div2) || !isFinite(div1)) {
        alert("Debes ingresar un número válido");
        if (isNaN(div1)) {
            document.getElementById("div1").focus();
        } else {
            document.getElementById("div2").focus();
        }
        return;
    }

    const mayor = [div1, div2].sort(function (a, b) {
        return a - b;
    })

    console.log(mayor)

    const esDivisible = (mayor[1] % mayor[0] === 0) ? `${mayor[1]} es divisible por ${mayor[0]}` : `${mayor[1]} NO es divisible por ${mayor[0]}`;

    mayorDivisibleMsg.innerHTML = `${esDivisible}`;
}

//Ejercicio 9
function capturarTriangulo() {
    const ladoA = parseInt(document.getElementById("ladoA").value);
    const ladoB = parseInt(document.getElementById("ladoB").value);
    const ladoC = parseInt(document.getElementById("ladoC").value);

    if ([ladoA, ladoB, ladoC].some(lado => isNaN(lado) || lado < 1)) {
        alert("Ingresar un lado mayor que 1");
        if (isNaN(ladoA)) {
            document.getElementById("ladoA").focus();
        } else if (isNaN(ladoB)) {
            document.getElementById("ladoB").focus();
        } else {
            document.getElementById("ladoC").focus();
        }
        return;
    }

    let trianguloValido = "";
    if (ladoA === ladoB && ladoB === ladoC) {
        trianguloValido = "Es válido y es un triángulo EQUILATERO.";
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
        trianguloValido = "Es válido y es un triángulo ESCALENO.";
    } else {
        if ((ladoA < ladoB + ladoC && ladoB === ladoC) || (ladoB < ladoA + ladoC && ladoA === ladoC) || (ladoC < ladoA + ladoB && ladoA === ladoB)) {
            trianguloValido = "Es válido y es un triángulo ISOSCELES.";
        } else {
            trianguloValido = "No es válido un triángulo.";
        }
    }

    document.getElementById("trianguloValidoMsg").innerHTML = trianguloValido;
}
