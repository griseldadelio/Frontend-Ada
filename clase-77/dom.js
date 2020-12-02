// Trabajando con atributos
//      getAttribute - setAttribute - removeAttribute

// Modificando HTML
//      createTextNode - CreateElement - removeChild - replaceChild - appendChild - append - prepend

// innerHTML y template strings

const elem = document.getElementById("texto");
/*
// console.log(elem);
// elem.setAttribute("data-src", "bg-primary");
// console.log(elem);
// console.log(elem.getAttribute("data-ref"));
// elem.removeAttribute("data-ref");
// console.log(elem);

const habitantes = getInhabitants();

console.log(habitantes);

const primerHabitante = habitantes[0];

console.log(primerHabitante);

const h1 = document.createElement("h1");
const imagen = document.createElement("img");
imagen.setAttribute("src", primerHabitante.thumbnail);

const texto = document.createTextNode(primerHabitante.name);
h1.appendChild(texto);

const ul = document.createElement("ul");

for (data of primerHabitante.professions) {
    const li = document.createElement("li");
    const texto = document.createTextNode(data);
    li.appendChild(texto);
    ul.appendChild(li);
}

const p = document.createElement("p");
p.appendChild(document.createTextNode("Texto de ejemplo"));

elem.appendChild(h1);
elem.appendChild(imagen);
elem.appendChild(ul);
elem.removeChild(imagen);
elem.appendChild(imagen);
elem.replaceChild(p, ul);

const { name, age } = primerHabitante;

elem.append(`Este personaje se llama ${name} y tiene ${age} años`);
elem.prepend("Escribo un texto directamente al principio");
elem.innerHTML = `<p>Este personaje se llama ${name} y tiene ${age} años</p>`;
*/

//                   EJERCICIOS

//5 Hacer un programa que al iniciarse pregunte mediante un prompt por una temperatura, y con ese dato modifique 
//un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 
//dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

const temperatura = () => {
    let temp = parseInt(prompt('¿Cuál es la temperatura?'));
    const h1 = document.createElement('h1');
    let texto = document.createTextNode(temp);

    if (temp < 0) {
        h1.style.color = 'blue';
    }
    if (temp >= 0 && temp < 15) {
        h1.style.color = 'lightblue';
    }
    if (temp >= 15 && temp < 25) {
        h1.style.color = 'green';
    }
    if (temp >= 25 && temp < 30) {
        h1.style.color = 'yellow';
    }
    if (temp >= 30 && temp < 35) {
        h1.style.color = 'orange';
    }
    if (temp > 35) {
        h1.style.color = 'red';
    }
    h1.appendChild(texto);
    elem.appendChild(h1);
}

//temperatura()


// Temperatura	Color
// Menor a 0°	                        => Azul
// Mayor o igual a 0° y menor a 15°	    => Celeste
// Mayor o igual a 15° y menor a 25°	=> Verde
// Mayor o igual a 25° y menor a 30°	=> Amarillo
// Mayor o igual a 30° y menor a 35°	=> Naranja
// Mayor a 35°                          => Rojo

//6 Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un 
//prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se 
//ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
const barraProgreso = () => {
    const porcentaje = parseInt(prompt('Ingrese el porcentaje'));
    const contenedor = document.createElement('div');
    const barra = document.getElementById('progress');

    contenedor.style.backgroundColor = 'red';
    contenedor.style.height = '50px';
    contenedor.style.width = `${porcentaje}%`;
    barra.style.backgroundColor = 'lightgrey';
    barra.appendChild(contenedor);
}
//barraProgreso()

//7  En un documento html hacer un post de una red social que contenga:
// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad

// Dar estilos para que
// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const postSocial = () => {
    //Pedir los datos
    const usuario = prompt('Ingrese su usuario');
    const reacLike = parseInt(prompt("Ingrese cantidad de Me gusta"));
    const reacLove = parseInt(prompt("Ingrese cantidad de Me encanta"));
    const reacAw = parseInt(prompt("Ingrese cantidad de Me asombra"));

    // Creo los elementos
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const spanLike = document.createElement('span');
    const spanLove = document.createElement('span');
    const spanAwesome = document.createElement('span');

    //Texto
    const textoUser = document.createTextNode(`Nombre de usuario: ${usuario}`);
    const textoP = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sapiente! Ex aspernatur officiis quaerat, voluptatum quas exercitationem ducimus, vitae nam autem, numquam voluptate dolores magni quam doloribus cum aut corrupti!");
    const textlike = document.createTextNode(reacLike);
    const textlove = document.createTextNode(reacLove);
    const textAsw = document.createTextNode(reacAw);

    // Anidamos
    document.body.appendChild(h3);
    h3.appendChild(textoUser);
    document.body.appendChild(p);
    p.appendChild(textoP);
    document.body.appendChild(div);

    div.appendChild(spanLike);
    spanLike.innerHTML = (' <i class="fas fa-thumbs-up"></i> ');
    spanLike.appendChild(textlike);

    div.appendChild(spanLove);
    spanLove.innerHTML = (' <i class="fas fa-heart"></i> ')
    spanLove.appendChild(textlove);

    div.appendChild(spanAwesome);
    spanAwesome.innerHTML = (' <i class="far fa-surprise"></i> ')
    spanAwesome.appendChild(textAsw);

    //Para el estilado
    document.body.style.fontFamily = "Helvetica";
    spanLove.style.margin = "0 20px";
    const elements = [spanLike, spanLove, spanAwesome];
    for (element of elements) {
        element.style.border = "2px solid grey";
        element.style.borderRadius = "10px";
        element.style.padding = "5px 30px";
        element.style.background = "lightgrey";
        element.style.cursor = "pointer";
    }
}
//postSocial()

//8- Hacer un programa que al iniciarse pregunte mediante prompts por
// - un título
// - una url de una imagen
// - una url a un artículo

// Utilizar esos datos para completar en el html una card que tenga
// - una imagen, con la url de la imagen ingresada
// - un título, con el texto del título ingresado
// - un link que diga Leer más, con la url al artículo ingresado

// Dar algunos estilos mínimos a la card:
// - centrarla con respecto a la pantalla
// - agregarle un borde
// - agregarle un sombreado
// - cambiarle la tipografía
// - cambiarle los tamaños de fuente
// - cambiarle los colores por defecto

const card = () => {
    //Pedir los datos
    const titulo = prompt('Ingrese el titulo');
    const imagen = prompt('Ingrese la URL de una imagen');
    const articulo = prompt('Ingrese la URL de un artículo');

    //Creo los elementos
    const card = document.createElement('div');
    const title = document.createElement('h2');
    const tit = document.createTextNode(`Titulo: ${titulo}`);
    const img = document.createElement('img');

    //anidar
    document.body.appendChild(card);

    //anidar para el titulo
    title.appendChild(tit);
    card.appendChild(title);

    //anidar para imagen
    img.setAttribute("src", `${imagen}`);
    card.appendChild(img);

    //anidar para el articulo
    const leerMas = document.createElement("a");
    const link = document.createTextNode("leer más");
    leerMas.setAttribute("target", "_blank");
    leerMas.setAttribute("href", `${articulo}`);
    leerMas.append(link);
    card.appendChild(leerMas);

    //estilado
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';
    card.style.alignItems = 'center';
    card.style.backgroundColor = 'lightskyblue';
    card.style.width = '400px';
    card.style.border = '2px solid black';
    card.style.boxShadow = '5px 10px grey   ';
    card.style.fontFamily = 'helvetica';
    card.style.fontSize = '15px';
    card.style.color = 'black';
    card.style.margin = 'auto';
}
//card()

/*9- En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un
 programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones 
disponibles) y muestre solamente la imagen del animal elegido.*/

const animales = () => {
    const animalSelect = prompt('Seleccione su animal favorito entre: elefante, mono, perro, gato');
    const imagen = document.createElement('img');
    const div = document.createElement('div');

    switch (animalSelect) {
        case 'elefante':
            imagen.setAttribute('src', '../clase-77/img/elefante.jpg');
            break;
        case 'mono':
            imagen.setAttribute('src', '../clase-77/img/mono.jpg');
            break;
        case 'perro':
            imagen.setAttribute('src', '../clase-77/img/perros.jpg');
            break;
        case 'gato':
            imagen.setAttribute('src', '../clase-77/img/gato.jpg');
            break;
        default:
            alert('Su opción no es válida');
    }
    div.appendChild(imagen);
    document.body.appendChild(div);
    document.body.append(txt);
    imagen.style.width = '80%';
}
//animales()

/* 10-  Crear un documento html con un título que diga Mis canciones favoritas y una lista desordenada. 
Pedir mediante prompts por cinco canciones (una a la vez), y agregar esas canciones como ítems de la lista 
desordenada */

const misCanciones = () => {
    const div = document.getElementById('misCanciones');
    const arrayCanciones = [];
    for (i = 0; i < 5; i++) {
        const cancion = prompt('Seleccione su canción');
        arrayCanciones.push(cancion);
    }
    for (let cancion of arrayCanciones) {
        const li = document.createElement('li');
        li.innerHTML = cancion;
        const ul = document.getElementById('list');
        ul.appendChild(li);
        div.appendChild(ul);
        document.body.appendChild(div);
    }
}
//misCanciones();

/* 11- Crear un documento html que muestre un número (empezando en 0) y 6 botones con los siguientes valores:
 -1, +1, -5, +5, -10, +10. Cuando se clickea un botón, se tiene que sumar o restar la cantidad correspondiente,
  y actualizar el número mostrado.*/

const calculo = () => {
    let valor = 0;
    const h2 = document.createElement('h2');
    h2.innerHTML = valor;
    document.body.appendChild(h2);

    const datos = [-1, +1, -5, +5, -10, +10];
    for (let i = datos; i < datos.length, i++;) {
        let button = document.createElement('button');
        button.type = 'button';
        //button.innerText = datos[i];
        document.body.appendChild(button);
    }

}
calculo()