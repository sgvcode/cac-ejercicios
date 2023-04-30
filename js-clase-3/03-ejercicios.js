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

// Ejercicio 2
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
    }
}

// Ejercicio 3
function capturarTablaMultiplicar() {
    let multiplicando = parseInt(document.getElementById("multiplicando").value);
    let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let tabla = [];

    if (isNaN(multiplicando) || multiplicando < 1 | multiplicando > 10) {
        alert("Ingresa un número entre 1 y 10");
        document.getElementById("multiplicando").focus();
    } else {
        multiplicadores.forEach((multiplicador) => {
            let resultado = multiplicando * multiplicador;
            tabla.push(`${multiplicando} x ${multiplicador} = ${resultado}`);
        });

        let tablaMsg = document.getElementById("tablaMsg");
        tablaMsg.innerHTML = `TABLA del ${multiplicando}<br>${tabla.join(`<br>`)}`;
        document.getElementById("form3").reset();
    }
}

// Ejercicio 4
function capturarMultiplos() {
    let nNat = parseInt(document.getElementById("nNat").value);
    let multiplos = [];
    let i = 1;

    if (isNaN(nNat) || nNat > 100 || nNat < 1) {
        alert("Ingresa un dato válido");
        form.reset();
        document.getElementById("nNat").focus();
        return;
    }

    while (multiplos.length < nNat) {
        if (i % 3 === 0 && i % 5 !== 0) {
            multiplos.push(i);
        }
        i++;
    }

    let multiplosMsg = document.getElementById("multiplosMsg");
    multiplosMsg.innerHTML = `Los primeros ${nNat} múltiplos de 3, excepto los múltiplos de 5, son:<br>${multiplos.join(", ")}`;
    document.getElementById("form4").reset();
}

// Ejercicio 5 -------------------
function capturarEdades() {
    let edades = [];
    let cantEdadesOk = 0;
    const edadMinima = 18;
    const cantEdades = 5;

    for (let i = 1; i <= cantEdades; i++) {
        let inputEdad = document.getElementById("edad" + i);
        let edad = parseInt(inputEdad.value);
        edades.push(edad);

        if ((edad % 2 != 0) && (edad > edadMinima)) {
            cantEdadesOk++;
        }
    }

    const imparesSup18Msg = document.getElementById("imparesSup18Msg");
    imparesSup18Msg.textContent = `La cantidad de edades impares mayores de ${edadMinima} son ${cantEdadesOk}`;

    for (let i = 1; i <= cantEdades; i++) {
        document.getElementById("edad" + i).value = "";
    }
}

// Ejercicio 6 ---------------------
function calcularMonto() {
    let cant = document.getElementById("cant").value;
    let monto;
    let montoAcu = 0;
    let acumulados = [];

    for (i = 1; i <= cant; i++) {
        monto = parseInt(prompt(`Ingresar monto de la venta ${i}: `));
        montoAcu = montoAcu + monto;
        acumulados.push(monto);
    }
    let ventasMsg = document.getElementById("ventasMsg");
    ventasMsg.innerHTML = `El monto total por las ${cant} ventas es:<br> $${montoAcu}`;
    document.getElementById("form6").reset();
}

// Ejercicio 7

function calcularAlturaPromedio() {
    let cant1 = parseInt(document.getElementById("cant1").value);
    let alturas;
    let altAcu = 0;
    let alturasAcumuladas = [];

    for (i = 1; i <= cant1; i++) {
        alturas = parseFloat(prompt(`Altura de jugador ${i}: `));
        altAcu = altAcu + alturas;
        alturasAcumuladas.push(alturas);
    }

    let alturaPromedio = altAcu / cant1;
    console.log(`La estatura promedio de ${cant1} jugadores es ${alturaPromedio.toFixed(2)}m`);

    let alturaPromedioMsg = document.getElementById("alturaPromedioMsg");
    alturaPromedioMsg.innerHTML = `La estatura promedio de ${cant1} jugadores es ${alturaPromedio.toFixed(2)}m`;
    document.getElementById("form7").reset();
}

// Ejercicio 8
function capturarEnteros() {
    let cantInt = parseInt(document.getElementById("cantInt").value);
    let numeros = [];

    for (let i = 1; i <= cantInt; i++) {
        let num = parseInt(prompt(`Ingrese el número entero ${i}: `));
        numeros.push(num);
    }

    let maxNum = numeros[0];
    let maxPos = 1;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maxNum) {
            maxNum = numeros[i];
            maxPos = i + 1;
        }
    }

    let enterosMsg = document.getElementById("enterosMsg");
    enterosMsg.innerHTML = `El número mayor es ${maxNum} y apareció en la posición ${maxPos}.`;
    document.getElementById("form8").reset();
}

// Ejercicio 10
function validarNotas() {
    let notas = -1;

    while (notas > 10 || notas < 0) {
        notas = parseInt(prompt("Ingresa la nota del 1 al 10: "));
        if (notas < 0 && notas > 10) {
            alert("La nota no es válida. Ingresa una nota ");
        }
    }
    console.log(`La nota es ${notas}`);
    let validarNotaMsg = document.getElementById("validarNotaMsg");
    validarNotaMsg.innerHTML = `La nota es ${notas}`;
}

// Ejercicio 9
function capturarNatural() {
    let nNatural = parseInt(document.getElementById("nNatural").value);
    let factorial = 1;

    for (let i = 1; i <= nNatural; i++) {
        factorial *= i;
    }

    let factorialMsg = document.getElementById("factorialMsg");
    factorialMsg.innerHTML = `El factorial de ${nNatural} es ${factorial}`;
    document.getElementById("form9").reset();
}

// Ejercicio 11
function validarNotaN() {
    let notaN = -1;
    let validarNotaNMsg = document.getElementById("validarNotaNMsg");

    while (isNaN(notaN) || notaN <= 0 || notaN > 10 || notaN === 1 || notaN === 3) {
        notaN = parseInt(prompt("Ingresa una nota: "));
        if (notaN <= 0 || notaN > 10 || notaN === 1 || notaN === 3) {
            alert("Nota inválida, ingresa una nota: ");
        } else {
            // alert(`La nota es ${notaN}`);
            validarNotaNMsg.innerHTML = `La nota es ${notaN}`;
        }
    }
}

// Ejercicio 12
// Opción con while
function conWhile() {
    let opcion;
    let finalizarMsg = document.getElementById("finalizarMsg");

    do {
        opcion = prompt('¿Deseás continuar? [S/N]');
        if (!['S', 's', 'N', 'n'].includes(opcion)) {
            alert('Opción inválida. Ingresá S o N.');
        }
    } while (!['N', 'n'].includes(opcion));
    if (['S', 's'].includes(opcion)) {
        opcion = prompt('¿Deseás continuar? [S/N]');
    } else {
        finalizarMsg.innerHTML = "Validar con 'while' - Operación cancelada.";
    }
}

function conDoWhile() {
    //Opción con do-while
    let opcion;
    let finalizarMsg = document.getElementById("finalizarMsg");

    do {
        opcion = prompt('¿Deseás continuar? [S/N]');
        if (!['S', 's', 'N', 'n'].includes(opcion)) {
            alert('Opción inválida. Ingresá S o N.');
        }
    } while (!['N', 'n'].includes(opcion));
    if (['S', 's'].includes(opcion)) {
        opcion = prompt('¿Deseás continuar? [S/N]');
    } else {
        finalizarMsg.innerHTML = "Validar con 'do-while' - Operación cancelada.";
    }
}

function listaMaxMin() {
    let unoADiez = 1;
    let listaNumeros = [];
    let max;
    let min;
    let listaMaxMinMsg = document.getElementById("listaMaxMinMsg");

    while (unoADiez > 0 && unoADiez <= 10) {
        unoADiez = parseInt(prompt("Ingresa un número del 1 al 10 (0 para terminar) "));
        if (unoADiez >= 1 && unoADiez <= 10) {
            listaNumeros.push(unoADiez);
        }
        max = Math.max(...listaNumeros);
        min = Math.min(...listaNumeros);
        if (unoADiez < 0 || unoADiez > 10 || isNaN(unoADiez)) {
            unoADiez = parseInt(prompt("Número inválido, ingresa un número del 1 al 10 (0 para terminar) "));
        }
    }
    if (listaNumeros.length >= 1) {
        listaMaxMinMsg.innerHTML = `Los nros ingresados son "${listaNumeros}"<br>El máximo es: ${max}<br>El mínimo ${min}`;
    } else {
        listaMaxMinMsg.innerHTML = "No se ingresaron números válidos.";
    }
}

// Ejercicio 14
function listaPersonas() {
    let nombre;
    let edad = 0;
    let personaMasJoven;
    let edadMasJoven = 120;
    let personaMsg = document.getElementById("personaMsg");

    while (nombre !== "*") {
        nombre = prompt("Ingrese el nombre de la persona (* para terminar): ");
        if (nombre === "*") {
            break;
        }
        edad = parseInt(prompt(`Ingrese la edad de ${nombre}: `));
        if (edad < edadMasJoven) {
            personaMasJoven = nombre;
            edadMasJoven = edad;
        }
    }

    if (personaMasJoven !== "") {
        personaMsg.innerHTML = `La persona más joven es ${personaMasJoven}<br>(${edadMasJoven} años)`;
    } else {
        personaMsg.innerHTML = "No se ingresaron personas.";
    }
}

// Ejercicios 15
function promedioMenorA20() {
    let numeros = [];
    let suma = 0;
    let cantidad = 0;
    let leidosMsg = document.getElementById("leidosMsg");

    while (cantidad === 0 || suma / cantidad < 20) {
        let numero = parseInt(prompt("Ingrese un número h/un promedio = '20': "));
        numeros.push(numero);
        suma += numero;
        cantidad++;
    }

    leidosMsg.innerHTML = `Cantidad de valores con promedio < 20 leídos: ${cantidad}<br>Lista de números ingresados: ${numeros.join(", ")}`;
}

// Ejercicio 16
function capturarNumerosE() {
    let numerosE = [];
    let seguirIngresando = true;

    while (seguirIngresando) {
        let numeroE = parseInt(prompt("Ingresa un número entero: "));
        numerosE.push(numeroE);

        let opcion = prompt("¿Quieres ingresar otro número? [S/N] ");
        while (!validarOpcion(opcion)) {
            opcion = prompt("Opción inválida. Ingresa 'S' o 'N' ");
        }
        seguirIngresando = (opcion.toUpperCase() === 'S');
    }

    let pares = 0;
    numerosE.forEach(numeroE => {
        if (numeroE % 2 === 0) {
            pares++;
        }
    });

    let porcentajePares = ((pares / numerosE.length) * 100).toFixed(2);
    let paresMsg = document.getElementById("paresMsg");
    paresMsg.innerHTML = `El porcentaje de números pares es ${porcentajePares}%<br>sobre ${numerosE.length} ingresados (${numerosE})`;

    function validarOpcion(opcion) {
        return (opcion.toUpperCase() === 'S' || opcion.toUpperCase() === 'N');
    }
}

// Ejercicio 17
function capturarArticulos() {
    let continuar = true;
    let montoTotal = 0;
    let articulos = [];

    while (continuar) {
        let nombre = prompt("Ingresa el nombre del artículo: ");
        let cantidad = parseInt(prompt("Ingresa la cantidad de artículos: "));
        let precio = parseFloat(prompt("Ingresa el precio unitario del artículo: "));

        // Validar que se ingresen los datos
        while (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0 || nombre === "") {
            nombre = prompt("Ingresa un nombre de artículo válido: ");
            cantidad = parseInt(prompt("Ingresa una cantidad válida de artículos: "));
            precio = parseFloat(prompt("Ingresa un precio unitario válido: "));
        }

        articulos.push({ nombre, cantidad, precio });

        montoTotal += cantidad * precio;

        let seguirIngresando = prompt("¿Queres ingresar otro artículo? [S/N]").toUpperCase();

        // Validar que se ingrese una opción válida
        while (seguirIngresando !== "S" && seguirIngresando !== "N") {
            seguirIngresando = prompt("Ingresa una opción válida [S/N]").toUpperCase();
        }

        if (seguirIngresando === "N") {
            continuar = false;
        }
    }

    // Mostrar lista de artículos, cantidad y monto de cada ingreso
    let articulosMsg = document.getElementById("articulosMsg");
    articulosMsg.innerHTML = `Parciales:<br>`;
    articulos.forEach((articulo, index) => {
        articulosMsg.innerHTML += `'${articulo.nombre}'- ${articulo.cantidad} x $${articulo.precio.toFixed(2)} = $${(articulo.cantidad * articulo.precio).toFixed(2)}<br>`;
    });
    articulosMsg.innerHTML += "";

    // Mostrar monto total del ticket
    articulosMsg.innerHTML += `El monto total del ticket es: $${montoTotal.toFixed(2)}`;
}

// Ejercicio 18
function capturarSueldoAnual() {
    let sueldosMensuales = [];
    let sueldoTotal = 0;

    for (let i = 1; i <= 12; i++) {
        let sueldo = parseFloat(prompt(`Ingrese el sueldo del mes ${i}:`));
        if (sueldo < 0) {
            break;
        } else {
            sueldosMensuales.push(sueldo);
            sueldoTotal += sueldo;
        }
    }

    let sueldoAnualMsg = document.getElementById("sueldoAnualMsg");
    sueldoAnualMsg.innerHTML = `El sueldo anual percibido es de $${sueldoTotal.toFixed(2)}<br>(${sueldosMensuales})`;
}

// Ejercicio 19
const form19 = document.getElementById("form19");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginMsg = document.getElementById("loginMsg");
const maxIntentos = 3;
let cuentaIntentos = 0;

form19.addEventListener("submit", function (event) {
    event.preventDefault(); // previene que se refresque la página

    const user = username.value;
    const pass = password.value;

    if (user === "admin" && pass === "123456") {
        // datos correctos
        cuentaIntentos = 0; // reinicia el contador de intentos
        form19.reset();
        username.focus();
        loginMsg.textContent = "Acceso concedido!";
    } else {
        // datos incorrectas
        cuentaIntentos++;
        const intentosRestantes = maxIntentos - cuentaIntentos;
        if (intentosRestantes > 0) {
            // quedan intentos disponibles
            loginMsg.textContent = `Datos incorrectos. Te quedan ${intentosRestantes} intentos.`;
            username.focus();
            form19.reset();
        } else {
            // se agotaron los intentos
            loginMsg.textContent = "Se ha bloqueado la cuenta";
            form19.reset();
            username.disabled = true; // desactiva el campo de usuario
            password.disabled = true; // desactiva el campo de contraseña
            document.querySelector("button[type=submit]").disabled = true; // desactiva el botón de envío
        }
    }
});

// Ejercicio 20
function capturarMatriz() {
    const anchoMatriz = parseInt(document.getElementById("anchoMatriz").value);
    const altoMatriz = parseInt(document.getElementById("altoMatriz").value);
    let relleno = document.getElementById("rellenoMatriz").value;

    // Establecer valor por defecto del relleno
    relleno = relleno === "" ? "+" : relleno;

    // Crear la matriz de relleno
    if (isNaN(altoMatriz) || isNaN(anchoMatriz)) {
        alert("Ingresar ancho y alto de la matriz");
    }
    const matriz = [];
    for (let i = 0; i < altoMatriz; i++) {
        let fila = "";
        for (let j = 0; j < anchoMatriz; j++) {
            fila += relleno.toUpperCase();
        }
        matriz.push(fila);
    }

    // Mostrar la matriz y vaciar formulario
    const mostrarMatriz = document.getElementById("mostrarMatriz");
    mostrarMatriz.innerHTML = matriz.join("<br>");
    document.getElementById("form20").reset();
}

// Ejercicio 21
let intervalId; // Variable global para guardar el ID del intervalo
let segundosRestantes;

function iniciarCronometro() {
    // Pedimos que ingrese los minutos
    const minutos = parseInt(document.getElementById("cantidadMinutos").value);

    // Convertimos los minutos a segundos
    segundosRestantes = minutos * 60;

    const cronometro = document.getElementById("cronometro");

    // Función que actualiza el cronómetro
    function actualizarCronometro() {
        // Calculamos los minutos y segundos actuales
        const minutosActuales = Math.floor(segundosRestantes / 60);
        const segundosActuales = segundosRestantes % 60;

        // Actualizamos el contenido
        cronometro.textContent = `${minutosActuales.toString().padStart(2, "0")}:${segundosActuales.toString().padStart(2, "0")}`;

        // Si quedan segundos, programamos la siguiente actualización
        if (segundosRestantes > 0) {
            intervalId = setTimeout(() => {
                segundosRestantes--;
                actualizarCronometro();
            }, 1000);
        }
    }

    // Iniciamos el cronómetro
    actualizarCronometro();
}

function detenerCronometro() {
    // Detenemos el intervalo si existe
    if (intervalId) {
        clearInterval(intervalId);
    }
}

function reiniciarCronometro() {
    detenerCronometro(); // Detenemos el cronómetro actual
    segundosRestantes = 0; // Reiniciamos los segundos restantes
    const cronometro = document.getElementById("cronometro");
    cronometro.textContent = "00:00"; // Reiniciamos el cronómetro en la pantalla
}
