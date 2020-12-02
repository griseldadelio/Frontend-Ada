// 3- Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.
/*
const numeros = [1, 2, 3]
const functionMap = (array, call) => {
    let newArray = [];
    for (item of array) {
        let resultado = call(item);
        newArray.push(resultado);
    }
    return newArray;
}
const duplicar = (number) => number * 2;
console.log(functionMap(numeros), duplicar())
map(numeros, duplicar) // [2, 4, 6]

// 4- Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".

const numbers = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0

const filter = (array, callback) => {
    let nuevoArray = [];
    for (data of array) {
        if (callback(data)) {
            nuevoArray.push(data)
        }
    }
    console.log(nuevoArray)
}
filter(numbers, multiploDe10) // [10, 40, 50]

//5- Crear una función every que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si todas las llamadas al callback devolvieron true

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

const every = (array, callback) => {
    const newArray = [];
    for (data of array) {
        newArray.push(callback(data))
    }
    if (newArray.includes(false)) {
        console.log(false)
    } else {
        console.log(true)
    }
}

every(numeros, multiploDe10) // false
every(numeros, esPositivo) // true

//6- Crear una función some que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva true si al menos una de las llamadas al callback devolvió true

const numeros = [10, 2, 3, 40, 33, 50]
const multiploDe10 = (x) => x % 10 === 0
const esPositivo = (x) => x >= 0

const some = (array, callback) => {
    const arrayNew = [];
    for (dato of array) {
        arrayNew.push(callback(dato));
    }
    if (arrayNew.includes(true)) {
        console.log(true);
    } else {
        console.log(false)
    }
}
some(numeros, multiploDe10) // true
some(numeros, esPositivo) // true


//7- Crear una función find que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const numeros = [8, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;
const find = (array, callback) => {
    for (dato of array) {
        if (callback(dato)) {
            return dato;
        }
    }
    return undefined;
}
console.log(find(numeros, multiploDe10)) // 40


// 8- Crear una función findIndex que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva el índice del elemento pasado como argumento del primer callback que devuelva true
// - si ningún callback devuelve true, devuelva undefined

const numeros = [8, 2, 3, 40, 33, 50];
const multiploDe10 = (x) => x % 10 === 0;
const findIndex = (array, callback) => {
    for (dato of array) {
        if (callback(dato)) {
            let indice = array.indexOf(dato);
            return indice;
        }
    }
    return undefined;
}
console.log(findIndex(numeros, multiploDe10)) // 3


//9- Crear una función dropWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos a partir del primer callback que devolvió false

// (Es decir, crea un nuevo array y va recorriendo elemento por elemento, mientras el callback de true, no los agrega, cuando el callback da false por primera vez agrega todos los elementos restantes a partir de dicho elemento inclusive)

const numeros = [40, 33, 50, 8, 2, 3, 20];
const multiploDe10 = (x) => x % 10 === 0;
const dropWhile = (array, callback) => {
    const newArray = [];
    for (dato of array) {
        if (callback(dato) !== true || newArray.length > 0) {
            newArray.push(dato);
        }
    }
    return newArray;

}
console.log(dropWhile(numeros, multiploDe10)) // [8, 2, 3, 20]
*/

//10- Crear una función takeWhile que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - devuelva un array con los elementos hasta el primer callback que devolvió false

// (Inverso del dropWhile)
const numeros = [40, 50, 33, 8, 2, 3, 20];
const multiploDe10 = (x) => x % 10 === 0;

const takeWhile = (array, callback) => {
    const newArray = [];
    for (dato of array) {
        if (!callback(dato)/* aca es = a false */) {
            return newArray;
        }
        newArray.push(dato);
    }
}
console.log(takeWhile(numeros, multiploDe10)) // [40, 50]