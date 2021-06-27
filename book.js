let lista = ['prueba', 'mercado', 'nombre', 'manual', 'verdadero', 'salpicón', 'enchufle', 'einstein', 'flirt', 'lander', 'micrófono', 'mariachi', 'sensación', 'mercenario', 'delirio', 'detener', 'madre', 'esquimal', 'incierto', 'revoltura', 'toma', 'elfo', 'cita', 'isla', 'receptivo', 'cantante', 'emoción', 'estereotipo', 'reminisencia', 'marcador', 'jerónimo', 'estética', 'elocuente', 'salchipapa', 'caminante', 'arrepentido', 'financiado', 'labrador', 'master', 'predominio', 'cansancio', 'cobertizo', 'epifanía', 'devoto', 'dueña', 'agreste', 'pendiente', 'combinación', 'dádiva', 'eficiente', 'encuentro', 'tierra', 'sabiduría', 'manutención', 'sonoro', 'liberado', 'meridiano', 'marcado', 'enumerar', 'instancia', 'falso', 'ensalada', 'reiniciar', 'malévolo', 'intérvalo', 'desodorante', 'micción', 'solarte', 'envidia', 'piedemonte', 'ocaso', 'elevar', 'colirio', 'tienda', 'aceptar', 'número', 'tímido', 'fascinante', 'embarazada', 'cabildo', 'propietario', 'validar', 'mentira', 'habilidad', 'recuerdo', 'verdades', 'estéban', 'lírica', 'sabuezo', 'piedad', 'refrescante', 'vetado', 'cortizol', 'alelo', 'misterio', 'vestido', 'vitalidad', 'cubrelecho', 'estrella', 'claustro', 'buena', 'inóspito', 'cima', 'concubina', 'préstamo', 'déficit', 'nave', 'patria', 'apertura', 'músico', 'estridente', 'repetido'];

let lista1 = ['prueba', 'tierra', 'sabiduría', 'manutención', 'sonoro', 'liberado', 'meridiano', 'marcado', 'manual', 'verdadero', 'salpicón', 'enumerar', 'instancia', 'falso', 'apertura', 'músico', 'estridente', 'mercado', 'nombre', 'manual', 'verdadero', 'salpicón', 'enchufle', 'einstein', 'flirt', 'lander', 'micrófono', 'mariachi', 'sensación', 'mercenario', 'delirio', 'detener', 'madre', 'esquimal', 'incierto', 'revoltura', 'toma', 'elfo', 'cita', 'isla', 'receptivo', 'cantante', 'emoción', 'estereotipo', 'reminisencia', 'marcador', 'jerónimo', 'estética', 'elocuente', 'salchipapa', 'caminante', 'arrepentido', 'financiado', 'labrador', 'master', 'predominio', 'cansancio', 'cobertizo', 'epifanía', 'devoto', 'dueña', 'agreste', 'pendiente', 'vetado', 'cortizol', 'master', 'combinación', 'dádiva', 'eficiente', 'encuentro', 'tierra', 'sabiduría', 'manutención', 'sonoro', 'liberado', 'meridiano', 'marcado', 'manual', 'verdadero', 'salpicón', 'enumerar', 'instancia', 'falso', 'ensalada', 'reiniciar', 'malévolo', 'intérvalo', 'desodorante', 'micción', 'solarte', 'envidia', 'piedemonte', 'ocaso', 'elevar', 'colirio', 'tienda', 'aceptar', 'número', 'tímido', 'fascinante', 'embarazada', 'cabildo', 'propietario', 'validar', 'mentira', 'habilidad', 'recuerdo', 'verdades', 'estéban', 'lírica', 'sabuezo', 'piedad', 'refrescante', 'vetado', 'cortizol', 'master', 'predominio', 'alelo', 'misterio', 'elfo', 'cita', 'isla', 'receptivo', 'cantante', 'emoción', 'estereotipo', 'reminisencia', 'marcador', 'mercado', 'nombre', 'manual', 'jerónimo', 'estética', 'elocuente', 'salchipapa', 'vestido', 'vitalidad', 'cubrelecho', 'estrella', 'claustro', 'buena', 'inóspito', 'cima', 'master', 'combinación', 'dádiva', 'eficiente', 'encuentro', 'tierra', 'sabiduría', 'manutención', 'sonoro', 'liberado', 'meridiano', 'marcado', 'manual', 'concubina', 'préstamo', 'déficit', 'nave', 'patria', 'apertura', 'músico', 'estridente', 'repetido', 'completado'];

let lista2 =['En aquel pueblo', 'como en todos los pueblos', 'había niños ricos y pobres. Uno de los', 'niños cumplió años y le regalaron muchas cosas:', 'Un caballo de madera, seis pares de calcetines blancos, una', 'caja de lápices y tres horas diarias para hacer lo que quisiera.', 'Durante los diez primeros minutos el niño rico miró', 'todo con indiferencia. Empleó otros diez', 'minutos en hacer rayas por las', 'minutos en hacer rayas por las', 'minutos...'];

let starter;
/*let starter1;
let starter2;
let starter3;*/
let countInterval;
document.getElementById('stop').style.display= 'none';
/*document.getElementById('stop1').style.display= 'none';
document.getElementById('stop2').style.display= 'none';*/
document.getElementById('restart').style.display= 'none';
/*const close = document.getElementById('close');*/
/*const closeEj3 = document.getElementById('closeEj3');
const ej1 = document.getElementById('ej1');
const ej2 = document.getElementById('ej2');
const ej3 = document.getElementById('ej3');
const ej4 = document.getElementById('ej4');*/

function myFunction() {
    lista.push(lista[0]);
    document.getElementById('demo').innerHTML = lista[0];
    lista.shift();
 }

 function myFunction1() {
    lista.push(lista[0]);
    lista.push(lista[1]);
    document.getElementById('demo1').innerHTML = lista[0]+' '+lista[1];
    lista.shift();
    lista.shift();
 }

function myFunction2() {
    lista2.push(lista2[0]);
    document.getElementById('demo2').innerHTML = lista2[0];
    lista2.shift();
 }

 function myFunction3() {
    lista1.push(lista1[0]);
    document.getElementById('demo3').innerHTML = lista1[0];
    if (!(lista1[0] === 'completado')) {
        lista1.shift();
    }else {
        lista1.shift();
        document.getElementById('start3').style.display = 'block';
        document.getElementById('reiniciar').style.display = 'block';
        clearInterval(starter3);
        /*close2.classList.remove('visually-hidden');*/
    }
 }

function repetir() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
    starter = setInterval(myFunction, 100);
}

function detener() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
    clearInterval(starter);
    clearInterval(countInterval);
    /*close.classList.remove('visually-hidden');*/
}

function redetener() {
    document.getElementById('start').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('stop').style.display = 'none';
    clearInterval(starter);
    clearInterval(countInterval);
    /*close.classList.remove('visually-hidden');*/
}

function repetir1() {
    document.getElementById('start1').style.display = 'none';
    document.getElementById('stop1').style.display = 'block';
    starter1 = setInterval(myFunction1, 100);
}

/*function detenerEj3() {
    document.getElementById('start1').style.display = 'block';
    document.getElementById('stop1').style.display = 'none';
    closeEj3.classList.remove('visually-hidden');
    clearInterval(starter1);
}*/

function repetir2() {
    document.getElementById('start2').style.display = 'none';
    document.getElementById('stop2').style.display = 'block';
    starter2 = setInterval(myFunction2, 100);
}

function detener2() {
    document.getElementById('start2').style.display = 'block';
    document.getElementById('stop2').style.display = 'none';
    clearInterval(starter2);
}

function repetir3() {
    /*close2.classList.add('visually-hidden');*/
    document.getElementById('start3').style.display = 'none';
    document.getElementById('reiniciar').style.display = 'none';
    starter3 = setInterval(myFunction3, 90);
}

let valor = 0;
function incrementar() {
    if (valor >= 10) {
        valor = 0;
    } else {
        valor++;
    }
    // let contador = valor * 60000;
    document.getElementById('tempo').innerHTML = `${valor}`;
    // console.log(tiempoProgramado());
}

function disminuir() {
    if (valor == 0) {
    } else {
        valor--;
    }
    // let contador = valor * 60000;
    document.getElementById('tempoEj3').innerHTML = `${valor}`;
    // console.log(tiempoProgramado());
}
/*
function incrementarEj3() {
    if (valor >= 10) {
        valor = 0;
    } else {
        valor++;
    }
    // let contadorEj3 = valor * 60000;
    document.getElementById('tempoEj3').innerHTML = `${valor}`;
    // console.log(tiempoProgramado());
}

function disminuirEj3() {
    if (valor == 0) {
    } else {
        valor--;
    }
    // let contadorEj3 = valor * 60000;
    document.getElementById('tempoEj3').innerHTML = `${valor}`;
    // console.log(tiempoProgramado());
}*/

function mostrarTiempo(contador) {
    if (contador == 0) {
        document.getElementById('minutes').innerHTML = 0;
        document.getElementById('seconds').innerHTML = 0;
    } else {
        let ms = contador;
        let min = Math.trunc(ms / 60000);
        let msresto = ms - min * 60000;
        let seg = Math.trunc(msresto / 1000);
        document.getElementById('tempo').innerHTML = `${min}`;
        document.getElementById('minutes').innerHTML = `${min}`;
        document.getElementById('seconds').innerHTML = `${seg}`;
        document.getElementById('milisegundos').innerHTML = `${ms}`;
    }
}

/*function mostrarTiempoEj3(contadorEj3) {
    if (contadorEj3 == 0) {
        document.getElementById('minutesEj3').innerHTML = 0;
        document.getElementById('secondsEj3').innerHTML = 0;
    } else {
        let ms = contadorEj3;
        let min = Math.trunc(ms / 60000);
        let msresto = ms - min * 60000;
        let seg = Math.trunc(msresto / 1000);
        document.getElementById('tempoEj3').innerHTML = `${min}`;
        document.getElementById('minutesEj3').innerHTML = `${min}`;
        document.getElementById('secondsEj3').innerHTML = `${seg}`;
        document.getElementById('milisegundosEj3').innerHTML = `${ms}`;
    }
}*/
const tiempoProgramado = () => document.getElementById('tempo').innerHTML;
/*const tiempoProgramadoEj3 = () => document.getElementById('tempoEj3').innerHTML;*/

function temporizador() {
    let tmpz = tiempoProgramado();
    if (tmpz == 0) {
        document.getElementById('tempo').innerHTML = 5;
        tmpz = 5;
    }
    repetir();
    /*close.classList.add('visually-hidden');*/
    let contador = tmpz * 60000;
    countInterval = setInterval(function() {
        contador = contador - 1000;
        if (contador <= 0) {
            clearInterval(countInterval);
            document.getElementById('demo').innerHTML = 'Click Start';
            document.getElementById('seconds').innerHTML = 0;
            redetener();
        }else {
            mostrarTiempo(contador);
        }
    }, 1000);
}

function restart() {
    repetir();
    /*close.classList.add('visually-hidden');*/
    let contador = document.getElementById('milisegundos').innerHTML;
    countInterval = setInterval(function() {
        contador = contador - 1000;
        if (contador <= 0) {
            clearInterval(countInterval);
            document.getElementById('seconds').innerHTML = 0;
            document.getElementById('demo').innerHTML = 'Click Start';
            redetener();
        }else {
            mostrarTiempo(contador);
        }
    }, 1000);
}

/*function temporizadorEj3() {
    let tmpz = tiempoProgramadoEj3();
    if (tmpz == 0) {
        document.getElementById('tempoEj3').innerHTML = 5;
        tmpz = 5;
    }
    repetir1();
    closeEj3.classList.add('visually-hidden');
    let contadorEj3 = tmpz * 60000;
    countInterval = setInterval(function() {
        contadorEj3 = contadorEj3 - 1000;
        if (contadorEj3 <= 0) {
            clearInterval(countInterval);
            document.getElementById('demo1').innerHTML = 'Click Start';
            document.getElementById('secondsEj3').innerHTML = 0;
            detenerEj3();
        }else {
            mostrarTiempoEj3(contadorEj3);
        }
    }, 1000);
}
*/
function palabra() {
    let aleatorio = Math.floor(Math.random()*(lista1.length));
    let seleccion = lista1[aleatorio];
    document.getElementById('seleccion').innerHTML = `${seleccion}`;
    document.getElementById('respuesta').innerHTML = `?`;
    document.getElementById('demo3').innerHTML = `Click Start`;
}

function buscarRepetidos() {
    let cuenta = 0;
    let world = document.getElementById('seleccion').innerHTML;
    for (let i = 0; i <= lista1.length-1; i++) {
        if (lista1[i] === world) {
            cuenta++
        }
    }
    document.getElementById('respuesta').innerHTML = `${cuenta}`;
}

/*abrir y cerrar modal*/

/*const open = document.getElementById('open');*/ /*botón abrir modal en página ejercicio1.html*/
/*const e1Modal = document.getElementById('e1Modal');*/ /*div modal ejercicio 1*/
/*const e2Modal = document.getElementById('e2Modal');*/ /*div modal ejercicio 2*/
/*const fondo = document.getElementById('fondo');*/ /*id del body de la página*/

/* open abrir modal en página ejercicio1.html no es util para la página pruebas.html*/
/*open.addEventListener('click', () => {
    e1Modal.classList.add('show');
    fondo.classList.add('fondo');
    open.classList.add('visually-hidden');
});*/

/* close botón del modal del ejercicio 1 para cerrarlo*/
/*close.addEventListener('click', () => {
    fondo.classList.remove('fondo');
    e1Modal.classList.remove('show');
    open.classList.remove('visually-hidden');
});*/

/* close2 botón del modal del ejercicio 2 para cerrarlo*/
/*close2.addEventListener('click', () => {
    fondo.classList.remove('fondo');
    e2Modal.classList.remove('show');
    open.classList.remove('visually-hidden');
});*/

/* closeEj3 botón del modal del ejercicio 3 para cerrarlo*/
/*closeEj3.addEventListener('click', () => {
    fondo.classList.remove('fondo');
    e3Modal.classList.remove('show');
});

ej1.addEventListener('click', () => {
    e1Modal.classList.add('show');
    fondo.classList.add('fondo');
});

ej2.addEventListener('click', () => {
    e2Modal.classList.add('show');
    fondo.classList.add('fondo');
});

ej3.addEventListener('click', () => {
    e3Modal.classList.add('show');
    fondo.classList.add('fondo');
});*/

