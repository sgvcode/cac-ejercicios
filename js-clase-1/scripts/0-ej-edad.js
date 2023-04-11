/**
 * El usuario introduce año de nacimiento
 * y la computadora le devuelve su edad
 */
//parseInt / parseFloat
let anioNac = parseInt(prompt("Escribe tu año de nac: ej. 1998 "));
let edad = new Date().getFullYear() - parseInt(anioNac);

//Templates literales -después de 2015
console.log(`Tu edad es: ${edad} años`);