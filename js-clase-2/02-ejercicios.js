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
    document.getElementById("asientos").value = "";
    document.getElementById("inscriptos").value = "";
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
        return; // Se agrega un return para salir de la función si hay un valor inválido.
    }
    const mayorN3 = (n2 > mayorN) ? ((n3 > n2) ? `El mayor es ${n3}` : `El mayor es ${n2}`) : ((n3 > mayorN) ? `El mayor es ${n3}` : (n1 === n2 && n2 === n3) ? "Los tres números son iguales" : `El mayor es ${n1}`);
    document.getElementById("mayor3Msg").textContent = `${mayorN3} (entre ${n1}, ${n2} y ${n3})`;
    document.getElementById("n11").value="";
    document.getElementById("n22").value="";
    document.getElementById("n33").value="";
    document.getElementById("n11").focus();
}