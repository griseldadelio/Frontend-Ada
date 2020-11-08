/*
const arreglo = [];
arreglo['name'] = 'Adrian';
arreglo['lastname'] = 'Solimano';

const personas = [];
personas.push(arreglo);
personas.push(arreglo);

console.log(personas);
*/
/*
const objeto = {
    datos: {
        name: 'Adrian',
        lastname: 'Solimano',
    }
};
const personas = [];
personas.push(objeto);
personas.push(objeto);

console.log(personas);
*/

const personajes = getInhabitants();
// 1 Mostrar en pantalla al/los personajes mas enanos de "Brastlewark"
/*
const personaje = () => {
    let min;
    for (i = 0; i < personajes.length; i++) {
        (personajes[i].height >= min) ? true : (min = personajes[i].height);
    }
    let dato = personajes.filter(personaje => personaje.height === min);
    return dato;
} 
*/
//2 Crear una funcion que devuelva los personaes por ID en base a un rango numerico.
const personajePorId = (num1, num2) => {
    if (num1 < num2) {
        return personajes.filter(personaje => personaje.id >= num1 && personaje.id <= num2);
    } else {
        // console.log('num1 tiene que ser menor que num2')
    }
}

//3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.
const colorDePelo = (color) => personajes.filter(personaje => personaje.hair_color === color);

//4 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" en base a una propiedad y un valor enviados como parámetros.
const lista = (key, value) => {
    const array = [];
    for (const personaje of personajes) {
        if (personaje[key] === value) {
            array.push(personaje)
        }
    }
    return array;
}
//console.table(lista('age', 240))

// 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho de "Brastlewark".
/*
const minimos = (prop) => {
    let valorMinimo = personajes[0][prop];
    let personaje = personajes[0];

    for (i = 0; i < personajes.length; i++) {
        let valor = personajes[i][prop];
        if (valorMinimo > valor) {
            valorMinimo = valor;
            personaje = personajes[i];
        }
    }
    return personaje;
}
console.log(minimos('height'));
console.log(minimos('age'));

const maximo = (prop) => {
    let valorMinimo = personajes[0][prop];
    let personaje = personajes[0];

    for (i = 0; i < personajes.length; i++) {
        let valor = personajes[i][prop];
        if (valorMinimo < valor) {
            valorMinimo = valor;
            personaje = personajes[i];
        }
    }
    return personaje;
}
console.log(maximo('height'));
console.log(maximo('age'));
console.log(maximo('weight'))
*/

// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

let Fizwood = personajes.filter(personaje => personaje.name === "Fizwood Mysttink");
let nombreAmigos = Fizwood[0].friends;
let amigos = [];
for (i = 0; i < nombreAmigos.length; i++) {
    const amigo = personajes.filter(personaje => personaje.name === nombreAmigos[i]);
    amigos[i] = amigo[0];
}
//console.table(amigos)


//7  Listar a todos los personajes que tengan como profesión "Woodcarver".
//8 Listar a todos los personajes que tengan como profesion un dato enviado como parámetro.

const profesion = [];
const lista1 = (professions) => {
    for (personaje of personajes) {
        if (personaje.professions == professions) {
            profesion.push(personaje);
        }
    }
    return profesion;
}
//console.log(lista1("Woodcarver"))

//9  Crear una función que a partir de un string, devuelva todos los habitantes que contienen dicho string en su nombre
let stringNombre = [];
const contieneString = (string) => {
    for (personaje of personajes) {
        if (personaje.name.includes(string)) {
            stringNombre.push(personaje)

        }
    }
    return stringNombre;
}
//console.log(contieneString('witz'))

//10 Crear una función que devuelva un objeto con una propiedad con todas las profesiones que se desarrollan 
//en "Brastlewark" y otra con la cantidad de profesiones encontradas.

// 11 Crear una funcion que devuelva el habitante con mayor volumen de "Brastlewark". Calculamos el 
//volumen multiplicando el alto por el ancho.
const mayorVolumen = () => {
    let volumen;
    for (i = 0; i < personajes.length; i++) {
        (personajes[i] >= volumen) ? true : (volumen = personajes[i].height * personajes[i].weight);
    }
    let data = personajes.filter(personaje => (personaje.height * personaje.weight) < volumen);
    return data;
}
console.log(mayorVolumen())
