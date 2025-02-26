// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosSorteados = [];


function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    (amigo == '') ? alert("Ingrese un nombre válido") : amigos.push(amigo);
    limpiarInput();
    mostrarLista();    

}
function limpiarInput() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
    let lista = '';
    for (let i = 0; i < amigos.length; i++){
       lista=lista+amigos[i]+'<br>';
    }
    asignarTextoPorID('listaAmigos', lista);
}
function sortearAmigo() {
    let amigoSecreto = elegirAmigoSecreto();
    asignarTextoPorID('listaAmigos', '');
    let texto = 'El amigo secreto es: ' + amigoSecreto;
    if (amigosSorteados.length == amigos.length) {
        texto = amigoSecreto;
    }
    asignarTextoPorID('resultado', texto);
}

function elegirAmigoSecreto() {
    numeroMaximo = amigos.length;
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo); //selecciona aleatoriamente una posicion del array de amigos
    let amigoElegido = amigos[numeroAleatorio];
    //Si ya sorteamos todos los amigos
    if (amigosSorteados.length == numeroMaximo) {
        return('Ya se sortearon todos los amigos posibles');
        
    } else {
        //Si el amigo elegido está incluido en la lista de sorteados vuelve a elegir otro amigo
        if (amigosSorteados.includes(amigoElegido)) {
            return elegirAmigoSecreto();
        } else {
            amigosSorteados.push(amigoElegido);
            return amigoElegido;
        }
    }

}

function asignarTextoPorID(id, texto) {
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;

}