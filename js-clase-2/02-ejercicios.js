// Ejercicio 1
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

// Ejercicio 2
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

// Ejercicio 3
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

// Ejercicio 4
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

// Ejercicio 5
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

// Ejercicio 6
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
    const aporteSindicato = (edadEmpleado > 30) ? aporte : (aporte + incrementoEdad);

    document.getElementById("sindicatoMsg").innerHTML = `Con ${edadEmpleado} años y un sueldo de $${sueldoEmpleado}<br>aportas al sindicato $${aporteSindicato.toFixed(2)}`;
    document.getElementById("form6").reset();
    document.getElementById("edadEmpleado").value = "";
}

// Ejercicio 7
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
    //Usamos función de comparación para ordenar los número en el array
    const numerosOrdenados = [num1, num2, num3].sort(function (a, b) {
        return a - b;
    });

    ordenadosMsg.innerHTML = `[${num1},${num2},${num3}] en orden ascendente: [${numerosOrdenados}]`;
    document.getElementById("form7").reset();
    document.getElementById("num1").focus();
}

// Ejercicio 8
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
    document.getElementById("form8").reset();
    document.getElementById("div1").focus();
}

// Ejercicio 9
function capturarTriangulo() {
    const ladoA = parseInt(document.getElementById("ladoA").value);
    const ladoB = parseInt(document.getElementById("ladoB").value);
    const ladoC = parseInt(document.getElementById("ladoC").value);

    if ([ladoA, ladoB, ladoC].some(lado => isNaN(lado) || lado < 1)) {
        alert("Ingresar valores válidos para los lados del triángulo");
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
    if ((ladoA <= ladoB + ladoC) && (ladoB <= ladoA + ladoC) && (ladoC <= ladoA + ladoB)) {
        if (ladoA === ladoB && ladoB === ladoC) {
            trianguloValido = "Es un triángulo EQUILATERO.";
        } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
            trianguloValido = "Es un triángulo ISOSCELES.";
        } else {
            trianguloValido = "Es un triángulo ESCALENO."
        }
    } else {
        trianguloValido = "NO es un triángulo válido.";
    }

    document.getElementById("trianguloValidoMsg").innerHTML = trianguloValido;
    document.getElementById("form9").reset();
    document.getElementById("ladoA").focus();
}

// Ejercicio 10
function capturarMes() {
    const mes = parseInt(document.getElementById("mes").value);

    if (mes < 1 || mes > 12 || isNaN(mes) || !isFinite(mes)) {
        alert("Debes ingresar un númer de mes de 1 a 12");
        document.getElementById("mes").focus();
        return;
    }
    //Se crea objeto
    const NOMBRE_MES = {
        1: "Enero",
        2: "Febrero",
        3: "Marzo",
        4: "Abril",
        5: "Mayo",
        6: "Junio",
        7: "Julio",
        8: "Agosto",
        9: "Septiembre",
        10: "Octubre",
        11: "Noviembre",
        12: "Diciembre"
    }

    const nombreMes = NOMBRE_MES[mes] ? NOMBRE_MES[mes].toUpperCase() : NOMBRE_MES_DEFAULT;

    mesMsg.innerHTML = `Mes '${mes}' corresponde a ${nombreMes}`;
    document.getElementById("form10").reset();
    document.getElementById("mes").focus();
}

// Ejercicio 11
function capturarRomano() {
    const romano = document.querySelector("#romano").value;

    if (romano === "") {
        alert("Ingresar un dato válido!");
        return;
    }

    const NUMEROS_ROMANOS = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    const numeroDecimal = NUMEROS_ROMANOS[romano.toUpperCase()];
    const numeroDecimalMsg = numeroDecimal ? `${romano.toUpperCase()} equivale al número ${numeroDecimal}` : "No es un número romano válido";

    document.getElementById("numeroDecimalMsg").innerHTML = numeroDecimalMsg;
    document.getElementById("form11").reset();
    document.getElementById("romano").focus();
}

// Ejercicio 12
function capturarFecha(){
const fechaActual = new Date();
const diaNac = parseInt(document.getElementById("diaNac").value);
const mesNac = parseInt(document.getElementById("mesNac").value);
console.log(diaNac, mesNac);

const signosZodiaco = [
'Aries',
'Tauro',
'Géminis',
'Cáncer',
'Leo',
'Virgo',
'Libra',
'Escorpio',
'Sagitario',
'Capricornio',
'Acuario',
'Piscis'
];

const tuSigno = (mesNac === 3 && diaNac >= 21) || (mesNac === 4 && diaNac <=19) ? signosZodiaco[0] :
    (mesNac === 4 && diaNac >= 20) || (mesNac === 5 && diaNac <= 20) ? signosZodiaco[1] :
    (mesNac === 5 && diaNac >= 21) || (mesNac === 6 && diaNac <= 20) ? signosZodiaco[2] :
    (mesNac === 6 && diaNac >= 21) || (mesNac === 7 && diaNac <= 22) ? signosZodiaco[3] :
    (mesNac === 7 && diaNac >= 23) || (mesNac === 8 && diaNac <= 22) ? signosZodiaco[4] :
    (mesNac === 8 && diaNac >= 23) || (mesNac === 9 && diaNac <= 22) ? signosZodiaco[5] :
    (mesNac === 9 && diaNac >= 23) || (mesNac === 10 && diaNac <= 22) ? signosZodiaco[6] :
    (mesNac === 10 && diaNac >= 23) || (mesNac === 11 && diaNac <= 21) ? signosZodiaco[7] :
    (mesNac === 11 && diaNac >= 22) || (mesNac === 12 && diaNac <= 21) ? signosZodiaco[8] :
    (mesNac === 12 && diaNac >= 22) || (mesNac === 1 && diaNac <= 19) ? signosZodiaco[9] :
    (mesNac === 1 && diaNac >= 20) || (mesNac === 2 && diaNac <= 18) ? signosZodiaco[10] :
    (mesNac === 2 && diaNac >= 19) || (mesNac === 3 && diaNac <= 20) ? signosZodiaco[11] :
    "...";


const signoMsg = document.getElementById("signoMsg");
signoMsg.textContent = `${diaNac}/${mesNac} - Tu signo es: ${tuSigno}`;
document.querySelector("#form12").reset();
document.querySelector("#diaNac").focus();
}