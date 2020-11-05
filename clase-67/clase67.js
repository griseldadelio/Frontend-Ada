//1- Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:
const numeros = [5, 7, 99, 34, 54, 2, 12];
var menor = numeros.reduce(function (menor, numero) {
    if (menor > numero) {
        menor = numero;
    }
    return menor;
}, numeros[0]);
//console.log(menor) //2
// 2- Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
const numero = [5, 7, 10, 12, 24];
var suma = numero.reduce((a, b) => a + b);
//console.log(suma); // 58

//3-Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:
const contiene = (numero1, numeros) => (numeros.includes(numero1));
//console.log(contiene(34, numeros));
//console.log(contiene(115, numeros));

//4- Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

const string = '';
const invertirCaso = (string) => {
    for (i = 0; i < string.length; i++) {
        let caracter = string.charAt(i);
        string = caracter === caracter.toLowerCase()
            ? string.replace(caracter, caracter.toUpperCase())
            : string.replace(caracter, caracter.toLowerCase());
    }
    return string;
};
/*
console.log(invertirCaso('JAVASCRIPT'))
console.log(invertirCaso('javascript'))
console.log(invertirCaso('PERRO JAPONES'))
console.log(invertirCaso('marcelo Garcia'))
console.log(invertirCaso('Mariano Martinez'))
*/

//5-Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:
const perrosYGatos = 'XSXXXSSSXXSXSXS';
let gato = '';
let perro = '';
const separar = (string) => {
    let primeraLetra = string[0];
    for (let letra of string) {
        if (letra === primeraLetra) {
            perro += letra
        } else {
            gato += letra
        }
    }
    return perro + gato;
}
//console.log(perrosYGatos);
//console.log(separar(perrosYGatos));

//6- Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.
const gano = (simbolo) => {
    for (i = 0; i < 4; i++) {
        if (simbolo[i] !== simbolo[i + 1]) return false;
    }
    return true;
}

console.log(gano(["x", "x", "x", "o", "o"])); // false
console.log(gano(["x", "x", "x", "x", "x"])); // true
console.log(gano(["x", "x", "x", "x", "x", "o"])); // true

// Aca pueden usar x, o, -
//7-Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

const estanJuntos = (personajes) => {
    let sam = personajes.indexOf("Sam");

    if (personajes[sam] == 0) {
        return personajes[sam + 1] == "Frodo";
    }

    if (personajes[sam + 1] == "Frodo" || personajes[sam - 1] == "Frodo") {
        return true
    }
    return false
}


console.log(estanJuntos(["Sam", "Frodo", "Legolas"])); //true
console.log(estanJuntos(["Aragorn", "Frodo", "Frodo"])); //false
console.log(estanJuntos(["Sam", "Orco", "Frodo"])); //false


