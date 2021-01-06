//1 Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.
const saludo = () => {
    let texto = 'Bienvenida';
    let nombre = prompt('Ingrese su nombre');

    document.getElementById("saludar").style.fontSize = '50px';
    document.getElementById("saludar").style.fontFamily = 'Segoe UI';
    document.getElementById("saludar").style.textAlign = 'center';
    document.getElementById("saludar").style.marginTop = '80px';
    document.getElementById('saludar').innerHTML = `${texto} ${nombre}`;
}
//saludo()

//2 Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.
const cambiarColor = () => {
    let colorSelect = prompt('Ingrese su color en sistema hexadecimal');
    color.style.backgroundColor = colorSelect;
}
//cambiarColor()

//3 Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
const colorRgb = () => {
    let rojo = parseInt(prompt('Ingrese un valor de 0 a 255 para rojo'));
    let verde = parseInt(prompt('Ingrese un valor de 0 a 255 para verde'));
    let azul = parseInt(prompt('Ingrese un valor de 0 a 255 para verde'));
    if (rojo >= 0 && rojo <= 255) {
        rojo = rojo;
    }
    if (verde >= 0 && verde <= 255) {
        verde = verde;
    }
    if (azul >= 0 && azul <= 255) {
        azul = azul;
    }
    color.style.backgroundColor = `rgb(${rojo}, ${verde},${azul})`;
}
//colorRgb()

//4 Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:
const tamañoImagen = () => {
    let tamaño = prompt('Seleccione el tamaño de la imagen: chica, mediana o grande');
    let imagen = document.getElementById('imagen');
    switch (tamaño) {
        case 'chica':
            imagen.style.width = '200px';
            break;
        case 'mediana':
            imagen.style.width = '500px';
            break;
        case 'grande':
            imagen.style.width = '800px';
            break;
        default:
            alert('Su dato ingresado no es válido')
    }
}
tamañoImagen()
// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px
