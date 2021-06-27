*- Un objeto es una colección de pares "nombre/valor", o un plano "cadena a valor".
-*
let book = {  // Los objetos están contenidos entre llaves.
topic: "JavaScript",  // La propiedad "topic" tiene como valor "JavaScript."
edition: 7  // La propiedad "edition" tiene como valor 7
};

*- Una función es un bloque de código JavaScript con nombre y parámetros que usted define una vez, y luego puede invocar una y otra vez.
-*

por ejemplo:

function plus1(x) {
    return x + 1;
}

Desde ES6 se puede escribir como función flecha

const plus1 = x => x +1;

let y = 3;

plus1(y); // => 4

- Llamar 2 funciones en una expresión

const square = x => x * x;

square(plus1(y)); // => 16: invocamos 2 funciones en una expresión.

*- Cuando usamos funciones con objetos, obtenemos métodos -*

*- Cuando las funciones están asignadas a las propiedades de un objeto, entonces las llamamos "metodos"-*

*- Todos los objetos JavaScript (incluyendo los arrays) tienen métodos -*

let a = [];  // Crea un array vacio.
a.push(1,2,3);  // el método push() adiciona elementos a un array.

También podemos definir nuestros propios métodos

let points = [     // An array with 2 elements.
    {x: 0, y: 0},  // Each element is an object.
    {x: 1, y: 1}
];

