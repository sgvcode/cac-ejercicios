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

    document.getElementById("alturaPromedioMsg").innerHTML = `Alturas ingresadas: [${alturasAcumuladas.join(", ")}]<br>El promedio de altura de ${cant1} jugadores es '${alturaPromedio.toFixed(2)}m'`;
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

// Ejercicio 10
function validarNotas() {
    let notas;
    do {
        notas = parseFloat(prompt("Ingrese la nota del examen (entre 0 y 10): "));
    } while (notas < 0 || notas > 10);

    document.getElementById("validarNotaMsg").innerHTML = `La nota es ${notas}`;
}

// Ejercicio 11
function validarNotaN() {
    let notaN = parseInt(prompt("Ingresa una nota: "));

    while (isNaN(notaN) || notaN <= 1 || notaN > 10 || notaN === 3) {
        notaN = parseInt(prompt("Nota inválida. Ingresa una nota: "));
    }
    document.getElementById("validarNotaNMsg").innerHTML = `La nota es '${notaN}'`;
}

// Ejercicio 12
// Opción con while
function conWhile() {
    let opcion = "";
    while (!["n"].includes(opcion.toLowerCase())) {
        opcion = prompt("¿Deseás opcion? [S/N] ");
        if (!["s", "n"].includes(opcion.toLowerCase())) {
            alert("Opción inválida. Ingresá S o N. ");
        }
    }
    if (["s"].includes(opcion.toLowerCase())) {
        opcion = prompt("¿Deseás opcion? [S/N] ");
    } else {
        alert("Operación cancelada.");
    }
}

function conDoWhile() {
    //Opción con do-while
    let opcion;
    do {
        opcion = prompt("¿Deseás opcion? [S/N] ").toLowerCase();
        if (!["s", "n"].includes(opcion)) {
            alert("Opción inválida. Ingresá S o N. ");
        }
    } while (!["n"].includes(opcion));
    if (opcion === "s") {
        opcion = prompt("¿Deseás opcion? [S/N] ").toLowerCase();
    } else {
        alert("Operación cancelada.");
    }
}

// Ejercicio 13

function listaMaxMin() {
    let listaNumeros = [];
    let unoAMil;
    let max;
    let min;
    let continuar = true;
    let mensaje = document.getElementById("listaMaxMinMsg");

    while (continuar) {
        unoAMil = parseInt(prompt("Ingresa un número del 1 al 1000 (0 para terminar) "));
        if (unoAMil >= 1 && unoAMil <= 1000 && !isNaN(unoAMil)) {
            listaNumeros.push(unoAMil);
        } else if (unoAMil !== 0) {
            alert("Número inválido.");
        } else {
            continuar = false;
        }
    }

    if (listaNumeros.length >= 1) {
        max = Math.max(...listaNumeros);
        min = Math.min(...listaNumeros);
        mensaje.innerHTML = `Los nros ingresados son [${listaNumeros.join(", ")}]<br>El máximo es: ${max}<br>El mínimo es: ${min}`;
    } else {
        mensaje.innerHTML = "No se ingresaron números válidos.";
    }
}

// Ejercicio 14
function listaPersonas() {

    const EDAD_MAXIMA = 120;
    let nombre, edad;

    let minimo = EDAD_MAXIMA
    let nombreMasJoven;

    nombre = prompt(`Ingresa el nombre de la persona ('*' para terminar): `);
    while (nombre != "*") {
        edad = parseInt(prompt(`Ingrese edad para ${nombre}: `));

        while (!(edad > 0 && edad <= EDAD_MAXIMA)) {
            edad = parseInt(prompt(`Error. Ingresa la edad de ${nombre}: `));
        }
        if (edad <= minimo) {
            minimo = edad;
            nombreMasJoven = nombre;
        }
        nombre = prompt(`Ingrese otro nombre ('*' para terminar): `);
    }
    if (nombreMasJoven != undefined) {
        document.getElementById("personaMsg").innerHTML = `El más joven es ${nombreMasJoven} con ${minimo} años`;
    } else {
        document.getElementById("personaMsg").innerHTML = "No se ingresó ninguna edad";
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

    leidosMsg.innerHTML = `Cantidad de valores con promedio < 20 leídos: ${cantidad - 1}<br>Sumando ${numeros[numeros.length - 1]} excedería el promedio mínimo deseado<br>Lista de números que cumplen: [${numeros.slice(0, -1).join(", ")}]`;
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
    let seguirCargando = true;
    let total = 0;
    let compras = [];

    while (seguirCargando) {
        let nombre = prompt("Ingrese el nombre del artículo:");
        let cantidad;
        let precio;

        do {
            cantidad = parseInt(prompt("Ingrese la cantidad de unidades del artículo:"));
            if (isNaN(cantidad) || cantidad <= 0) {
                alert("La cantidad ingresada no es válida");
            }
        } while (isNaN(cantidad) || cantidad <= 0);

        do {
            precio = parseFloat(prompt("Ingrese el precio unitario del artículo:"));
            if (isNaN(precio) || precio <= 0) {
                alert("El precio ingresado no es válido");
            }
        } while (isNaN(precio) || precio <= 0);

        total += cantidad * precio;

        compras.push(`${nombre}: ${cantidad} por $${precio.toFixed(2)}`);

        let opcion;

        do {
            opcion = prompt("¿Desea ingresar otro artículo? [S/N]").toLowerCase();
            if (opcion !== "s" && opcion !== "n") {
                alert("Opción inválida.");
            }
        } while (opcion !== "s" && opcion !== "n");

        if (opcion === "n") {
            seguirCargando = false;
        }
    }

    document.getElementById("articulosMsg").innerHTML = `Se ingresaron:<br>${compras.join('<br>')}<br><br>El total del ticket es de $${total.toFixed(2)}`;
    // let continuar = true;
    // let montoTotal = 0;
    // let articulos = [];

    // while (continuar) {
    //     let nombre = prompt("Ingresa el nombre del artículo: ");
    //     let cantidad = parseInt(prompt("Ingresa la cantidad de artículos: "));
    //     let precio = parseFloat(prompt("Ingresa el precio unitario del artículo: "));

    //     // Validar que se ingresen los datos
    //     while (isNaN(cantidad) || isNaN(precio) || cantidad <= 0 || precio <= 0 || nombre === "") {
    //         nombre = prompt("Ingresa un nombre de artículo válido: ");
    //         cantidad = parseInt(prompt("Ingresa una cantidad válida de artículos: "));
    //         precio = parseFloat(prompt("Ingresa un precio unitario válido: "));
    //     }

    //     articulos.push({ nombre, cantidad, precio });

    //     montoTotal += cantidad * precio;

    //     let seguirIngresando = prompt("¿Queres ingresar otro artículo? [S/N]").toUpperCase();

    //     // Validar que se ingrese una opción válida
    //     while (seguirIngresando !== "S" && seguirIngresando !== "N") {
    //         seguirIngresando = prompt("Ingresa una opción válida [S/N]").toUpperCase();
    //     }

    //     if (seguirIngresando === "N") {
    //         continuar = false;
    //     }
    // }

    // // Mostrar lista de artículos, cantidad y monto de cada ingreso
    // let articulosMsg = document.getElementById("articulosMsg");
    // articulosMsg.innerHTML = `Parciales:<br>`;
    // articulos.forEach((articulo, index) => {
    //     articulosMsg.innerHTML += `'${articulo.nombre}'- ${articulo.cantidad} x $${articulo.precio.toFixed(2)} = $${(articulo.cantidad * articulo.precio).toFixed(2)}<br>`;
    // });
    // articulosMsg.innerHTML += "";

    // // Mostrar monto total del ticket
    // articulosMsg.innerHTML += `El monto total del ticket es: $${montoTotal.toFixed(2)}`;
}

// Ejercicio 18
function capturarSueldoAnual() {
    let sueldosMensuales = [];
    let sueldoTotal = 0;
    let continuar = true; // variable de control

    for (let i = 1; i <= 12 && continuar; i++) {
        let sueldo = parseFloat(prompt(`Ingrese el sueldo del mes ${i}: `));
        if (sueldo < 0) {
            continuar = false; // si el sueldo es negativo, detenemos el bucle
        } else {
            sueldosMensuales.push(sueldo);
            sueldoTotal += sueldo;
        }
    }

    sueldoAnualMsg.innerHTML = `El sueldo anual percibido es de $${sueldoTotal.toFixed(2)}<br>(${sueldosMensuales.join(", ")})`;
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
    document.getElementById("form21").reset();
}