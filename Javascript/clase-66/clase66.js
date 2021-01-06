/*console.log(5 + 6);
console.log(5 === '5');
console.log(5 === '5' && true);
console.log(5 === '5' || true);
console.log(5 == '5' || false || false);
console.log(5 === '5' || false || false);
console.log((5 == '5' || false) && false);
console.log((5 === '5' || false) && false);
*/

//OPERADORES TERNARIOS
if (5 === '5') {
    //console.log('Es Verdadero');
} else {
    //console.log('Es Falso');
}
//let _var=(condicion)?esto pasa cuando es true:esto pasa cuando es false;
let _var = (5 === '5') ? 'Es Verdadero' : 'Es Falso';
//console.log(_var)

let _var1 = (5 == '5') ? 'Es Verdadero' : 'Es Falso';
//console.log(_var1)

/*false	 ESTOS DAN TODO COMO FALSO
0
-0
0n
""
null
undefined
NaN	*/

// 1- Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano 
//tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. 
//Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.
const puedeVerPelicula = (edad, tieneAutorizacion) => (edad > 15 || tieneAutorizacion) ? 'Esta Autorizada' : 'No esta Autorizada';
/*
console.log(puedeVerPelicula(12, false));
console.log(puedeVerPelicula(12, true));
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true));
*/

// 2- Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo,
// y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de 
//los extremos se considera que está dentro del rango)

const estaEnRango = (valor, numMin, numMax) => (valor >= numMin && valor <= numMax);

/*
console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false
*/

//3- Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar
// o false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

const puedeAvanzar = (str) => {
    if (str === 'verde' || str === 'amarillo' || str === 'rojo') {
        return (str === 'verde');
    }
    return 'Error: color de semáforo inválido'
}

const puedeAvanzar1 = (str) => {
    if (!['verde', 'amarillo', 'rojo'].includes(str)) return 'Error: color de semáforo inválido'
    return (str === 'verde');
}
/*
console.log(puedeAvanzar1('verde'));     // true
console.log(puedeAvanzar1('amarillo'));  // false
console.log(puedeAvanzar1('rojo'));      // false
console.log(puedeAvanzar1('lila'));      // 'Error: color de semáforo inválido'
*/

//4- Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
const esVocal = (letra) => (['a', 'e', 'i', 'o', 'u'].includes(letra));
/*
console.log(esVocal('a')); // true
console.log(esVocal('n')); // false
console.log(esVocal('e')); // true
console.log(esVocal('f')); // false
console.log(esVocal('u')); // true
console.log(esVocal('i')); // true
*/

//5- Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no 
//lo es

//const esConsonante = (letra) => (!['a', 'e', 'i', 'o', 'u'].includes(letra));
const esConsonante = (letra) => (!esVocal(letra));
/*
console.log(esConsonante('a')); // false
console.log(esConsonante('n')); // true
console.log(esConsonante('i')); // false
console.log(esConsonante('e')); // false
console.log(esConsonante('r')); // true
*/

// 6- Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
const esHoraValida = (hora) => {
    let hora_split = hora.split(':');
    if (hora_split[0] < 25 && hora_split[1] < 61) {
        return 'Hora válida';
    }
    return 'Hora no válida'
}
/*
console.log(esHoraValida('12:23')) // true
console.log(esHoraValida('12:65')) // false
console.log(esHoraValida('28:05')) // false
console.log(esHoraValida('00:00')) // true
*/

//7-Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => (pasoTests && (tieneMultasImpagas === false) && pagoImpuestos) ? 'Esta habilitado' : 'No esta habilitado';
/*
console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true)) // false
console.log(puedeRenovarCarnet(false, false, false)) // false
*/
//8-Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 50 materias aprobadas o más y la tesis aprobada.
const puedeGraduarse = (asistencia, materiasAprobadas, tesis) => (asistencia >= 75 && materiasAprobadas >= 50 && tesis === true);
/*
console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true)) // false
console.log(puedeGraduarse(28, 45, false)) // false
*/

//9- Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string 
//impar si el numero es impar

const esParOImpar = (numero) => (numero % 2 == 0) ? 'par' : 'impar';
/*
console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'
*/

//10-Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, o el string negativo si el numero es negativo
const esPositivoONegativo = (numero) => (numero > 0) ? 'Positivo' : 'Negativo';
/*
console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5))
console.log(esPositivoONegativo(-20))// 'negativo'
*/

//11- Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde
const avanzarSemaforo = (colorActual) => {
    switch (colorActual) {
        case 'verde':
            return 'amarillo';
        case 'amarillo':
            return 'rojo';
        case 'rojo':
            return 'verde';
        default:
            return 'Color no válido'
    }
};
/*
console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'
console.log(avanzarSemaforo('lila'))
*/

//12- Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes
const obtenerDiasMes = (mes) => {
    switch (mes) {
        case 'abril':
        case 'junio':
        case 'septiembre':
        case 'noviembre':
            return "El mes ingresado tiene 30 dias ";
        case 'enero':
        case 'marzo':
        case 'mayo':
        case 'julio':
        case 'agosto':
        case 'octubre':
        case 'diciembre':
            return "El mes ingresado tiene 31 dias ";
        case 'febrero':
            return "El mes ingresado tiene 29 dias ";
        default: "mes no válido"
    }
}
//console.log(obtenerDiasMes("diciembre")) // 31
//console.log(obtenerDiasMes("febrero"))   // 29

//13- Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:
//       TERMINAR
// Baby boomer	    => 1949-1968
// Generación X	    => 969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010
const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return 'Generación: Baby boomer'
    }
    if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return 'Generación: Generación X'
    }
    if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return 'Generación: Millennials'
    }
    if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
        return 'Generación: Generación Z'
    }
}
/*
console.log(obtenerGeneracion(1955))
console.log(obtenerGeneracion(1975))
console.log(obtenerGeneracion(1990))
console.log(obtenerGeneracion(2005))
*/
//14- Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:
const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return '¡Está helando!';
    }
    if (temperatura >= 0 && temperatura < 15) {
        return '¡Hace frío!';
    }
    if (temperatura >= 15 && temperatura < 25) {
        return 'Está lindo';
    }
    if (temperatura >= 25 && temperatura < 30) {
        return 'Hace calor';
    }
    if (temperatura >= 30) {
        return '¡Hace mucho calor!';
    }
}
/*
console.log(obtenerSensacion(-3))
console.log(obtenerSensacion(13))
console.log(obtenerSensacion(20))
console.log(obtenerSensacion(28))
console.log(obtenerSensacion(35))
*/
// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!

//15- Crear una función obtenerNota que tome como argumento un número puntaje y devuelva un string dependiendo del puntaje redondeado, con las siguientes reglas:
const obtenerNota = (puntaje) => {
    if (puntaje < 6) {
        return 'Desaprobado';
    }
    if (puntaje >= 6 && puntaje < 7) {
        return ' Regular';
    }
    if (puntaje >= 7 && puntaje < 8) {
        return ' Bueno';
    }
    if (puntaje >= 8 && puntaje < 10) {
        return ' Muy bueno';
    }
    if (puntaje === 10) {
        return 'Excelente';
    }
    if (puntaje < 0 || puntaje > 10) {
        return 'Puntaje inválido';
    }
}
/*
console.log(obtenerNota(3))
console.log(obtenerNota(6))
console.log(obtenerNota(7))
console.log(obtenerNota(9))
console.log(obtenerNota(10))
console.log(obtenerNota(11))
*/
// Menor a 6	                        => Desaprobado
// Mayor o igual a 6 y menor a 7	    => Regular
// Mayor o igual a 7 y menor a 8	    => Bueno
// Mayor o igual a entre 8 y menor a 10 => Muy bueno
// 10	                                => Excelente
// Menor a 0 o mayor a 10	            => Puntaje inválido

//16- Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)
const jugarPiedraPapelTijera = (a, b) => {
    if (a === 'piedra') {
        if (b === 'piedra') {
            return '¡Empate!';
        }
        if (b === 'tijera') {
            return '¡Ganó piedra!';
        }
        if (b === 'papel') {
            return '¡Ganó papel!';
        }
    }
    if (a === 'papel') {
        if (b === 'piedra') {
            return '¡Ganó papel!';
        }
        if (b === 'tijera') {
            return '¡Ganó tijera!';
        }
        if (b === 'papel') {
            return '¡Empate!';
        }
    }
    if (a === 'tijera') {
        if (b === 'piedra') {
            return '¡Ganó piedra!';
        }
        if (b === 'tijera') {
            return '¡Empate!';
        }
        if (b === 'papel') {
            return '¡Ganó tijera!';
        }
    }
}
/*
console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera')) // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))  // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
*/

//17- Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.
let dineroInicial = 25000;
const retirarDinero = (retiro) => {
    if (retiro > dineroInicial) {
        return 'Saldo no Disponible'
    }
    return dineroInicial = dineroInicial - retiro;
}
/*
console.log(retirarDinero(15000))
console.log(retirarDinero(10000))
console.log(retirarDinero(30000))
*/


//Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar mostrando un mensaje con el nombre del tamagochi y los valores de cada variable (que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, que modifican los valores de la siguiente forma:
//ALIMENTAR: +3 energía, +2 felicidad
//JUGAR: +2 felicidad, -2 energía, -1 limpieza
//DORMIR: +5 energía, +2 salud, -2 limpieza
//VACUNAR: +5 salud, -6 felicidad
//BAÑAR: +3 salud
//RETAR: -3 felicidad
//ACARICIAR: +4 felicidad
//Cuando el usuario selecciona una, debe mostrar el valor final de las variables.
const getRandom = () => {
    return Math.ceil(Math.random() * 10);
};

let salud = getRandom();
let felicidad = getRandom();
let limpieza = getRandom();
let energia = getRandom();

const healthSpan = document.getElementById("healthSpan");
const happinessSpan = document.getElementById("happinessSpan");
const cleanlinessSpan = document.getElementById("cleanlinessSpan");
const energySpan = document.getElementById("energySpan");

const alimentar = () => {
    energia += 3;
    felicidad += 2;
};

const jugar = () => {
    energia -= 2;
    felicidad += 2;
    limpieza -= 1;
};
const dormir = () => {
    energia += 5;
    salud += 2;
    limpieza -= 2;
};

const vacunar = () => {
    salud += 5;
    felicidad -= 6;
};

const baniar = () => {
    salud += 3;
};

const retar = () => {
    felicidad -= 3;
};

const acariciar = () => {
    felicidad += 4;
};

const tamagochiMenu = (action) => {
    switch (action) {
        case "ALIMENTAR":
            alimentar();
            break;
        case "JUGAR":
            jugar();
            break;
        case "DORMIR":
            dormir();
            break;
        case "VACUNAR":
            vacunar();
            break;
        case "BAÑAR":
            baniar();
            break;
        case "RETAR":
            retar();
            break;
        case "ACARICIAR":
            acariciar();
            break;
    }
};
const updateSpan = () => {
    // de la referencia healthSpan le guardo cambio el valor de la salud actual
    healthSpan.innerHTML = salud;
    happinessSpan.innerHTML = felicidad;
    cleanlinessSpan.innerHTML = limpieza;
    energySpan.innerHTML = energia;
};
// inicializo - muestro en pantalla los valores de status
updateSpan();

//  cada vez que se apreta un boton se llama a tamagochi
const tamagochi = (action) => {
    tamagochiMenu(action);
    updateSpan();
};
