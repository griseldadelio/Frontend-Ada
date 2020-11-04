// Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y devuelva el 
//valor del porcentaje correspondiente al número
const calcularPorcentaje = ((numero, porcentaje) => numero * porcentaje / 100);

//Crear una función restarPorcentaje que tome como argumentos un número y un porcentaje y devuelva
// la resta de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener 
//el porcentaje a restar

const restarPorcentaje = ((numero, porcentaje) => numero - calcularPorcentaje(numero, porcentaje));

//Crear una función contarPalabras que tome como argumento un string str y devuelva el mismo string con 
//todas las vocales reemplazadas por la letra i
const burlarse1 = (str) => {
    const vocales = ["a", "e", "o", "u"];
    for (let i = 0; str.length > i; i++) {
        if (vocales.includes(str[i])) {
            str = str.replace(str[i], 'i');
        }
    }
    return str;
}
console.log(burlarse1('programar es dificil'));

const burlarse = (str) => {
    let reemplazo = str.replace((/a|e|o|u/g), function (i) {
        return i = "i";
    })
    return reemplazo;
} 
console.log(burlarse('programar es dificil'))

//Crear una función aHackerSpeak que tome como argumento un string str y devuelva el mismo string 
//convertido a H4CK3R 5P3AK, siguiendo las siguientes reglas:
const aHackerSpeak = (str) => {
    let obj = { 'a': 4, 'e': 3, 'i': 1, 'o': 0, 's': 5, 'A': 4, 'E': 3, 'I': 1, 'O': 0, 'S': 5 };
    let cambio = str.replace((/a|e|i|o|s|A|E|I|O|S/g), function (i) {
        return obj[i];
    })
    return cambio;
}
    console.log(aHackerSpeak('javascript'))
console.log(aHackerSpeak('soy una hacker'))
console.log(aHackerSpeak('ADA LOVELACE'))



