//1- Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

const multiplicar = (numMul, numeros) => {
    for (i = 0; i < numeros.length; i++) {
        numeros[i] = (numeros[i] * numMul);

    }
    return numeros;
}
//console.log(multiplicar(2, [5, 7, 15, 22, 40])); // [10, 14, 30, 44, 80]
//console.log(multiplicar(10, [2, 5, 77])); // [20, 50, 770]

//2- Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:
/*const filtrarPorLongitud = (numLong, palabras) => {
    return palabras.map((x) => {
        if (x.length > numLong) return x;
    })
}
*/

const filtrarPorLongitud = (longitud, palabras) => {
    return palabras.filter(palabra => palabra.length > longitud)
} 
console.log(filtrarPorLongitud(4, ["dia", "remolacha", "azul", "sorpresa", "te", "verde",])); // ['remolacha''sorpresa', 'verde']



const filtrarPorLongitud1 = (numLong, arrayString) => {
    let longitudMayor = [];
    for (i = 0; i < arrayString.length; i++) {
        if (arrayString[i].length > numLong) {
            longitudMayor.push(arrayString[i]);
        }
    }
    return longitudMayor;
}

console.log(filtrarPorLongitud1(3, ["dia", "remolacha", "azul", "sorpresa", "te", "verde"]));

