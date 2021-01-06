
//const name = 'Mi aplicacion web';

const objeto = {
    name: 'griselda',
    lastname: 'De Lio',
    email: 'exaomple@gmail.com',
    edad: 33,
    datosBancarios: {
        cbu: '123123132313132',
        numeroCuenta: '4564564546',
        alias: 'ARO.PERRO.ROJO',
    }
};

//asignacion por destructuración
/*
const name=objeto.name;
const lastname= objeto.lastname;
const email=objeto.email;

const {name,lastname,email} = objeto;
console.log(name);
*/

//cambiando el nombre de variables desestructuradas
//const { name: name2, lastname, email } = objeto;
//console.log(name, name2);

//Desestructuracion anidada
/*
const {
    datosBancarios,
    datosBancarios: { numeroCuenta }, } = objeto;
//console.log(numeroCuenta)
//console.log(datosBancarios)

for (let props in objeto) {
    if (typeof objeto[props] === 'object') {
        const { numeroCuenta } = objeto[props];
        console.log(numeroCuenta);

        for (let datos in objeto[props]) {
            console.log(objeto[props][datos]);
        }
    }
}
console.log(datosBancarios)
*/
//Desestructurando parámetros
/*
const miFuncion = ({ name, datosBancarios }) => {
    console.log(name, datosBancarios);
}
miFuncion(objeto);
*/
//Operador spread
/*
const { name, ...restoDelObjeto } = objeto;
console.log(restoDelObjeto);
console.log(objeto);

restoDelObjeto.otroDato = 'otro dato';
restoDelObjeto.name = 'G. De Lio';
console.log(restoDelObjeto);
console.log(objeto);
*/
//Operador rest

//Inmutabilidad  NO ME PERMITE AGREGAR SOLO MODIFICAR DATOS EXISTENTES
//Object.freeze(objeto); //no me deja modificar ningun dato
/*
Object.seal(objeto);
objeto.name = 'G. De Lio';
objeto.edad = 20;
objeto.otroDato = 'Otro dato';
console.log(objeto)
*/


const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        primary: "Overgrow",
        hidden: "Chlorophyll",
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45,
    },
    moves: ["Growl", "Tackle", "Vine Whip", "Razor Leaf"],
    modifiers: {
        weakness: ["fire, ice", "flying", "psychic"],
        resistances: ["water", "grass", "electric", "fighter"],
    },
};

const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        primary: "Blaze",
        hidden: "Solar Power",
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65,
    },
    moves: ["Growl", "Scratch", "Flamethrower", "Dragon Breath"],
    modifiers: {
        weakness: ["water", "ground", "rock"],
        resistances: ["fire", "ice", "grass", "steal"],
    },
};

const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        primary: "Torrent",
        hidden: "Rain Dish",
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43,
    },
    moves: ["Tackle", "Tail Whip", "Water Gun", "Hydro Pump"],
    modifiers: {
        weakness: ["electric", "grass"],
        resistances: ["water", "fire", "ice", "steel"],
    },
};

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        primary: "Static",
        hidden: "Lightning rod",
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90,
    },
    moves: ["Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"],
    modifiers: {
        weakness: ["ground"],
        resistances: ["electric", "flying", "water", "steel"],
    },
};

// Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos
const getMoves = ({ moves }) => moves;
//console.log(getMoves(pikachu))

// Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria
const getPrimaryAbility = ({ ability: { primary } }) => primary;
//console.log(getPrimaryAbility(pikachu));

// Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
const getWeaknesses = ({ modifiers: { weakness } }) => weakness;
//console.log(getWeaknesses(pikachu));

// Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil
const getResistances = ({ modifiers: { resistances } }) => resistances;
//console.log(getResistances(pikachu));

// Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente a dicho tipo
const resistsType = (pokemon, tipo) => {
    let booleano;
    const { type, modifiers: { resistances } } = pokemon;
    if (type === tipo) {
        for (resistance of resistances) {
            (tipo === resistance) ? booleano = true : false;
        }
    }
    return booleano;
}
//console.log(resistsType(pikachu, "electric"))

// Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" }
const resistsMove = (pokemon, movimiento) => {
    const { modifiers: { resistances } } = pokemon;
    const { type } = movimiento;
    return resistances.includes(type);
}

console.log(resistsMove(pikachu, { name: "Rain dance", type: "water" }))

const resistsMove1 = ({ modifiers: { resistances } }, { type }) => {
    return resistances.includes(type);
}
console.log(resistsMove1(pikachu, { name: "Rain dance", type: "water" }))