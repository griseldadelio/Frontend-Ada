//1- Crear una función obtenerIndice que tome como argumento un valor cualquiera valor y un array cualquiera array y devuelva el índice del primer ítem con dicho valor en el array, o -1 si no hay ninguno.
const obtenerIndice = (valor, array) => {
    for (i = 0; i < array.length; i++) {
        if (valor === array[i]) {
            return i;
        }
    }
    return -1;
}
//const obtenerIndice = (valor, numeros) => numeros.indexOf(valor);
//console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 12])); // 2
//console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12])); // -1

//2- Crear una función repetir que tome como argumento un valor valor y un número entero cantidad, y devuelva una array con valor repetido cantidad de veces.
const repetir = (valor, numero) => {
    let iguales = [];
    for (i = 0; i < numero; i++) {
        iguales.push(valor);
    }
    return iguales;
}
/*
console.log(repetir("lovelace", 3)); // ['lovelace', 'lovelace', 'lovelace']
console.log(repetir("a", 5)); // ['a', 'a', 'a', 'a', 'a']
console.log(repetir("html", 0)); // []
*/

//3- Crear una función sumarImparesHasta que tome como argumento un número numero y que devuelva la suma de todos los impares empezando desde 0 hasta dicho numero inclusive.
const sumarImparesHasta = (numero) => {
    let sumaImpares = 0;
    for (i = 1; i <= numero; i++) {
        if (i % 2 != 0)
            sumaImpares = sumaImpares + i;
    }
    return sumaImpares;
}
/*
console.log(sumarImparesHasta(5)); // 9 (1 + 3 + 5 = 9)
console.log(sumarImparesHasta(13)); // 49
console.log(sumarImparesHasta(47)); // 576
*/

//4- Crear una función crearCuentaRegresiva que tome como argumento un número entero numeroInicial y que devuelva un array con cuyo primer ítem sea numeroInicial y los demás ítems sean números enteros sucesivos descendientes, hasta llegar a 0.
const crearCuentaRegresiva = (numeroInicial) => {
    let regresivo = [];
    for (i = numeroInicial; i >= 0; i--) {
        regresivo.push(i);
    }
    return regresivo;
}
//console.log(crearCuentaRegresiva(3)); // [3, 2, 1, 0]
//console.log(crearCuentaRegresiva(5)); // [5, 4, 3, 2, 1, 0]

//5- Crear una función invertir que tome como argumento un array array y que devuelva un array con los mismos valores pero en orden invertido.
const invertir1 = (numeros) => numeros.reverse();

const invertir = (numeros) => {
    let invertido = [];
    for (let i = numeros.length - 1; i >= 0; i--) {
        invertido.push(numeros[i]);
    }
    return invertido;
}
//console.log(invertir([1, 2, 3])); // [3, 2, 1]
//console.log(invertir([5, 7, 99, 34, 54, 2, 12])); // [12, 2, 54, 34, 99, 7, 5]

//6- Crear una función removerDuplicados que tome como argumento un array array y que devuelva un array con 
//los mismos valores de array pero sin valores duplicados.
const removerDuplicados = (duplicado) => {
    let nuevoArray = [];
    for (i = 0; i < duplicado.length; i++) {
        if (!nuevoArray.includes(duplicado[i])) {
            nuevoArray.push(duplicado[i]);
        }
    }
    return nuevoArray;
}
/*
console.log(removerDuplicados([1, 1, 1])); // [1]
console.log(removerDuplicados([1, 1, 2, 2, 3, 3])); // [1, 2 ,3]
console.log(removerDuplicados([5, 23, 8, 5, 5, 44, 23])); // [5, 23 ,8, 44]
*/

//7- Crear una función repetirLetras que tome como argumento un string palabra y un número entero cantidad, y devuelva una string donde cada letra de palabra esté repetida cantidad de veces.
const repetirLetras = (string, numero) => {
    let nuevoString = '';
    for (i = 0; i < string.length; i++) {
        const posicion = string.charAt(i);
        nuevoString += posicion.repeat(numero);
    }
    return nuevoString;
}
/*
console.log(repetirLetras("hola", 2)); // 'hhoollaa'
console.log(repetirLetras("ada", 3)); // 'aaadddaaa'
console.log(repetirLetras("ah!", 5)); // 'aaaaahhhhh!!!!!'
console.log(repetirLetras("basta", 1)); // 'basta'
*/

//8- Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

const capitalizar = (str) => {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}


function capitalizarPalabras(string) {
    strVal = '';
    string = string.split(' ');
    for (i = 0; i < string.length; i++) {
        strVal += string[i].substring(0, 1).toUpperCase() + string[i].substring(1, string[i].length) + ' ';
    }
    return strVal;
}
/*
console.log(capitalizarPalabras("Esto es un título")); // 'Esto Es Un Título'
console.log(capitalizarPalabras("había una vez")); // 'Había Una Vez'
console.log(capitalizarPalabras("OMG")); // 'OMG'
*/

//9- Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.

const sumarSeccion = (array, numInicio, numCantidad) => {
    let sumar = 0;
    let pos = numInicio + numCantidad;
    for (i = numInicio; i < pos; i++) {
        sumar += array[i];
    }
    return sumar;
}
/*
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3)); // 8 (2 + 2 + 4 = 8)
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4)); // 37 (4 + 8 + 10 + 20 = 37)
console.log(sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1)); // 3
*/

//10- Crear una función esSubconjunto que tome como argumento dos arrays, subconjunto y conjunto, y devuelva true si subconjunto es realmente subconjunto de conjunto, es decir, si todos los valores de subconjunto están en conjunto.
const esSubconjunto = (arrayA, arrayB) => {
    for (i = 0; i < arrayA.length; i++) {
        if (!arrayB.includes(arrayA[i])) {
            return false;
        }
    }
    return true;
}
/*
console.log(esSubconjunto([1], [1, 2, 3])); // true
console.log(esSubconjunto([1, 2, 3], [1, 2, 3, 4, 5])); // true
console.log(esSubconjunto([27, 49, 54], [54, 27, 8, 27, 49])); // true
console.log(esSubconjunto([1, 2, 3], [1, 2])); // false
console.log(esSubconjunto([1], [2, 3, 4])); // false
*/

//11- Crear un programa que pida ingresar un nombre, pregunta si el nombre es correcto, y si lo es, muestre un 
//mensaje saludando a la persona con dicho nombre. La función prompt devuelve el texto ingresado por el usuario
/*
const nombre = prompt("Por favor, ingresá tu nombre");
const respuesta = confirm("¿Estás segura que te llamás así?");

if (respuesta) {
    alert(`¡Hola ${nombre}!`);
}
*/
const saludar = () => {
    let nameUser = prompt("Ingrese su nombre");
    let checkname = prompt(`Su nombre es ${nameUser}? - Ingrese: yes/no`);
    let greeting = "bienvenido a tu sesión!!"

    if (checkname === "yes") {
        alert(`${nameUser}, ${greeting}`)
    }
}

//12- Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones.

const playlist = (name, cant) => {
    let list = [];
    for (i = 0; i < cant; i++) {
        list.push(prompt("Ingresar Canción " + (i + 1) + " de " + cant));
        console.log(name, list);
    }
};
const nombre = prompt("Ingresar el nombre de la playlist");
const cant = prompt("Cuantas canciones desea ingresar?");

playlist(nombre, cant);