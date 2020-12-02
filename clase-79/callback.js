/*
const suma = (value1, value2, callback) => {
    callback(value1 + value2);
};
suma(10, 12, (resultado) => console.log(`La suma es ${resultado}`));

const personajes = getInhabitants();
filter(personajes, "hair_color", "Pink", (personaje) => {
    console.log(personaje);
});

console.log("------------------");
filter(personajes, "name", "rome", (personaje) => {
    console.log(personaje);
});
*/
const persona = ["Sabrina", "Matias", "Adrian"];

const animales = ["Perro", "Zorro", "Gato"];

const filter2 = (array, find, callback) => {
    for (data of array) {
        if (data.includes(find)) {
            callback(data); // callback hace referencia a fn
        }
    }
};

const fn = (animales) => {
    console.log("Este es un resultado ", animales);
};

const fn2 = (persona) => {
    console.log("Este es otro resultado", persona)
}

const filter = (array, prop, find, callback) => {
    for (data of array) {
        if (data[prop].includes(find)) {
            callback(data);
        }
    }
};
console.log(filter2(animales, 'rro', fn(animales)))


//            EJERCICIOS

//1 Crear una función crearUsuario que reciba como argumento un callback. La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.

const crearUsuario = (callback) => {
    const usuario = prompt('Ingrese su nombre de usuario');
    console.log(usuario);
    callback();
}

const confirmarCreacion = () => alert("Usuario creado!"); // callback
//crearUsuario(confirmarCreacion);

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!


//2 Crear una función validarUsuario que reciba como argumento un callback validador. El callback debe ser una función que tome un string como argumento, haga alguna validación, y devuelva true o false si pasa dicha validación o no. La función validarUsuario, al ejecutarse, debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje si el usuario ingresado es correcto o no.
// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

const validarUsuario = (callback) => {
    const usuario = prompt('Ingrese su nombre de usuario');
    callback(usuario);

}
const validacion = (string) => {
    if (string.includes(" ")) {
        return alert('Datos incorrectos');
    } else {
        alert('Usuario creado correctamente');
    }
    console.log(string);
}
//validarUsuario(validacion);

