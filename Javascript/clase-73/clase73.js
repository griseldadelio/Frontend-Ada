const inhabitant = {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail:
        "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    professions: [
        "Metalworker",
        "Woodcarver",
        "Stonecarver",
        " Tinker",
        "Tailor",
        "Potter",
    ],
    family: {
        couple: "Milli Wrongratchet",
        childs: ["Malbert Chillwidget", "Ecki Quickpower"],
    },
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
};

// Asignación por destructuración
// const array = ["Sabrina", "Matias", "Adrián"];

// const [, , profe1] = array;

const person = {
    name: "Adrian",
    lastname: "Solimano",
    email: "adrian@ada.com",
};

const { name, ...datosResto } = person;

// console.log(datosResto, name);

// console.log(person.lastname);

// Cambiando el nombre de variables destructuradas.
let age = 39;

// const { age: edad, friends } = inhabitant;

// console.log(age, edad, friends);

// Desestructuración anidada

const {
    family,
    age: edad,
    family: { childs },
} = inhabitant;

// console.log(inhabitant.family.childs);

// Destructurando parámetros

const mostrarNombre = ({ name }) => {
    console.log(name);
};

//const mostrarNombre = ({ id }) => { };

const calcularVolumen = ({ height, width }) => {
    console.log(height * width);
};

mostrarNombre(inhabitant);

const { imagen, ...lasOtrasPropsDelWebinar } = webinar;

lasOtrasPropsDelWebinar.formImage = objetoImagen;

api.add(lasOtrasPropsDelWebinar);


/*  LAS ACTIVIDADES DE ESTA CLASE ESTAN EN LA CLASE NUMERO 71, ERA LA CONTINUACION */