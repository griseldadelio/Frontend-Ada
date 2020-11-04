/*const user = {
    name: 'adrian',
    lastname: 'Solimano',
    age: 37,
    phone: '3456780',
}
//console.log(user.name);

// agregar dato al objeto
user.address = 'directorio 1234';
//console.log(user);

//eliminar dato
delete user.phone;
//console.log(user);

//modificar 
//user.address = 'otra direccion 234';

/*
console.log(user);

console.log('pepe' in user);
console.log('name' in user);

console.log(user.name);
console.log(user['name']);

//const key = 'lastname';
//console.log(user[key]);

const formControls = ['name', 'email', 'phone', 'pasword'];
for (let value of formControls) {
    //code
    user[value];
}
const key = 'lastname';
*/
//EJERCICIOS
//1- Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// - Mostrar en consola el objeto sobreMi
const sobreMi = { nombre: 'Laura', apellido: 'Lopez', edad: 54 };
//console.log(sobreMi)

//2- Crear una variable llamada user, a la que le vamos a asignar un objeto.
// - El objeto tiene que tener 3 propiedades: fullname, email, age
// - Mostrar en consola el objeto user
// - Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = { fullname: 'Laura Lopez', email: 'lauralopez@gmail.com', age: 43 };
//console.log(user);
//console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años`);

//3-Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

var song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV",
};

var cancion = {
    // completar el codigo
    titulo: song.title,
    banda: song.bandName,
    duracion: song.duration / 1000,
};

//console.log(cancion); // { titulo: 'Rock and Roll', banda: 'Led Zeppelin', duracion: 166 }

//4-Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// var example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Escribi aca abajo los objetos para cada uno de las personas que nos enviaron

// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
const personas = [{
    id: 0,
    nombre: "Ada",
    email: "ejemplo@terra.com",
    telefono: "1029384756"

},
{
    id: 1,
    nombre: "Grace",
    email: "ejemplo@terra.com",
    telefono: "1029384756"

},
{
    id: 2,
    nombre: "Hedy",
    email: "ejemplo@terra.com",
    telefono: "1029384756"

},
{
    id: 3,
    nombre: "Radia",
    email: "ejemplo@terra.com",
    telefono: "1029384756"

},
{
    id: 4,
    nombre: "Sheryl",
    email: "ejemplo@terra.com",
    telefono: "1029384756"

}
]
/*
console.log(personas[0].nombre);
// 2. El ID de Grace
console.log(personas[1].id);

// 3. El email de Hedy
console.log(personas[2].email);

// 4. El ID y nombre de Radia
console.log(personas[3].id, personas[3].nombre);

// 5. El telefono de Sheryl
console.log(personas[4].telefono);
*/

//5- Tenemos la variable datos que tiene un objeto con los datos de una persona
// El teléfono está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto. El télefono correcto es 0192837465
// También tenemos que modificar la edad, ya que es un string y necesitamos que sea un número.

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true,
};

// codea aca la solucion
datos.telefono = "0192837465";
datos.edad = 29;

// finalmente, mostramos los datos
//console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '0192837465',
//   edad: 29,
//   programa: true }

//6- Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
};

// codea aca la solucion
if (datos.programa === true) {
    datos.lenguajeFavorito = "Javascript";
}


// finalmente, mostramos los datos
//console.log(datos);
// { id: 1,
//   nombre: 'Ada',
//   apellido: 'Lovelace',
//   email: 'ada.lovelace@gmail.com',
//   telefono: '1234567890',
//   edad: 29,
//   programa: true,
//   lenguajeFavorito: 'Javascript' }

//7-Tenemos la variable datos con un objeto que guarda datos de una persona
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajesFavoritos, y asignale un array con dos lenguajes de programación
// Al final, mostrar en la consola la siguiente frase: "Hola, mi nombre es [ACA EL NOMBRE] y programo en [ACA EL LISTADO DE LENGUAJES FAVORITOS]"

var datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: 29,
    programa: true,
};

// codea aca la solucion
if (datos.programa === true) {
    datos.lenguajeFavorito = ["Javascript", "C++"];
}

// aca mostrar la frase
//console.log(`Hola, mi nombre es ${datos.nombre} y programo en ${datos.lenguajeFavorito}`);
// por ejemplo "Hola, mi nombre es Ada y me programo en Javascript,C++"

//8- Tenemos la variable disco con un objeto que guarda datos de un album musical
// Queremos obtener el nombre y año de lanzamiento del disco y nombre de la banda, para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]"
// Completá el código para lograr el resultado esperado

var disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};

// codea aca la solucion
var nombreDisco = disco.nombre;
var anioDisco = disco.anioLanzamiento;
var nombreBanda = disco.banda.nombre;

//console.log("El disco " + nombreDisco + " de la banda " + nombreBanda + " se lanzó en el año " + anioDisco);
// Debería mostrar
// El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011

//9- Tenemos la variable user, que es un objeto con datos de una persona en linkedin
// En el objeto hay una propiedad skills, que es un array con las distintas habilidades de la persona
// Necesitamos actualizar el perfil y agregar "Javascript" al array de de skills

var user1 = {
    id: 123456789,
    name: "Ada Lovelace",
    url: "https://www.linkedin.com/in/ada-lovelace",
    skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion
user1.skills.push("Javascript");
// despues de la solucion
//console.log(user1);
// deberia mostrar
// { id: 123456789,
//   name: 'Ada Lovelace',
//   url: 'https://www.linkedin.com/in/ada-lovelace',
//   skills: [ 'HTML', 'CSS', 'SASS', 'Javascript' ] }

//10- Crear una función que devuelva el volumen de una caja cuando se le pase un objeto con las medidas de la misma, 
//correspondientes al ancho, alto, y largo. El volumen se calcula multiplicando entre sí dichos valores.

const size = { width: 5, length: 10, height: 1 };

getBoxVolume = (size) => {
    let volumen = 1;
    for (const medida in size) {
        volumen *= size[medida];
    }
    return volumen;
}; // returns 10
//console.log(getBoxVolume(size));

//11- Tenemos un array de objetos, con las ganadoras de algunas temporadas de Rupaul.
// Cada objeto tiene las propiedades nombre, temporada y foto.
// Iterá/Recorré el array utilizando for y mostrá el nombre y la temporada que ganó. Por ejemplo: Bianca Del Rio ganó la temporada 6

const ganadoras = [
    {
        nombre: "Bebe Zahara Benet",
        temporada: "1",
        foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
    },
    {
        nombre: "Tyra Sanchez",
        temporada: "2",
        foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
    },
    {
        nombre: "Raja",
        temporada: "3",
        foto: "http://www.nokeynoshade.party/images/raja.jpg",
    },
    {
        nombre: "Sharon Needles",
        temporada: "4",
        foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
    },
    {
        nombre: "Jinkx Monsoon",
        temporada: "5",
        foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
    },
    {
        nombre: "Bianca Del Rio",
        temporada: "6",
        foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
    },
];

for (ganadora of ganadoras) {
    console.log(`${ganadora.nombre} ganó la temporada ${ganadora.temporada}`)
}
  ///// RESULTADO
  // Bebe Zahara Benet ganó la temporada 1
  // Tyra Sanchez ganó la temporada 2
  // Raja ganó la temporada 3
  // Sharon Needles ganó la temporada 4
  // Jinkx Monsoon ganó la temporada 5
  // Bianca Del Rio ganó la temporada 6
