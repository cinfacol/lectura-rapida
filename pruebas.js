let lista = ['prueba', 'mercado', 'nombre', 'manual', 'verdadero', 'salpicón', 'enchufle', 'einstein', 'flirt', 'lander', 'micrófono', 'mariachi', 'sensación', 'mercenario', 'delirio', 'detener', 'madre', 'esquimal', 'incierto', 'revoltura', 'toma', 'elfo', 'cita', 'isla', 'receptivo', 'cantante', 'emoción', 'estereotipo', 'reminisencia', 'marcador', 'jerónimo', 'estética', 'elocuente', 'salchipapa', 'caminante', 'arrepentido', 'financiado', 'labrador', 'master', 'predominio', 'cansancio', 'cobertizo', 'epifanía', 'devoto', 'dueña', 'agreste', 'pendiente', 'combinación', 'dádiva', 'eficiente', 'encuentro', 'tierra', 'sabiduría', 'manutención', 'sonoro', 'liberado', 'meridiano', 'marcado', 'enumerar', 'instancia', 'falso', 'ensalada', 'reiniciar', 'malévolo', 'intérvalo', 'desodorante', 'micción', 'solarte', 'envidia', 'piedemonte', 'ocaso', 'elevar', 'colirio', 'tienda', 'aceptar', 'número', 'tímido', 'fascinante', 'embarazada', 'cabildo', 'propietario', 'validar', 'mentira', 'habilidad', 'recuerdo', 'verdades', 'estéban', 'lírica', 'sabuezo', 'piedad', 'refrescante', 'vetado', 'cortizol', 'alelo', 'misterio', 'vestido', 'vitalidad', 'cubrelecho', 'estrella', 'claustro', 'buena', 'inóspito', 'cima', 'concubina', 'préstamo', 'déficit', 'nave', 'patria', 'apertura', 'músico', 'estridente', 'repetido'];

const startEj1 = document.getElementById('start');
const restartEj1 = document.getElementById('restart');
const stopEj1 = document.getElementById('stop');
const sumarTiempo = document.getElementById('incrementar');
const restarTiempo = document.getElementById('disminuir');
const atenuar = document.getElementById('fondo'); /*id del body de la página*/
let starter;
let countInterval;

document.getElementById('disminuir').style.display= 'none';

const tiempoProgramado = () => {
    let tmpz = document.getElementById('tempo').innerHTML;
    if (tmpz == 0) {
        document.getElementById('tempo').innerHTML = 5;
        tmpz = 5;
        let contador = tmpz * 60000;
        document.getElementById('milisegundos').innerHTML = contador;
        document.getElementById('disminuir').style.display= 'inline';
    } else {
        document.getElementById('milisegundos').innerHTML = tmpz * 60000;
    }
}

startEj1.addEventListener('click',arranque);
restartEj1.addEventListener('click', arranque);
stopEj1.addEventListener('click',detener);
sumarTiempo.addEventListener('click', incrementar);
restarTiempo.addEventListener('click', disminuir);

document.getElementById('stop').style.display= 'none';
document.getElementById('restart').style.display= 'none';

function arranque() {
    atenuar.classList.add('fondo');
    mostrarLista();
    let tmp = document.getElementById('milisegundos').innerHTML;
    if (tmp == 0) {
        tiempoProgramado();
    }

    let contador = document.getElementById('milisegundos').innerHTML;
    countInterval = setInterval(function() {
        contador = contador - 1000;
        if (contador <= 0) {
            timeOver();
            document.getElementById('remain').innerHTML = mostrarTiempo(contador);
            document.getElementById('visor').innerHTML = 'Click Start';
            document.getElementById('disminuir').style.display= 'none';
            atenuar.classList.remove('fondo');
        }else {
            document.getElementById('remain').innerHTML = mostrarTiempo(contador);
        }
    }, 1000);
}

function mostrarTiempo(contador) {
    document.getElementById('milisegundos').innerHTML = contador;
    let seconds = Math.floor((contador / 1000) % 60);
    let minutes = Math.floor((contador / (1000 * 60)) % 60);

    document.getElementById('tempo').innerHTML = minutes;

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
}

function mostrarLista() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('stop').style.display = 'block';
    starter = setInterval(mostrarElemento, 100);
}

function mostrarElemento() {
    lista.push(lista[0]);
    document.getElementById('visor').innerHTML = lista[0];
    lista.shift();
 }

function detener() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('restart').style.display = 'block';
    document.getElementById('stop').style.display = 'none';
    clearInterval(starter);
    clearInterval(countInterval);
}

function timeOver() {
    document.getElementById('start').style.display = 'block';
    document.getElementById('restart').style.display = 'none';
    document.getElementById('stop').style.display = 'none';
    clearInterval(starter);
    clearInterval(countInterval);
}

function incrementar() {
    document.getElementById('disminuir').style.display= 'inline';
    let tmpz = document.getElementById('tempo').innerHTML;
    tmpz++;
    if (tmpz == 10) {
        document.getElementById('incrementar').style.display= 'none';
    }
    document.getElementById('tempo').innerHTML = `${tmpz}`;
    document.getElementById('milisegundos').innerHTML = tmpz * 60000;
    showTime = document.getElementById('milisegundos').innerHTML;
    document.getElementById('remain').innerHTML = mostrarTiempo(showTime);
}

function disminuir() {
    document.getElementById('incrementar').style.display= 'inline';
    let tmpz = document.getElementById('tempo').innerHTML;
    if (tmpz == 0) {
        document.getElementById('milisegundos').innerHTML = 0;
        document.getElementById('remain').innerHTML = mostrarTiempo(tmpz);
        return;
    } else {
        tmpz--;
        if (tmpz == 0) {
            document.getElementById('disminuir').style.display= 'none';
        }
    }
    document.getElementById('tempo').innerHTML = `${tmpz}`;
    document.getElementById('milisegundos').innerHTML = tmpz * 60000;
    showTime = document.getElementById('milisegundos').innerHTML;
    document.getElementById('remain').innerHTML = mostrarTiempo(showTime);
}

/*abrir y cerrar modal*/

const e1Modal = document.getElementById('e1Modal'); /*div modal ejercicio 1*/
const btnEj1 = document.getElementById('btnEj1'); /*boton activar modal ejercicio 1*/
const btnCloseEj1 = document.getElementById('btnCloseEj1');

btnEj1.addEventListener('click', () => {
    e1Modal.classList.add('show');
    atenuar.classList.add('fondo');
});

    btnCloseEj1.addEventListener('click', () => {
    atenuar.classList.remove('fondo');
    e1Modal.classList.remove('show');
});
